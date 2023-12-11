const { sql } = require("../config/pgDb");

const addTransaction = async (req, res) => {
  try {
    const { user_id, name, amount, category_id } = req.body;
    console.log(user_id, name, amount, category_id);
    await sql`INSERT INTO transaction (user_id, name, amount, category_id) 
      VALUES (${user_id}, ${name}, ${amount},   ${category_id} )`;
    res.status(201).json({ message: "transaction success" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "transaction failed" });
  }
};

const getTransaction = async (req, res) => {
  try {
    const transaction = await sql`SELECT * FROM transaction`;
    res.status(201).json({ transaction });
  } catch (error) {
    res.status(500).json({ message: "get failed" });
  }
};

module.exports = { getTransaction, addTransaction };
