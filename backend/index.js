const express = require('express');
const cors = require('cors')
const mongoose = require('mongoose');
const User = require('./models/User');

const app = express();
const dbString = "mongodb+srv://devuser:devuser@cluster0.omanz.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
app.use(cors());
app.use(express.json());



// Connect to MongoDB
mongoose.connect(dbString, {
    useNewUrlParser: true,
    useUnifiedTopology: true
}).then(() => {
    console.log('Connected to MongoDB');
}).catch((error) => {
    console.log('Error:', error);
});

// Routes
app.post('/api/add-user', async (req, res) => {
    try {
        const { name, email, phone } = req.body;
        const user = new User({ name: name, email: email, phone: phone });
        await user.save();
        res.json({ user: user, message: 'User added successfully', success: true });
        // res.send({ user: user,message: 'User added successfully', success: true });
    } catch (error) {
        console.log('Error:', error);
        res.json({ error, success: false });
    }
});

app.get('/api/get-users', async (req, res) => {
    try {
        const users = await User.find();
        res.json({ users: users, success: true });
    } catch (error) {
        console.log('Error:', error);
        res.json({ error, success: false });
    }
})

app.listen(5000, () => {
    console.log('Server is running on port 5000');
});