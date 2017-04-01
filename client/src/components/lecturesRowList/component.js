const LecturesRowListController = require('./controller.js');

const lecturesRowListComponent = {
  bindings: {
    lectures: '='
  },
  controller: LecturesRowListController,
  template: require('./template.html')
};

module.exports = lecturesRowListComponent;
