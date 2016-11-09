angular.module('starter', ['ionic','mySuperApp'])

.run(function($ionicPlatform) {
  $ionicPlatform.ready(function() {
    if(window.cordova && window.cordova.plugins.Keyboard) {

      cordova.plugins.Keyboard.hideKeyboardAccessoryBar(true);


      cordova.plugins.Keyboard.disableScroll(true);
    }
    if(window.StatusBar) {
      StatusBar.styleDefault();
    }
  });
})

.config(function($stateProvider, $urlRouterProvider){
  $stateProvider
  .state('inicio',{
    url:'/inicio',
    templateUrl:'templates/inicio.html',
    controller:'PopupCtrl'
  })

  $urlRouterProvider.otherwise('/inicio');

})
