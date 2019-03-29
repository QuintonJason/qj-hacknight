import Component from '@ember/component';

export default Component.extend({
  tagName: 'header',
  classNames: ['logo'],
  isSearching: false,
  actions: {
    isSearching() {
      this.toggleProperty("isSearching");
    }
  }
});
