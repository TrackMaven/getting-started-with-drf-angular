'use strict';

var retail = angular.module("retail", [
        'ngResource'
    ]);

angular
    .module('SampleApplication', [
        'appRoutes',
        'retail'
    ]);