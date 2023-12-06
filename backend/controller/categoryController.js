const { sql } = require("../config/pgDb");

const addCategory= async (req, res) => {
  try {
    const { title, color, id, description, iconname } = req.body;
    await sql`INSERT INTO category(title, color, id, description, iconname) VALUES(${title}, ${color}, ${id}, ${description}, ${iconname})`;
    res.status(201).json({ message: "category success" });
  } catch (error) {
    console.log("ERR", error);
    res.status(500).json({ message: "transaction failed" });
  }
};

const getCategory = async (req, res) => {
  try {
    const categories = await sql`SELECT * FROM transaction`;
    res.status(201).json({ transaction });
  } catch (error) {
    res.status(500).json({ message: "get failed" });
  }
};


module.exports = { addCategory, getCategory };
