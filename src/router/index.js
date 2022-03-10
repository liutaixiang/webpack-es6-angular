router.$inject = ['$urlRouterProvider', '$locationProvider'];
export default function router ($urlRouterProvider, $locationProvider) {
	$locationProvider.html5Mode(true);
	$urlRouterProvider.otherwise('/');
}