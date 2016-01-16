var myApp = angular.module('myApp', ['ngRoute', 'firebase'])
.constant('FIREBASE_URL', 'https://ngdata77.firebaseio.com/');


myApp.run(['$rootScope', '$location', 
	function($rootScope, $location){
		$rootScope.$on('$routeChangeError', 
			function(event, next, previous, error){
				if(error=='AUTH_REQUIRED'){
					$rootScope.message = "Dude login already";
					$location.path('/login');
				}
		});
	}]);

myApp.config(['$routeProvider', function($routeProvider){
	$routeProvider.
		when('/login', {
			templateUrl: 'views/login.html',
			controller: 'RegistrationController'
		}).
		when('/register', {
			templateUrl: 'views/register.html',
			controller: 'RegistrationController'
		}).
		when('/checkins/:uId/:mId', {
			templateUrl: 'views/checkins.html',
			controller: 'CheckInsController'
		}).
		when('/checkins/:uId/:mId/checkinslist', {
			templateUrl: 'views/checkinslist.html',
			controller: 'CheckInsController'
		}).
		when('/meetings', {
			templateUrl: 'views/meetings.html',
			controller: 'MeetingsController',
			resolve: {
				currentAuth: function(Authentication){
					return Authentication.requireAuth();
				}
			}
		}).
		otherwise({
			redirectTo: '/login'
		});
}]);