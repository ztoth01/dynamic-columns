//In case you want to use the  "iife" pattern
export let app = (function () {

  console.log('app has been triggerd');

})();

// in case you still want to use Jquery :)
(function () {

  console.log('also works');
  //jquery
  $('#main-title').addClass('jquey-added-class')

})()