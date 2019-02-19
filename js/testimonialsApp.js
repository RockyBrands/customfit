// Need the event listener otherwise script runs before DOM fully loads
window.addEventListener('load', function () {
Vue.component('quote-left', {
    template: '#quote-left',
    methods: { }
  });
  Vue.component('quote-right', {
    template: '#quote-right',
    methods: { }
  });
  new Vue({
    el: '#app' 
  });
})