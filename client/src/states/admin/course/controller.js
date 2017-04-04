function CourseComponentController($element, $http, $rootScope, adminProjServ) {
  let scope = $rootScope.$new(),
    self = this;
  self.$element = $element;
  jQuery(self.$element[0].querySelector('ul.tabs')).tabs();
  self.create = true;
  self.course = adminProjServ.courseChecked;

  self.lectNewSelect = {
    model: null,
    availableOptions: []
  };
  // self.lectNewSelect = [];

  let getStudents = function() {
    let url = '/api/course/students/' + self.course._id;
    $http.get(url).then(function(res) {
      self.students = res.data;
      adminProjServ.students = self.students;
    });
  }

  let getProjects = function() {
    let url = '/api/course/projects/' + self.course._id;
    $http.get(url).then(function(res) {
      self.projects = res.data;
    });
  }

  let getLectures = function() {
    self.lectures = [];
    let lectArr = self.course.lectures;
    for (var i = 0; i < lectArr.length; i++) {
      $http.get('/api/lectures/' + lectArr[i]).then(function(res) {
        self.lectures.push(res.data);
      });
    }
  }

  scope.$on('updateCourseItem', function(event) {
    self.course = adminProjServ.courseChecked;
    getLectures();
    getProjects();
    getStudents();
  });


  // self.course = adminProjServ.courseChecked;
  // adminProjServ.courseId = self.courseChecked._id;
  // scope.$on('getCourseInfo', function(event, data) {
  //   self.course = data;
  //   adminProjServ.courseId = self.course._id;
  //   getStudents();
  //   getProjects();
  // });

}

CourseComponentController.$inject = ['$element', '$http', '$rootScope', 'adminProjServ'];
module.exports = CourseComponentController;
