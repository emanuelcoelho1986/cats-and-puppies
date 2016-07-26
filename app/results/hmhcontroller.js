angular.module('myApp.controllers', [])

.config(['$routeProvider', function($routeProvider) {
  $routeProvider.when('/', {
    templateUrl: 'results/results.html',
    controller: 'HMHController'
  });
}])

.controller('HMHController', ['$scope', 'Giphy', '$uibModal', "$log", function($scope, Giphy, $uibModal, $log) {
	
	$scope.changeType = function(type, evt){
		if(event.preventDefault) event.preventDefault();
		if(event.stopPropagation) event.stopPropagation();
		
		$scope.resetVariables();
		$scope.type = type;
		
		$scope.loadMoreResults($scope.offset);
	}
	
	$scope.resetVariables = function(){
		$scope.elements = []; // Init elements
		$scope.offset = 0;
	
		// Related to pagination
		$scope.totalItems = 0;
		$scope.currentPage = 1;
		$scope.maxSize = maxItemsPerPage;
		$scope.type = "dogs";
	}

	$scope.setPage = function (pageNo) {
		$scope.currentPage = pageNo;
	};

	// Just a log to know in wich oage we are
	$scope.pageChanged = function() {
		$log.log('Page changed to: ' + $scope.currentPage);
		
		// get current offset
		var calculatedOffset = ($scope.currentPage * $scope.maxSize) - $scope.maxSize;
		$log.log('Offset: ' + calculatedOffset);
		
		$scope.loadMoreResults(calculatedOffset); // get the next items
	};
	
	$scope.loadMoreResults = function(offset){
		$scope.offset = offset; // Update current offset
		// Get dogs images
		Giphy.get({ searchType: $scope.type, limit:maxItemsPerPage, offset:offset}, function(data) {
			// check if response from giphy is ok
			if(data.meta.status === 200){
				
				// Assign the data to a variable
				$scope.elements = data.data;
				$scope.totalItems = data.pagination.total_count;
				$scope.offset = data.pagination.offset;
			}
		});
	};
	
	// Action trigered when we click the element
	$scope.openPreview = function(element, event){
		if(event.preventDefault) event.preventDefault();
		if(event.stopPropagation) event.stopPropagation();
		
		//debugger
		// Assign to a variable in case we want to assign more events or catch some, like for example
		// when the modal gets closed
		
		// Set the specific data for the modalOption
		modalOptions.controller = "PreviewResultController";
		modalOptions.templateUrl = 'results/result-preview.html';
		modalOptions.resolve.item = function() {
			return angular.copy(element); // pass element to resolve storage
		}
		
		
		var modalInstance = $uibModal.open(modalOptions);
		
		modalInstance.result.then(function (selectedItem) {
			// If we want an action of an OK button
		}, function () {
			// cancel button pressed
		  $log.info('Modal dismissed at: ' + new Date());
		});
	};
	
	// Init controller
	$scope.initController = function(){
		$scope.resetVariables(); 
		$scope.type='dogs'; 
		$scope.loadMoreResults($scope.offset);
	};
}])
.directive('puppies', function() {
  return {
	  controller:'PuppiesController',
	  restrict: 'E',
	  templateUrl: 'results/giphy-results.html'
  };
});