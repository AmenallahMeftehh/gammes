angular.module('app',['ngRoute']).config(['$routeProvider',function($routeProvider){
$routeProvider
 .when('/accessoires',{
   templateUrl:'pages/accessoires.html'
 })
.when('/bureautique',{
  templateUrl:'pages/bureautique.html'
})
.when('/electromenager',{
  templateUrl:'pages/electromenager.html'
})
.when('/impression',{
  templateUrl:'pages/impression.html'
})
.when('/ordinateur',{
  templateUrl:'pages/ordinateur.html',
  controller:'ordinateurController'})
.when('/reseaux',{
  templateUrl:'pages/reseaux.html'
})
.when('/telephonies',{
  templateUrl:'pages/telephonies.html'

})
.otherwise({redirectTo:'/index'})
}]);
