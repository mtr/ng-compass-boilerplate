angular.module('ngBoilerplate', [
    'ngRoute',
    'app-templates',
    'component-templates',
    'ngBoilerplate.home',
    'ngBoilerplate.about',
    'ui.route'
])

    .config(function myAppConfig($routeProvider) {
        $routeProvider.otherwise({ redirectTo: '/home' });
    })

    .run(function run(titleService) {
        titleService.setSuffix(' | ngBoilerplate');
    })

    .controller('AppCtrl', function AppCtrl($scope, $location) {
    })

;

