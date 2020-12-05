// vue instance with components

// Define a new component - unicorn-me
Vue.component('unicorn-me', {
    data: function () {
        return {
            // test: 'Vue js component loaded ok! 😀'
            nameInput: ''
        }
    },

    // define methods under the `methods` object
    methods: {
        buildName: function () {
            console.log(this.nameInput);
        }
    },
    template: `
    <div>
    <label>Enter your first name:</label>
    <input type="text" v-model="nameInput">
    <button v-on:click="buildName">Create magic!</button>
    {{nameInput}}
    </div>

    `
})

// unicorn component instance called into DOM
new Vue({ el: '#unicorn-me' })