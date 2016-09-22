angular
    .module('appRoutes', ["ui.router"])
    .config(['$stateProvider', '$urlRouterProvider', function($stateProvider, $urlRouterProvider) {
    $stateProvider.state({
        name: 'retail',
        url: '/',
        templateUrl: 'public/components/retail/templates/retail.template',
        controller: 'RetailController'
    });

    $urlRouterProvider.otherwise('/');
}]);