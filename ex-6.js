var mongo = require('mongodb').MongoClient;

var name = process.argv[2];

var url = 'mongodb://localhost:27017/' + name;

mongo.connect(url, function(err, db){
    if (err) throw err;
    var users = db.collection('users');
    users.update({
        username: 'tinatime'
    }, {
        $set: {
            age: 40
        }
    }, function(err, data){
        if (err) throw err;
    });
    db.close();
});

