myApp.controller('CheckInsController', ['$scope', '$routeParams', '$rootScope', '$location', '$firebaseObject', '$firebaseArray', 'FIREBASE_URL', 
	function($scope, $routeParams, $rootScope, $location,  $firebaseObject, $firebaseArray, FIREBASE_URL){
	
$scope.whichmeeting = $routeParams.mId;
$scope.whichuser = $routeParams.uId;

var ref = new Firebase(FIREBASE_URL + 'users/' + $scope.whichuser + '/meetings/' + $scope.whichmeeting + '/checkins');

var checkinsList = $firebaseArray(ref);

$scope.checkins = checkinsList;

$scope.addCheckin = function() {
var checkinsInfo = $firebaseArray(ref);
var mydata = {
	firstname: $scope.user.firstname,
	lastname: $scope.user.lastname,
	email: $scope.user.email,
	data: Firebase.ServerValue.TIMESTAMP
	};

	checkinsInfo.$add(mydata).then(function() {
		$location.path('/checkins/' + $scope.whichuser + '/' + $scope.whichmeeting + "/checkinslist");
	});
}; //add checkin

}]); 