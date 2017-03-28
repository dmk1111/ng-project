function StudentListController($http) {
    let self = this;

    $http.get('/api/users').then(function(res) {
        self.persons = res.data;
    });
}
// This is an angular special property. One of the way to safely inject smth to controller function
StudentListController.$inject = ['$http'];

module.exports = StudentListController;