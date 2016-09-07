var fs = require("fs");

var ALLOWED_TYPES = /A|AAA|CNAME/;

var content = fs.readFileSync("data/example-r53.json");
var jsonContent = JSON.parse(content);

batch = jsonContent.requestParameters.changeBatch.changes

batch.forEach(function(entry) {
    console.log(entry.resourceRecordSet.type);
    if (!entry.resourceRecordSet.type.match(ALLOWED_TYPES))
      {
        console.log("type is not allowed")
      }
});
