function printHome(req, res) {
    res.send("This is the home page");
}

function createUser(req, res) {
    const { name, email, password } = req.body;
    // Here you might want to add logic to handle the user creation, e.g., validation, saving to a database, etc.
    res.send(`Name: ${name}, Email: ${email}`);
}

module.exports = { printHome, createUser };
