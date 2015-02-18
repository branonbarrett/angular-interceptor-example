var app = angular.module('app', []);

app.config(function($httpProvider, $provide) {
  $provide.factory('errorInterceptor', function($q) {
    return {
      responseError: function(rejection) {
        console.log(rejection);
        return $q.reject(rejection);
      },
      requestError: function(rejection) {
        console.log(rejection);
        return $q.reject(rejection);
      }
    }
  });

  $httpProvider.interceptors.push('errorInterceptor');
})

app.controller('errorCtrl', function($scope, testService){
  $scope.getData = function() {
    testService.get();
  }
})

app.service('testService', function($http) {
  return {
    get: function() {
      $http.get('test');
    }
  }
})