'use strict';
/* 
  Import modules/files you may need to correctly run the script. 
  Make sure to save your DB's uri in the config file, then import it with a require statement!
 */
var fs = require('fs'),
    mongoose = require('mongoose'), 
    Schema = mongoose.Schema, 
    Listing = require('./ListingSchema.js'), 
    config = require('./config'),
    tenido = fs.readFileSync("./listings.json"),
    json_lists = JSON.parse(tenido);

/* Connect to your database */
mongoose.connect('mongodb://ariel:database@ds123534.mlab.com:23534/terminator', function (err, res)
    {
        if(err)
        {
            console.log ('ERROR connecting to: mongodb://ariel:database@ds123534.mlab.com:23534/terminator' + err);
        }
        else{
            console.log ('Succedded connecting to: mongodb://ariel:database@ds123534.mlab.com:23534/terminator');    
        }
    });
/* 
  Instantiate a mongoose model for each listing object in the JSON file, 
  and then save it to your Mongo database 
 */

for(var jj = 0; jj < json_lists.entries.length; jj++)
    {
        var entry = json_lists.entries[jj];
        entry["created_at"] = null;
        entry["updated_at"] = null;
        var modelonuevo = new Listing(entry);
        modelonuevo.save(function(err) {
            if (err)
                throw err;//return handleError(err);
        });
    }

/*fs.readFile('./listings.json','utf8', function(err, data){
    if(err)
        throw err;
    var json = JSON.parse(data);
    Listing.collection.insert(json, function(err)
    {
        if(err)
            throw err;
        //console.log(data);
    }) ;      
});

//var db = mongoose.connection;
//db.on{'error', console.error.bind};
*/

/* 
  Once you've written + run the script, check out your MongoLab database to ensure that 
  it saved everything correctly. 
 */