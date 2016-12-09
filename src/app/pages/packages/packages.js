// require sub components
import packagesList from './components/packages-list/packages-list';

export default function(app) {

  // default template
  const template = require('ngtemplate!./templates/index.html');

  // run sub components
  packagesList(app);

  /**
   * Directive
   */
  app.directive('routePackages', function() {
    return {
      templateUrl: template,
      link : ($scope) => {
      }
    };
  });
}
