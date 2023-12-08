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
  try {
    const customer = await sql`SELECT * FROM customer`;
    res.status(201).json(customer);
  } catch (error) {
    res.status(500).json({ message: "failed" });
  }
};

const deleteCustomer = async (req, res) => {
  try {
    const { cusId } = req.params;
    const index = customers.findIndex((el) => el.id === cusId);
    if (index < 0) {
      res.status(400).json({ message: `${cusId}-tai hereglegch oldsongui` });
    } else {
      customers.splice(index, 1);
      res.status(200).json({ message: `${cusId}-tai hereglegch ustlaa` });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = { addCustomer, getCustomer };
