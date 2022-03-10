router.$inject = ['$stateProvider'];

export default function router ($stateProvider) {
	$stateProvider.state('home', {
		url: '/',
		template: require('./home.html'),
		controller: 'HomeController',
		controllerAs: 'home'
	});
}