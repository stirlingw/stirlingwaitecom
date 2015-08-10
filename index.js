var angular = require('angular');
var module = require('./app/module');
require('./app/router.js');

module.controller('IndexCtrl', ['$scope', function($scope) {
    $scope.$on('$stateChangeSuccess', function(){
        $scope.stateName = $state.current.name.toString();
    });
}]);

var directives = require.context('./app/components', true, /.js$/);
directives.keys().forEach(directives);

var states = require.context('./app/states', true, /.js$/);
states.keys().forEach(states);

require('./app/shared/services/superModel.js');

angular.bootstrap(document.body, ['myApp']);

// Navigation Scripts to Show Header on Scroll-Up
jQuery(document).ready(function($) {
    var MQL = 1170;

    //primary navigation slide-in effect
    if ($(window).width() > MQL) {
        var headerHeight = $('.navbar-custom').height();
        $(window).on('scroll', {
            previousTop: 0
        },
        function() {
            var currentTop = $(window).scrollTop();
            //check if user is scrolling up
            if (currentTop < this.previousTop) {
                //if scrolling up...
                if (currentTop > 0 && $('.navbar-custom').hasClass('is-fixed')) {
                    $('.navbar-custom').addClass('is-visible');
                } else {
                    $('.navbar-custom').removeClass('is-visible is-fixed');
                }
            } else {
                //if scrolling down...
                $('.navbar-custom').removeClass('is-visible');
                if (currentTop > headerHeight && !$('.navbar-custom').hasClass('is-fixed')) $('.navbar-custom').addClass('is-fixed');
            }
            this.previousTop = currentTop;
        });
    }
});