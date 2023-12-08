const { sql } = require("../config/pgDb");

const addCustomer = async (req, res) => {
  try {
    const { avatarImg, username, lastname, email, password } = req.body;
    await sql`INSERT INTO customer (avatarImg, username, lastname, email, password ) VALUES ( ${avatarImg}, ${username}, ${lastname}, ${email}, ${password})`;
    res.status(201).json({ message: "customer added" });
  } catch (error) {
    console.log("ERROR: ", error);
    res.status(500).json({ message: "customer failed" });
  }
};

const getCustomer = async (req, res) => {
  try  {
const customer = await sql `SELECT * FROM customer`;
res.status(201).json(customer);
  } catch (error){
res.status(500).json({message: "failed"});
  }
};

const deleteCustomer = async (req, res)=> {
  try {
    const customer = await sql ``
  } catch (error) {
    
  }
}

module.exports = { addCustomer, getCustomer };
