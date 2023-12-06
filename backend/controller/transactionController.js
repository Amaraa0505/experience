const { sql } = require("../config/pgDb");


const addTransaction = async (req, res) => {
    try {
      const {
        user_id,
        name,
        amount,
        description,
        category_id,
      } = req.body;
      await sql`INSERT INTO transaction (name, amount, description, category_id, user_id) 
      VALUES (${name}, ${amount}, ${description},  ${category_id}, ${user_id} )`;
      res.status(201).json({ message: "transaction success" });
    } catch (error) {
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


module.exports = {getTransaction, addTransaction };