require('./style.scss');

function LecturesRowListController($http, $state, $timeout, AuthService, popUpService) {
    let self = this;

    self.role = '';

    AuthService.userRole().then(function (userRole) {
        self.role = userRole;
    });

    $http.get('/api/lectures').then(function(res) {
        self.lectures = res.data.sort(function (a, b) {
            return new Date(a.lectureScheduledDate).getTime() - new Date(b.lectureScheduledDate).getTime();
        });
    });

    $timeout(function () {
        $('.collapsible').collapsible({
            accordion : true
        });
    });

    self.runEdit = function (lecture) {
        $state.go(self.role + '.editLecture', {lecture: lecture });
    };

    self.runDelete = function (id) {
        $http.delete('/api/lectures/' + id ).then(function() {

            //remove lecture from list to re-render list
            self.lectures = self.lectures.filter(function (lecture) {
                return lecture._id !== id ;
            });
        });

    };
    self.openPopUpClick = function(id){
        popUpService.openPopUpClick(id);
    }
}


LecturesRowListController.$inject = ['$http', '$state', '$timeout', 'AuthService', 'popUpService'];

module.exports = LecturesRowListController;
