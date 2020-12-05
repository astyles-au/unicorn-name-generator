// vue instance with components

// Define a new component - unicorn-me
Vue.component('unicorn-me', {
    data: function () {
      return {
        test: 'Vue js component loaded ok! 😀'
      }
    },
    template: '<h2>{{test}}</h2>'
  })

  // unicorn component instance called into DOM
  new Vue({ el: '#unicorn-me' })