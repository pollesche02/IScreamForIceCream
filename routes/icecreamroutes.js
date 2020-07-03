var express = require("express");

var router = express.Router();
var db = require("../models");

// router.get("/", function (req, res) {
//   res.redirect("/icecream");
// });
router.get("/api/bestIceCream",function(req, res){
  db.Icecream.findAll({where:{
    devoured:false
  }}).then(function(results){
    res.json(results)
  })
})
// Create all our routes and set up logic within those routes where required.
router.get("/api/flavors", function (req, res) {
 console.log("getflavors")
  db.Icecream.findAll({
    where:{
      devoured:true
    }
  })
  .then(function (results) {
    console.log(results)
res.json(results)
    // var dbArray = db.map(elem=> {return {
    //   id: elem.id,
    //   icecream_flavor: elem.icecream_flavor,
    //   devoured: elem.devoured
    // }})
    // var hbsObject = {
    //   icecream: dbArray,
    // };
    // console.log(hbsObject);
    // res.render("index", hbsObject);
    //res.json(data)
  });
});

router.post("/api/icecream", function (req, res) {
 console.log(req.body)
 
  db.Icecream.create(req.body).
    then(function (result) {
      // Send back the ID of the new quote
      res.json({ id: result.insertId });
    });
});

router.put("/api/icecream/:id", function (req, res) {
  db.Icecream.update(
    {
      devoured: true,
    },
    {
      where: {
        id: req.params.id,
      },
    }).then(
      function (result) {
      res.json(result)
    }
  );
});


// Export routes for server.js to use.
module.exports = router;
