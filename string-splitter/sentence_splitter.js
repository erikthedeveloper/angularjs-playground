angular.module('SentenceApp', [])

  .controller('SentenceCtrl', function($scope) {

    $scope.the_string = "Lorem ipsum dolor sit amet, consectetur adipisicing elit. Deleniti quae id illo, excepturi. Ducimus cum perspiciatis nihil illum, quibusdam, possimus eos maxime voluptas libero molestiae dolore animi, facere cupiditate voluptates. Molestias soluta, quam natus aut obcaecati error quae laboriosam impedit! \n Molestias soluta, quam natus aut obcaecati error quae laboriosam impedit! \n Molestias soluta, quam natus aut obcaecati error quae laboriosam impedit!";

    $scope.filter_it = function () {
      return $scope.the_string.replace(/(\w)\w*/g, "$1").replace(/\s/g, '').replace(/[!\,\.]/g, " ");
    };

});
