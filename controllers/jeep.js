var Jeep = require('../models/jeep');
// List of all jeeps
exports.jeep_list = function(req, res) {
res.send('NOT IMPLEMENTED: jeep list');
};
// for a specific jeep.
exports.jeep_detail = function(req, res) {
res.send('NOT IMPLEMENTED: jeep detail: ' + req.params.id);
};
// Handle jeep create on POST.
exports.jeep_create_post = function(req, res) {
res.send('NOT IMPLEMENTED: jeep create POST');
};
// Handle jeep delete form on DELETE.
exports.jeep_delete = function(req, res) {
res.send('NOT IMPLEMENTED: jeep delete DELETE ' + req.params.id);
};
// Handle jeep update form on PUT.
exports.jeep_update_put = function(req, res) {
res.send('NOT IMPLEMENTED: jeep update PUT' + req.params.id);
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
    
    