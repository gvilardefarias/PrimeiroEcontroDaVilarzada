$(document).ready(function(){
    $('.carousel').carousel();
    $(".button-collapse").sideNav();
});

var app = angular.module('PrimeiroEncontroDaVilarzada', []);

app.controller('Fotos', function($scope) {
    $scope.fotos = ['IMG-20170919-WA0035.jpg', 'IMG-20170917-WA0123.jpg', 'IMG-20170919-WA0034.jpg', 'IMG-20170918-WA0007.jpg', 'script.py', 'IMG-20170919-WA0128.jpg', 'IMG-20170919-WA0057.jpg', 'IMG-20170917-WA0490.jpg', 'IMG-20170919-WA0036.jpg', 'IMG-20170917-WA0136.jpg', 'IMG-20170917-WA0352.jpg', 'IMG-20170917-WA0141.jpg', 'IMG-20170918-WA0483.jpg', 'IMG-20170918-WA0006.jpg', 'IMG-20170919-WA0128_1.jpg', 'IMG-20170919-WA0126.jpg', 'IMG-20170917-WA0495.jpg', 'IMG-20170919-WA0125.jpg', 'IMG-20170917-WA0140.jpg'];
});