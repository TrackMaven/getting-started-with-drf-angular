retail
    .controller('RetailController', function($scope, Chain, Store, Employee) {
        Chain.query().$promise.then(function(data) {
            $scope.chains = data;
        });
        Store.query().$promise.then(function(data) {
            $scope.stores = data;
        });
        Employee.query().$promise.then(function(data) {
            $scope.employees = data;
        });
});
