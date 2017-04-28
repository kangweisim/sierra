app.directive('highlight', function() {
   return {
       restrict: "A",
       scope: {highlight: "<"},
       link: function($scope, $element, $attrs) {
           $scope.$watch('highlight', function (value) {
               console.log(value);
               if (value % 2 == 1) {
                   $($element).addClass("highlight");
               } else {
                   console.log("hello");
                   $($element).removeClass("highlight");
               }
           })
       }
   } 
});