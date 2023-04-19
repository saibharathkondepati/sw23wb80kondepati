var Jeep = require('../models/jeep');
// List of all jeeps
exports.jeep_list = function(req, res) {
res.send('NOT IMPLEMENTED: jeep list');
};
// for a specific Jeep.
exports.jeep_detail = async function(req, res) {
console.log("detail" + req.params.id)
try {
result = await Jeep.findById( req.params.id)
res.send(result)
} catch (error) {
res.status(500)
res.send(`{"error": document for id ${req.params.id} not found`);
}
};

// Handle jeep create on POST.
exports.jeep_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: jeep create POST');
};
// Handle Jeep delete on DELETE.
exports.jeep_delete = async function(req, res) {
    console.log("delete " + req.params.id)
    try {
    result = await Jeep.findByIdAndDelete( req.params.id)
    console.log("Removed " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": Error deleting ${err}}`);
    }
    };
    
// Handle Costume update form on PUT.
exports.jeep_update_put = async function(req, res) {
    console.log(`update on id ${req.params.id} with body
    ${JSON.stringify(req.body)}`)
    try {
    let toUpdate = await Jeep.findById( req.params.id)
    // Do updates of properties
    if(req.body.jeep_type)
        toUpdate.jeep_type = req.body.jeep_type;
    if(req.body.Jeep_name) toUpdate.Jeep_name = req.body.Jeep_name;
    if(req.body.Jeep_4price) toUpdate.Jeep_price = req.body.Jeep_price;
    let result = await toUpdate.save();
    console.log("Sucess " + result)
    res.send(result)
    } catch (err) {
    res.status(500)
    res.send(`{"error": ${err}: Update for id ${req.params.id}
    failed`);
    }
    };
// List of all jeeps
exports.jeep_list = async function(req, res) {
try{
thejeeps = await Jeep.find();
res.send(thejeeps);
}
catch(err){
res.status(500);
res.send(`{"error": ${err}}`);
}
};
// VIEWS
// Handle a show all view
exports.jeep_view_all_Page = async function(req, res) {
    try{
    thejeeps = await Jeep.find();
    res.render('jeep', { title: 'jeep Search Results', results: thejeeps });
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   
    // Handle Costume create on POST.
    exports.jeep_create_post = async function(req, res) {
    console.log(req.body)
    let document = new Jeep();
    // We are looking for a body, since POST does not have query parameters.
    // Even though bodies can be in many different formats, we will be picky
    // and require that it be a json object
    // {"costume_type":"goat", "cost":12, "size":"large"}
    document.Jeep_name = req.body.Jeep_name;
    document.Jeep_color = req.body.Jeep_color;
    document.Jeep_price = req.body.Jeep_price;
    try{
    let result = await document.save();
    res.send(result);
    }
    catch(err){
    res.status(500);
    res.send(`{"error": ${err}}`);
    }
    };
   // Handle a show one view with id specified by query
exports.jeep_view_one_Page = async function(req, res) {
    console.log("single view for id " + req.query.id)
    try{
    result = await Jeep.findById( req.query.id)
    res.render('jeepdetail',
    { title: 'Jeep Detail', toShow: result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for creating a costume.
// No body, no in path parameter, no query.
// Does not need to be async
exports.jeep_create_Page = function(req, res) {
    console.log("create view")
    try{
    res.render('jeepcreate', { title: 'jeep Create'});
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };

    // Handle building the view for updating a costume.
// query provides the id
exports.jeep_update_Page = async function(req, res) {
console.log("update view for item "+req.query.id)
try{
let result = await Jeep.findById(req.query.id)
res.render('jeepupdate', { title: 'Jeep Update', toShow: result });
}
catch(err){
res.status(500)
res.send(`{'error': '${err}'}`);
}
};
// Handle a delete one view with id from query
exports.jeep_delete_Page = async function(req, res) {
    console.log("Delete view for id " + req.query.id)
    try{
    result = await Jeep.findById(req.query.id)
    res.render('jeepdelete', { title: 'jeep Delete', toShow:
    result });
    }
    catch(err){
    res.status(500)
    res.send(`{'error': '${err}'}`);
    }
    };
    