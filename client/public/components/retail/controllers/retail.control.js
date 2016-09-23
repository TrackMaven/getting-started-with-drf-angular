retail
    .controller('RetailController', function($scope, chainFactory, storeFactory, employeeFactory) {
        chainFactory.get().then(function(result) {
            $scope.chains = result.data
        });

        storeFactory.get().then(function(result) {
            $scope.stores = result.data
        });

        employeeFactory.get().then(function(result) {
            $scope.employees = result.data
        });
});
