var module = require('../../module');
//require("./BlogView.less");
var marked = require('marked');
require('../../shared/services/superModel.js');

module.controller('BlogsController', ['$scope', '$sce', '$state', 'SuperModelService',
    function($scope, $sce, $state, SuperModelService) {

        $scope.foundBlogs = SuperModelService.getBlogs();
        console.log($scope.foundBlogs);

    }
]);

