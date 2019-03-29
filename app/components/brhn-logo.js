import Component from '@ember/component';

export default Component.extend({
  tagName: 'div',
  classNames: ['logo'],
  dark: false,
  rain: false,
  storm: false,
  // This will get overwritten by a passed in action
  onDotClick() {
    console.warn("Pass in an onDotClick function");
  }
});
