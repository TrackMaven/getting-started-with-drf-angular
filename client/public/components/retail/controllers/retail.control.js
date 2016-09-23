angular
    .module('retailCtrl', [])
    .controller('RetailController', function($scope, chainFactory) {
        chainFactory.get().then(function(result) {
            $scope.chains = result.data
        })

        $scope.message = "Hello World"
});
