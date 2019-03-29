import Controller from '@ember/controller';

export default Controller.extend({
  weatherSearchIsOpen: false,
  actions: {
    toggleWeatherSearch: function() {
      this.toggleProperty("weatherSearchIsOpen");
    }
  }
});
