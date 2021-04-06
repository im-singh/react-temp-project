const ItemModel = require("./Mongo/itemSchema")
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
obj.createItem = (req, res) => {
    let name = req.body.name;
    let clas = req.body.class;
    console.log("boyd: ", name, clas);
    let item = { name, class: clas };
    saveItem(item);
    res.json({ staus: "success" })
}
function saveItem(item) {
    let newObj = new ItemModel(item);
    newObj.save()
        .then(r => {
            console.log("r: ", r);

        })
        .catch(err => {
            console.log("saveITems: ", err);
        })
}
obj.updateItem = (req, res) => {
    let name = req.body.name;
    let clas = req.body.class;
    let id = req.body.id;

    ItemModel.find({ _id: id })
        .then(r => {
            console.log("Name: ", r);
            let item = r[0];
            item = { ...item, clas, name };
            saveItem(item);
            res.json({ status: "success" })
        })




}



module.exports = obj;