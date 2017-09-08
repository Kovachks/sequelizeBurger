var db = require("../models")

module.exports = function(app) {

	app.get("/", function(req, res) {
		db.burgers.findAll({}).then(function(dbBurgers) {
			res.json(dbBurgers)
		});
	});

	app.post("/", function(req, res) {
		console.log(req.body.name)
		burger.create([
			"burger_name", "devoured"
		], [
			req.body.name, 0
		], function() {
			console.log("test2")
			res.redirect("/");
		});
	});

	app.put("/:id", function(req, res) {
		var condition = "id = " + req.params.id;
		console.log("condition", condition);
		burger.update({
			devoured: req.body.devoured
		}, condition, function() {
			res.redirect("/");
		});
	});
}
