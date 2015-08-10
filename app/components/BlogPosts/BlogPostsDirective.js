var module = require('../../module');

module.directive('blogPostsDirective', ['$http', 'SuperModelService', function ($http, SuperModelService) {
    'use strict';
    return {
        restrict: 'EA',
        scope: true,
        replace: true,
        templateUrl: './app/components/BlogPosts/BlogPostsView.html',
        link: function (scope, element, attrs) {
            scope.foundBlogs = SuperModelService.getBlogs();
        }
    };
}]);