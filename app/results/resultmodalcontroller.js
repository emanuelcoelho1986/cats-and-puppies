'use strict';

angular.module('myApp.modal.preview', [])

.controller('PreviewResultController', ['$scope', '$uibModalInstance', 'item', 
function($scope, $uibModalInstance, item) {
	$scope.element = item;

	$scope.cancel = function () {
		$uibModalInstance.dismiss('cancel');
	};
}
]);