function feedbackPopUpController($http, $element) {
  let self = this;
  self.$element = $element;

  self.sendFeedback = function(){
    let data = {
      lectureId: self.lecture._id,
      overal: self.overal,
      whatWasGood: self.whatWasGood,
      whatWasBad: self.whatWasBad
    };

    $http.post('/api/feedbacks', data).then(function(res) {
        self.feedback = res.data;
      },
      function(err) {
        self.error = true;
      });
    self.overal = '';
    self.whatWasGood = '';
    self.whatWasBad = '';
  }
}

feedbackPopUpController.$inject = ['$http', '$element'];
module.exports = feedbackPopUpController;
