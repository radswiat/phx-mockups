export default function(app) {

  const template = require('ngtemplate!./templates/index.html');
  app.directive('homeDeploymentHistory', function() {
    return {
      templateUrl: template,
      link: () => {
      }
    };
  });
}
