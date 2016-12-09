
export default function(app) {

  // default template
  const template = require('ngtemplate!./templates/index.html');

  /**
   * Directive
   */
  app.directive('compPageMenu', function() {
    return {
      templateUrl: template,
      replace: true,
      link : ($scope) => {
      }
    };
  });
}
