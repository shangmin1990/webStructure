/**
 * @file Angular Controller js
 * @Author Benjamin
 * @Date 2016-3-fa
 */
var MatrixController = angular.module("eventman.controller",[])
    .controller('GlobalCtrl', ['$scope', function($scope){
        $scope.username = 'admin';
    }])
