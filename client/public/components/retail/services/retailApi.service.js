angular
    .module('retailApiService', [])
    .factory('chainFactory', ['$http', function($http) {
        return {
            get : function() {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8000/chains/'
                })
            }
        }
    }]);