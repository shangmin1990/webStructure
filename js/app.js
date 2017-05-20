/**
 * @file Angular boot file
 * @Author Benjamin
 * @Date 2016-3-14
 */
angular.module("eventman",[
    'ui.router',
    'ui.bootstrap',
    'eventman.controller',
    'eventman.filter',
    'eventman.directive',
    'eventman.service',
    'ui.website',
    'ngCookies'
]).config(['$stateProvider','$urlRouterProvider', function($stateProvider, $urlRouterProvider){

    //报告管理
    $stateProvider.state('template3',{
        url: "/template3",
        views: {
            'container@': {
                // controller: 'ReportUploadCrtl',
                templateUrl: 'template/template3.html'
            }
        }
    });

    //报告管理
    $stateProvider.state('report',{
        url: "/report",
        abstract: true
    });
    $stateProvider.state('report.reportUpload',{
        url: "/upload",
        views: {
            'container@': {
                // controller: 'ReportUploadCrtl',
                templateUrl: 'template/template2.html'
            }
        }
    });
    $stateProvider.state('report.reportList',{
        url: "/list",
        views: {
            'container@': {
                // controller: 'ReportListCrtl',
                templateUrl: 'template/template1.html'
            }
        }
    });

}]);