$(document).ready(function(){
    $('.carousel.carousel-slider').carousel({fullWidth: true, duration: 100, dist:0});
    $(".button-collapse").sideNav();
});

var app = angular.module('PrimeiroEncontroDaVilarzada', []);

app.controller('Videos', function($scope) {
    $scope.videos = ['WhatsApp Video 2017-09-19 at 21.09.10.mp4', 'WhatsApp Video 2017-09-19 at 21.09.19.mp4', 'WhatsApp Video 2017-09-19 at 20.45.20.mp4', 'WhatsApp Video 2017-09-19 at 20.23.36.mp4', 'WhatsApp Video 2017-09-19 at 20.41.14.mp4', 'WhatsApp Video 2017-09-19 at 21.09.16.mp4', 'WhatsApp Video 2017-09-19 at 20.42.01.mp4', 'WhatsApp Video 2017-09-19 at 20.23.37.mp4', 'WhatsApp Video 2017-09-19 at 21.17.20.mp4', 'WhatsApp Video 2017-09-19 at 21.09.22.mp4', 'WhatsApp Video 2017-09-19 at 20.13.09.mp4', 'WhatsApp Video 2017-09-19 at 20.41.55.mp4', 'WhatsApp Video 2017-09-19 at 20.41.52.mp4', 'WhatsApp Video 2017-09-19 at 21.13.25.mp4', 'WhatsApp Video 2017-09-19 at 20.41.19.mp4', 'WhatsApp Video 2017-09-19 at 21.09.13.mp4', 'WhatsApp Video 2017-09-19 at 20.41.16.mp4', 'WhatsApp Video 2017-09-19 at 21.08.46.mp4', 'WhatsApp Video 2017-09-19 at 20.53.56.mp4', 'WhatsApp Video 2017-09-19 at 20.41.10.mp4', 'WhatsApp Video 2017-09-19 at 20.12.50.mp4'];
});