const db = require('../config/db');

// Create a new customer
exports.createCustomer = async (req, res) => {
    const { name, father_name, place, address, pan_no, aadhar_no, mobile1, mobile2, referer_id, created_by, remarks } = req.body;

    try {
        const [result] = await db.query(
            `INSERT INTO customer (name, father_name, place, address, pan_no, aadhar_no, mobile1, mobile2, referer_id, created_by, remarks) 
             VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)`,
            [name, father_name, place, address, pan_no, aadhar_no, mobile1, mobile2, referer_id, created_by, remarks]
        );
        res.status(201).json({ id: result.insertId });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get all customers
exports.getCustomers = async (req, res) => {
    try {
        const [rows] = await db.query('SELECT * FROM customer');
        res.status(200).json(rows);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Get a single customer by ID
exports.getCustomerById = async (req, res) => {
    const { id } = req.params;

    try {
        const [rows] = await db.query('SELECT * FROM customer WHERE id = ?', [id]);
        if (rows.length === 0) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json(rows[0]);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Update a customer
exports.updateCustomer = async (req, res) => {
    const { id } = req.params;
    const { name, father_name, place, address, pan_no, aadhar_no, mobile1, mobile2, referer_id, edited_by, remarks } = req.body;

    try {
        const [result] = await db.query(
            `UPDATE customer SET name = ?, father_name = ?, place = ?, address = ?, pan_no = ?, aadhar_no = ?, mobile1 = ?, mobile2 = ?, referer_id = ?, edited_by = ?, remarks = ? 
             WHERE id = ?`,
            [name, father_name, place, address, pan_no, aadhar_no, mobile1, mobile2, referer_id, edited_by, remarks, id]
        );
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer updated successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};

// Delete a customer
exports.deleteCustomer = async (req, res) => {
    const { id } = req.params;

    try {
        const [result] = await db.query('DELETE FROM customer WHERE id = ?', [id]);
        if (result.affectedRows === 0) {
            return res.status(404).json({ message: 'Customer not found' });
        }
        res.status(200).json({ message: 'Customer deleted successfully' });
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
};
