// require sub components
import changesHistory from './components/changes-history/changes-history';
import deploymentHistory from './components/deployment-history/deployment-history';

export default function(app) {

  // defaul template
  const template = require('ngtemplate!./templates/index.html');


  // run sub components
  changesHistory(app);
  deploymentHistory(app);

  /**
   * Directive
   */
  app.directive('routeHome', function() {
    return {
      templateUrl: template,
      link : ($scope) => {
      }
    };
  });
}
