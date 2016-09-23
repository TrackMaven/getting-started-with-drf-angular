retail
    .factory('chainFactory', ['$http', function($http) {
        return {
            get : function() {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8000/chains/'
                })
            }
        }
    }])

retail
    .factory('storeFactory', ['$http', function($http) {
        return {
            get : function() {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8000/stores/'
                })
            }
        }
    }])

retail
    .factory('employeeFactory', ['$http', function($http) {
        return {
            get : function() {
                return $http({
                    method: 'GET',
                    url: 'http://localhost:8000/employees/'
                })
            }
        }
    }]);