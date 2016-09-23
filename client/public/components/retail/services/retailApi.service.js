angular
    .module('retail', [])
    .factory('ChainFactory', ['$http', function($http) {
        return {
            get : function() {
                return $http({
                    method: 'GET',
                    url: 'localhost:8000/registry-items/'
                })
            }
        }
    }]);