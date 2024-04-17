// Updated controller.js
function print(req, res) {
    if (req.path === '/home') {
        res.send("This is the home page");
    } else {
        res.send("Hello world!!");
    }
}

module.exports = print;
