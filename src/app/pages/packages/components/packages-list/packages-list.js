export default function(app) {

  const template = require('ngtemplate!./templates/index.html');
  app.directive('packagesPackagesList', function() {
    return {
      templateUrl: template,
      replace: true,
      link: ($scope) => {

        $scope.selectedIndex = 0;

        $scope.tabs = [
          {
            title: 'Shareholder',
            sub: '(PSTN+BB) - all with UWC with TV upsell'
          },
          {
            title: 'Affiliate',
            sub: '(PSTN+BB+TV) - all with UWC'
          },
          {
            title: 'DualsN'
          },
          {
            title: 'TV'
          },
          {
            title: 'TriplesN'
          },
          {
            title: 'AffTriples'
          },
          {
            title: 'SeasonalDual'
          }
        ]

      }
    };
  });
}
