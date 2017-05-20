/**
 * @file Angular filter js
 * @Author Benjamin
 * @Date 2016-3-14
 */
angular.module("eventman.filter",['ngSanitize'])
    .filter('trusted', ['$sce', function ($sce) {
    return function(url) {
        return $sce.trustAsResourceUrl(url);
    }
}]);