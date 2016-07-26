describe('Giphy factory', function() {
  var $scope = null;
  var ctrl = null;
  var Giphy, httpBackend, resource;

  //you need to indicate your module in a test
  beforeEach(module("myApp"));

  beforeEach(inject(function($rootScope, $controller, $injector, _Giphy_) {
    $scope = $rootScope.$new();
    httpBackend = $injector.get('$httpBackend');
    Giphy = _Giphy_;

    ctrl = $controller('HMHController', {
      $scope: $scope
    });
  }));
  
  afterEach(function() {
    //httpBackend.verifyNoOutstandingExpectation();
  });

  it("should be a resource... ", function() {
    expect(typeof Giphy).toBe('function');
    expect(typeof Giphy.get).toBe('function');
    expect(typeof Giphy.query).toBe('function');
  });
});