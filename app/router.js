var angular = require('angular');
var module = require('./module');

module.config(function($stateProvider, $urlRouterProvider) {
    //$locationProvider.html5Mode(true);
    $urlRouterProvider.otherwise("/home");

    $stateProvider
        .state('/home',{
            url:'/home',
            templateUrl:'/app/states/home/HomeView.html',
            controller:'HomeCtrl'
        })
        .state('/about',{
            url:'/about',
            templateUrl:'/app/states/about/AboutView.html',
            controller:'AboutCtrl'
        })
        .state('/blog',{
            url:'/blog/:name',
            templateUrl:'/app/states/blog/BlogView.html',
            controller:'BlogController'
        })
        .state('/blogs',{
            url:'/blogs',
            templateUrl:'/app/states/blogs/BlogsView.html',
            controller:'BlogsController'
        })
        .state('/contact',{
            url:'/contact',
            templateUrl:'/app/states/contact/ContactView.html',
            controller:'ContactCtrl'
        });
});