myApp.controller('RegistrationController', ['$scope', function($scope){
	$scope.message = "welcome to the app";


	$scope.submit = function(){
		$scope.message = "You're in tube user " + $scope.user.email;


	};
}]); 