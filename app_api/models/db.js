var mongoose = require('mongoose');
var gracefulShutdown;
var dbURI = "mongodb+srv://ColmG:opalPukkatw3lv3@cluster0-o1l57.mongodb.net/test?retryWrites=true&w=majority";
if (process.env.NODE_ENV === 'production') 
{
    dbURI = process.env.MONGOLAB_URI;
}
mongoose.connect(String(dbURI),
{
    useNewUrlParser: true,
    useUnifiedTopology: true,
   // useCreateIndex: true,
   // reconnectTries: 30 // keep an eye open for performance and security
}
    )
    .then(() => console.log('Connected To Mongo!!'))
    .catch(err => console.log(err));
    


// CONNECTION EVENTS
mongoose.connection.on('connected', function() 
{
    console.log('Mongoose connected to ' + dbURI);
});

mongoose.connection.on('error', function(err) 
{
    console.log('Mongoose connection error: ' + err);
});

mongoose.connection.on('disconnected', function() 
{
    console.log('Mongoose disconnected');
});

// CAPTURE APP TERMINATION / RESTART EVENTS
// To be called when process is restarted or terminated
gracefulShutdown = function(msg, callback) 
{
    mongoose.connection.close(function() 
    {
        console.log('Mongoose disconnected through ' + msg);
        callback();
    });
};

// For nodemon restarts
process.once('SIGUSR2', function() 
{
    gracefulShutdown('nodemon restart', function() 
    {
        process.kill(process.pid, 'SIGUSR2');
    });
});

// For app termination
process.on('SIGINT', function() 
{
    gracefulShutdown('app termination', function() 
    {
        process.exit(0);
    });
});

// For Heroku app termination
process.on('SIGTERM', function() 
{
    gracefulShutdown('Heroku app termination', function() 
    {
        process.exit(0);
    });
});

// BRING IN YOUR SCHEMAS & MODELS

require('./users');

//Reference Stack Overflow 
//https://stackoverflow.com/questions/9299331/what-is-the-best-practice-to-gracefully-shutdown-a-node-js-program-from-an-exter