var express = require('express')
var moment = require('moment')
var app = express()
var monthArray = ['January','February','March','April','May','June','July','August','September','October','November','December']

app.use(express.static('Public'))

app.get('/:INFO', function (req, res) {
  var info = req.params.INFO
  
  if (!isNaN(info)) {
  var toUnix = new Date(info * 1000);
  var months = toUnix.getMonth()
  var date = toUnix.getDate()
  var year = toUnix.getFullYear()
  
  res.json({natural : monthArray[months] + ' ' + date + ' ' + year, unix : info})
      
  } else if (moment(info,"MMMMDDYYYY").isValid()) {
      var nDate = new Date (info)
      var uDate = new Date (info).getTime() / 1000
      res.json({unix : uDate, natural : monthArray[nDate.getMonth()] + " " + nDate.getDate() + " " + nDate.getFullYear()})
  } else {
      res.json({unix : null, natural : null})
  }
  
  
 
  
  
})

app.listen(8080, function () {
  console.log('Example app listening on port 8080!')
})


