const angular = require('angular');
require('../assets/scss/main.scss');
require('angular-material');
require('angular-ui-router');
require('../../node_modules/angular-material/angular-material.scss');
let routes = [];

/**
 * Define angular module
 * @type {angular.Module}
 */
let app = angular.module('App', ['ngMaterial', 'ui.router']);

/**
 * Include components
 */
import compPageMenu from './components/page-menu/page-menu';
compPageMenu(app);

/**
 * Include helpers
 */
import helperRandomPhoto from './helpers/random-photo';
helperRandomPhoto(app);
import helperFilterLoop from './helpers/filter-loop';
helperFilterLoop(app);

/**
 * Define routes
 */
import routeHome from './pages/home/home';
routeHome(app);
routes.push({
  name: 'home',
  url: '/',
  template: '<route-home />'
});

import routePackages from './pages/packages/packages';
routePackages(app);
routes.push({
  name: 'packages',
  url: '/packages',
  template: '<route-packages />'
});

/**
 * Set up routing
 */
app.config(function($mdThemingProvider, $stateProvider) {

  // set up themes for angular material
  // $mdThemingProvider.theme('lime');
  // $mdThemingProvider.setDefaultTheme('lime');
  $mdThemingProvider
    .theme('default', 'dark')
    .primaryPalette('teal')
    .accentPalette('blue-grey')
    .warnPalette('red')
    .backgroundPalette('blue-grey');

  $mdThemingProvider
    .theme('dark')
    .accentPalette('blue-grey')
    .backgroundPalette('grey')
    .dark();

  // set up routes
  routes.forEach((route) => {
    $stateProvider.state(route);
  })

});

/**
 * Bootstrap angular
 */
angular.bootstrap(document, ['App']);
