var expect = require('expect');
var Registry = require('./registry');

describe('AppRegistry test suite', function () {

  describe('When newly instantiated', function () {
    var registry;
    before(function () {
      registry = Registry();
    });

    it('Should have no service registered', function () {
      expect(registry.getRegistered().length).toBe(0);
    })
  });

  describe('After register one service', function () {
    var registry;
    var firstService = 'firstService';
    before(function () {
      registry = Registry();
      registry.register('service-one', firstService);
    });

    it('Should have one service registered', function () {
      expect(registry.getRegistered()).toEqual(['service-one']);
    });

    it('The service should be the one registered', function () {
      expect(registry.get('service-one')).toBe(firstService);
    });

    it('The service registered exists', function () {
      expect(registry.exists('service-one')).toBe(true);
    })
  });

  describe('After register more services', function () {
    var registry;
    var firstService = 'firstService';
    var secondService = 'secondService';
    var thirdService = 'thirdService';
    before(function () {
      registry = Registry();
      registry.register('service-one', firstService);
      registry.register('service-two', secondService);
      registry.register('service-three', thirdService);
    });

    it('Should have three service registered', function () {
      expect(registry.getRegistered()).toEqual(['service-one', 'service-two', 'service-three']);
    });

    it('The services should be registered', function () {
      expect(registry.get('service-one')).toBe(firstService);
      expect(registry.get('service-two')).toBe(secondService);
      expect(registry.get('service-three')).toBe(thirdService);
    });

    it('The service registered exists', function () {
      expect(registry.exists('service-one')).toBe(true);
      expect(registry.exists('service-two')).toBe(true);
      expect(registry.exists('service-three')).toBe(true);
    })
  });

  describe('After unset one service', function () {
    var registry;
    var firstService = 'firstService';
    var secondService = 'secondService';
    var thirdService = 'thirdService';
    before(function () {
      registry = Registry();
      registry.register('service-one', firstService);
      registry.register('service-two', secondService);
      registry.register('service-three', thirdService);
      registry.unset('service-two', thirdService);
    });

    it('Should have two service registered', function () {
      expect(registry.getRegistered()).toEqual(['service-one', 'service-three']);
    });

    it('The services unset should not be registered', function () {
      expect(registry.get('service-one')).toBe(firstService);
      expect(function () {
        registry.get('service-two')
      }).toThrow('Service [service-two] not exists');
      expect(registry.get('service-three')).toBe(thirdService);
    });

    it('The service unset not exists', function () {
      expect(registry.exists('service-one')).toBe(true);
      expect(registry.exists('service-two')).toBe(false);
      expect(registry.exists('service-three')).toBe(true);
    })
  });

  describe('After reset', function () {
    var registry;
    var firstService = 'firstService';
    var secondService = 'secondService';
    var thirdService = 'thirdService';
    before(function () {
      registry = Registry();
      registry.register('service-one', firstService);
      registry.register('service-two', secondService);
      registry.register('service-three', thirdService);
      registry.reset();
    });

    it('Should have no services', function () {
      expect(registry.getRegistered()).toEqual([]);
    });
  });
});