
let obj = {}

obj.lm = (req, res) => {
    console.log('req: ', req.params);
    res.json("success");
}
obj.pl = (req, res) => {
    console.log('req put: ', req.params);
    console.log('query: ', req.query);
    res.json("success");
}
module.exports = obj;