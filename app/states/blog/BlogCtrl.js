var module = require('../../module');
require("./BlogView.less");
var marked = require('marked');
//require('../../shared/services/superModel.js');


module.controller('BlogController', ['$scope', '$sce', '$state', 'SuperModelService',
    function($scope, $sce, $state, SuperModelService) {

        $scope.blog = SuperModelService.getBlog($state.params.name);

        if($scope.blog !== undefined) {
            marked.setOptions({
                renderer: new marked.Renderer(),
                gfm: true,
                tables: true,
                breaks: false,
                pedantic: false,
                sanitize: true,
                smartLists: true,
                smartypants: false
            });

            var fileContent = require("raw!./md/" + $scope.blog.file);
            var markedContent = marked(fileContent);
            $scope.fileContent = $sce.trustAsHtml(markedContent);
        }
    }
]);

