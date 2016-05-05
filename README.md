# App Registry

A registry tool to set and share application services.


```javascript
var registry = require('app-registry');
function serviceOne() {
  console.log('This is the service one');
}

registry.register('firstService', serviceOne);


// Somewere in the app (in another file)
var theServiceINeed = registry.get('firstService');
theServiceINeed();
```


# API
####getRegistered()
Return the list of registered services.


####register(serviceName, service)
Register a new service.


####get(serviceName)
Get the service with name `serviceName`.<br>
Throw an exception if the service doesn't exists.

####exists(serviceName)
Check if the the service with name `serviceName` exists

####unset(serviceName)
Unset if the the service with name `serviceName` from the registry.

####reset()
Remove all services from registry. Useful in the test environment.
