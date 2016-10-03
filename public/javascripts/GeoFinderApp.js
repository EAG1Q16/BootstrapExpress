/**
 * Created by tonim on 03/10/2016.
 */
var GeoFinderApp = angular.module('GeoFinderApp', ['ngRoute']);

GeoFinderApp.config(['$routeProvider', function($routeProvider){

    $routeProvider
        .when('/home', {
            templateUrl: './views/home.html',
            controller: ''
        })
        .when('/user', {
            templateUrl: './views/userpanel.html',
            controller: ''
        })
        .otherwise({
            redirectTo: '/home'
        });
}]);
