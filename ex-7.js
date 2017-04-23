var mongo = require("mongodb").MongoClient;

var db_name = process.argv[2];
var collection_name = process.argv[3];
var id = process.argv[4];

var url = 'mongodb://localhost:27017/' + db_name;

mongo.connect(url, function(err, db){
    if (err) throw err;
    var collection = db.collection(collection_name)
    collection.remove({
        _id: id
    }, function (err, data){
        if (err) throw err;
    });
    db.close();
});