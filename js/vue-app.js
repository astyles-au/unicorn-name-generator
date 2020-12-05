// vue instance with components

// clipboard JS method loads
new ClipboardJS('.btn');

// Define a new component - unicorn-me
const app = Vue.component('unicorn-me', {
    data: function () {
        return {
            // test: 'Vue js component loaded ok! 😀'
            nameInput: '',
            nameInputShow: true,
            nameCopied: false,
            nameModal: false,
            shareButton: true,
            shareFallback: false,
        }
    },

    // define methods under the `methods` object
    methods: {

        buildName: function () {
            this.nameInputShow = false
            this.nameModal = true
            console.log(this.nameInput);
        },

        shareMe: function () {
            console.log('share function here soon!')

            if (navigator.share) {
                // Web Share API is supported
                console.log('You can share your name using phone API!');
                navigator.share({
                    title: 'I have a unicorn name, get your own!',
                    text: 'My Unicorn name is 🦄 ' + this.nameInput,
                    url: '#'
                  });

              } else {
                // Fallback
                console.log('You can share your name using copy paste!');
                this.shareButton = false
                this.shareFallback = true;

              }
        },

        startagain: function() {
            location.reload();
        },

        nameCopiedNotification: function() {
            this.nameCopied = true;
        }

    },

template: `
    <div style="width: 100%;">

    <div v-show="nameInputShow">
    <label>Enter your first name:</label>
    <input type="text" v-model="nameInput">
    <button v-on:click="buildName">Create magic!</button>
    </div>

    <div class="nameModal" v-show="nameModal">
    <!-- Target -->
    <h1 id="foo">🦄 {{nameInput}}</h1>
    <button v-on:click="shareMe" v-show="shareButton">🎉 Share this!</button>


    <span class="shareFallback" v-show="shareFallback">
    <!-- Trigger -->
    <p>
    Copy your name and share it with your friends on socials! 
    </p>
    <button class="btn" data-clipboard-target="#foo" v-on:click="nameCopiedNotification">
    🤚 Copy name to clipboard!
    </button>
    <p class="notification green" v-show="nameCopied">
    copied! 😀
    </p>

    <button v-on:click="startagain">
    💡 Make another name!
    </button>
    </span>


    </div>
    </div>

    `
})

// unicorn component instance called into DOM
new Vue({ el: '#unicorn-me' })