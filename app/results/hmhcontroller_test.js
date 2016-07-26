'use strict';

describe('myApp controllers', function () {
  var ctrl, scope;

  beforeEach(function(){
  	module('ngRoute');
  	module('myApp.controllers');
	module('myApp.services');
	module('ngResource');
	module('ui.bootstrap');
  });

  describe('HMHController', function () {
    beforeEach(inject(function ($rootScope, $controller) {
      scope = $rootScope.$new();
      ctrl = $controller('HMHController', {$scope: scope});
    }));

    it('should be defined.... ', function () {
      expect(ctrl).toBeDefined();
    });
	
	it('should init controller variables... ', function(){
		scope.initController();
		expect(scope.elements).toBeDefined();
		expect(scope.type).toBe('dogs');
	});
  });
});