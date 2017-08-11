var app = angular.module('app',[]);
app.controller('header', function($scope, $http) {
    $scope.data = [];
    var request = $http.get('/header');    
    request.success(function(data) {
        $scope.data = data;
    });
    request.error(function(data){
        console.log('Error: ' + data);
    });
});
