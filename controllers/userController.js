const db = require('../config/db');
const bcrypt = require('bcrypt');

// Create a new user
exports.createUser = async (req, res) => {
    const { username, password, role } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(password, 10);
        const [result] = await db.query(
            'INSERT INTO user (username, password, role) VALUES (?, ?, ?)',
            [username, hashedPassword, role]
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all users
exports.getUsers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT id, username, role, created_at, updated_at FROM user');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
