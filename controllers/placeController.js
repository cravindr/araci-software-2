const db = require('../config/db');

// Create a new place
exports.createPlace = async (req, res) => {
    const { name } = req.body;

    try {
        const [result] = await db.query('INSERT INTO place (name) VALUES (?)', [name]);
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all places
exports.getPlaces = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM place');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single place by ID
exports.getPlaceById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.query('SELECT * FROM place WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a place
exports.updatePlace = async (req, res) => {
    const { id } = req.params;
    const { name } = req.body;

    try {
        const [result] = await db.query('UPDATE place SET name = ? WHERE id = ?', [name, id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.status(200).json({ message: 'Place updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a place
exports.deletePlace = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query('DELETE FROM place WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Place not found' });
        }
        res.status(200).json({ message: 'Place deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
