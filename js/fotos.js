$(document).ready(function(){
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
});

var app = angular.module('PrimeiroEncontroDaVilarzada', []);

app.controller('Fotos', function($scope) {
    $scope.fotos= ["IMG-20170917-WA0136.jpg", "IMG-20170917-WA0123.jpg", "IMG-20170918-WA0007.jpg"];
});