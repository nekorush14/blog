$(document).ready(function () {
  $('.sidenav')
    .sidenav()
    .on('click tap', 'li a', () => {
      $('.sidenav').sidenav('close');
    });
});
$(document).ready(function () {
  $('.materialboxed').materialbox();
});
hljs.initHighlightingOnLoad();