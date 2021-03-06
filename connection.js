var mongoose = require('mongoose');

class Connection {
    constructor() {

        //Set up default mongoose connection
        
        var mongoDatabaseUrl = process.env.MONGODB_URL ||"mongodb+srv://Esraa_kamel:esraakamel@cluster0.dxsk8.mongodb.net/SaknyDataBase?retryWrites=true&w=majority" ||'mongodb://localhost:27017/SaknyDataBase';
        mongoose.connect(mongoDatabaseUrl, {
            useCreateIndex:true ,
            useNewUrlParser: true
        });

        //Get the default connection
        var db = mongoose.connection;

        //inCase Success Connect
        db.on('connected', function() {
            console.log('Connect Successfully ........ ' + mongoDatabaseUrl);
        })

        //inCase Error Connect
        db.on('error', function(err) {
            console.log('Error In Connection ' + err);
        })

        //inCase Disconnect
        db.on('disconnected', function () {  
            console.log('Mongoose default connection disconnected'); 
          });

    }
}

var con = new Connection();

module.exports = Connection;