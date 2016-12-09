export default function(app) {

  const template = require('ngtemplate!./templates/index.html');
  app.directive('homeChangesHistory', function() {
    return {
      templateUrl: template,
      link: () => {
      }
    };
  });
}
