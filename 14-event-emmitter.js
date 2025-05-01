const EventEmitter = require('events');

const eventemmitter = new EventEmitter();

// listen for an event
eventemmitter.on('response', (name, age) => {
    console.log('data received -> name: ' + name + ', age: ' + age);
});

// on listening to same event we can do different things
eventemmitter.on('response', () => {
    console.log('some other logic here');
});

// emit an event
eventemmitter.emit('response', 'kshitiz', 23);