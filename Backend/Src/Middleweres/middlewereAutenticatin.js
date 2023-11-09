const users = require('../Models/users')

const checkEmailExistence = async (req, res, next) => {
    const { email } = req.body;

    try {
        const user = await users.findOne({ email });
        if (user) {
            return res.status(400).json({ message: 'Email already exists in the database' });
        }
        next();
    } catch (error) {
        return res.status(500).json({ error: error.message });
    }
};

module.exports = checkEmailExistence;
