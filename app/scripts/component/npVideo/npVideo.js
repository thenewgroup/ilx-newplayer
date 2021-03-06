/* jshint -W003, -W117 */
(function () {
    'use strict';
    angular
            .module('newplayer.component')
            /** @ngInject */
            .directive('npVideo', NpVideoDirective);
    /** @ngInject */
    function NpVideoDirective($log) {
        $log.info('DEBUG | \npVideo::Init\n');
        return {
            restrict: 'EA',
            controller: NpVideoController,
            controllerAs: 'npVideo',
            bindToController: true
        };
    }
    /** @ngInject */
    function NpVideoController($log, $scope, $sce) {
        var vm = this,
                types = $scope.component.data.types,
                source = $scope.component.data.baseURL;
        if (angular.isArray(types) && types.length > 0) {
            var sources = [];
            for (var typeIdx in types) {
                console.log(
                        '\n::::::::::::::::::::::::::::::::::::::npQuestions::evaluate:::::::::::::::::::::::::::::::::::::::::::::::::',
                        '\n::$scope.component.data::', $scope.component.data,
                        '\n::$scope.component.data.baseURL::', $scope.component.data.baseURL,
                        '\n::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::::'
                        );
                $(function () {
                    $("video").bind("loadedmetadata", function () {
                        var width = this.videoWidth;
                        var height = this.videoHeight;
                        //////////////////////////////////////////////////////////////////////////////////////
                        //On Safari only remove class setting width at 100% (for Safari 8+ video controls bug)
                        //////////////////////////////////////////////////////////////////////////////////////
                        if (navigator.userAgent.indexOf('Safari') !== -1 && navigator.userAgent.indexOf('Chrome') === -1) {
                            $(this).removeClass("videoWidth");
                        }
                    });
                });
                var type = types[typeIdx];
                sources.push({
                    type: type,
                    mime: 'video/' + type,
                    src: $sce.trustAsResourceUrl($scope.component.data.baseURL + '.' + type)
                });
            }
            $scope.npVideo = {
                sources: sources
            };
        }
    }
})();
