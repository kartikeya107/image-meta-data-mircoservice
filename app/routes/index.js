"use strict";

module.exports = function(app) {
    var multer = require("multer");
    var upload = multer({dest: "./../../uploads"});
    
    app.route("/").get(function(req, res) {
        res.sendFile(process.cwd() + "/public/index.html");
    });
    
    app.post('/get-file-size', upload.single('file'), function (req, res, next) {
  // req.file is the `avatar` file 
  // req.body will hold the text fields, if there were any 
        console.log(typeof req.file.size);
        res.send(JSON.stringify({"size": req.file.size}));
    })
    
}