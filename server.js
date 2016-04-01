var path = require('path');
var express = require('express');
var cors = require("cors");

var app = new express();

var port = process.env.PORT || 8400;

app.use(express.static(path.join(__dirname, 'dist')));
app.use(cors());


app.get("/", function(req, res) {
  return res.sendFile(__dirname + '/dist/index.html')
})

app.get("/api/menu",function(req, res){
  res.send({
    result: [
        {
          "name" : "职员管理",
          "secondlist" : [
            { name : "员工信息", param:{path:"/employee"} },
            { name : "二级菜单2",param:{path:"/page2"} },
            { name : "二级菜单3",param:{path:"/home"}}
          ]
        }
      ]
  });
})

app.listen(port, function(err) {
  if (err) {
    console.error(err)
  } else {
    console.info("==> 🌎  Listening on port %s. Open up http://localhost:%s/ in your browser.", port, port)
  }
})
