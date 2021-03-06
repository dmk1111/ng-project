function ProjectController($http, $element, $scope, $rootScope) {
  let self = this;
  self.$element = $element;
  jQuery(self.$element[0].querySelector('ul.tabs')).tabs();

  let id = '58d9b90d734d1d34490eff3a';
  let url = '/api/project/team/' + id;
  $http.get(url).then(function(res) {
      self.project = res.data;
      $rootScope.$broadcast('getProject', self.project);
  });

}

ProjectController.$inject = ['$http', '$element', '$scope', '$rootScope'];
module.exports = ProjectController;
