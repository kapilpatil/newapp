/**
 * Created by kapil on 8/22/2015.
 */
/**
 * Created by kapil on 8/5/2015.
 */
function orderFood(number){
    console.log("num of orders", number);
    deliverFood(function(){
        console.log("deliverfood",number);
    });
}
function deliverFood(callback){
    setTimeout(callback,5000);


}

orderFood(1);
orderFood(2);
orderFood(3);
// Import events module
var events = require('events');
// Create an eventEmitter object
var eventEmitter = new events.EventEmitter();

// Create an event handler as follows
var connectHandler = function connected()
{
    console.log('connection succesful.');

    // Fire the data_received event
    eventEmitter.emit('data_received');
};

// Bind the connection event with the handler
eventEmitter.on('connection', connectHandler);

// Bind the data_received event with the anonymous function
eventEmitter.on('data_received', function(){
    console.log('data received succesfully.');
});

// Fire the connection event
eventEmitter.emit('connection');

console.log("Program Ended.");