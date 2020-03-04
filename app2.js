var Datastore = require('nedb');

var users = new Datastore({filename:'users.db', autoload:true});

/* var people = [];

var scott = {
    name: 'Scott Robinson',
    age: 28,
    twitter: '@ScottWRobinson'
};

var elon = {
    name: 'Elon Musk',
    age: 44,
    twitter: '@elonmusk'
};

var jack = {
    name: 'Jack Dorsey',
    age: 39,
    twitter: '@jack'
};

people.push(scott, elon, jack);

users.insert(people, function(err, docs) {
    docs.forEach(function(d) {
        console.log('Saved user:', d.name);
    });
}); */

users.findOne({ twitter: '@ScottWRobinson' }, function(err, doc) {
    console.log('Found user:', doc.name);
});

