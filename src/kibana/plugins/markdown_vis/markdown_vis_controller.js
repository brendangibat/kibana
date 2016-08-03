define(function (require) {
  var marked = require('marked');
  require('angular-sanitize');
  marked.setOptions({
    gfm: true, // Github-flavored markdown
    sanitize: true // Sanitize HTML tags
  });

  var module = require('modules').get('kibana/markdown_vis', ['kibana', 'ngSanitize']);
  module.controller('KbnMarkdownVisController', function ($scope, $sce) {
    $scope.$watch('vis.params.markdown', function (html) {
      if (!html) return;
      $scope.html = marked(html);
    });
  });
});
