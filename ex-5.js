var mongo = require('mongodb').MongoClient;

var url = 'mongodb://localhost:27017/learnyoumongo';

mongo.connect(url, function(err, db){
    if (err) throw err;
    var parrots = db.collection('docs');
    var insert_object = {
        firstName: process.argv[2],
        lastName: process.argv[3]
    };
    console.log(JSON.stringify(insert_object));
    parrots.insert(insert_object, function(err, data){
        if (err) throw err;
    });
    db.close();
});