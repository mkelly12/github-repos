$(document).foundation();

$(function() {
   var appView = new gh.AppView();
   $('body').append(appView.render().el);
});