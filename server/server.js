const express       = require("express"),
app           = express(),
bodyParser    = require("body-parser"),
mongoose      = require("mongoose"),
http = require('http').Server(app);

const businessRoutes = require("./routes/business");

const PORT = process.env.PORT || '3001';

app.use(bodyParser.json());
app.use("/api/business", businessRoutes)
app.listen(PORT, function(){
});

http.listen(4444, () => {
    console.log('Listening on port 4444');
});

mongoose.connect("mongodb://localhost:27017/business-directory").then(() => {
    console.log("mongoose logged in");
    console.log("Node server started on port " + PORT);
});