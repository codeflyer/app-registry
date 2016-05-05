var registry = require('./src/index');

function serviceOne() {
  console.log('This is the service one');
}

registry.register('firstService', serviceOne);


// Somewere in the app

var theServiceINeed = registry.get('firstService');
theServiceINeed();