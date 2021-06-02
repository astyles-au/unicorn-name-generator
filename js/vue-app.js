// vue instance with components

// clipboard JS method loads
new ClipboardJS('.btn');

// Define a new component - unicorn-me
const app = Vue.component('unicorn-me', {
    data: function () {
        return {
            // test: 'Vue js component loaded ok! 😀'
            nameInput: '',
            nameOuput: '',
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

            // remove intro container on name generation load
            document.getElementById('intro').remove();
            document.getElementById('appHeading').remove();
            document.getElementById('bgTarget').classList.add('bg-pattern-stripe');

            // default variables
            this.nameInputShow = false
            this.nameModal = true

            // generate random unicorn name based on supplied name

            let items1 = [
                'Cupcake',
                'fruitcake',
                'muffin',
                'jujubescake',
                'candycane',
                'caramel',
                'dessert',
                'sesame',
                'snaps',
                'Applepie',
                'lollipop',
                'croissant',
                'donut',
                'cotton',
                'chocolatejelly',
                'Biscuit',
                'sweetbonbon',
                'marzipan',
                'Gingerbread',
                'carrotpie',
                'soufflé',
                'sweetcake',
                'Gummibear',
                'cookie',
                'puddingclaw',
                'caramelssnaps',
                'tootsieroll',
                'Gingermacaroon',
            ]

            let items2 = [
                'ambrosial',
                'appealing',
                'attractive',
                'captivating',
                'charming',
                'cute',
                'darling',
                'dear',
                'delectable',
                'delicious',
                'delightful',
                'dishy',
                'dreamy',
                'fetching',
                'heavenly',
                'hot',
                'luscious',
                'pleasing',
                'admirable',
                'alluring',
                'angelic',
                'appealing',
                'beauteous',
                'bewitching',
                'charming',
                'classy',
                'comely',
                'cute',
                'dazzling',
                'delicate',
                'delightful',
                'divine',
                'elegant',
                'enticing',
                'excellent',
                'exquisite',
                'fair',
                'fascinating',
                'fine',
                'foxy',
                'good-looking',
                'gorgeous',
                'graceful',
                'grand',
                'handsome',
                'lovely',
                'magnificent',
                'marvelous',
                'nice',
                'pleasing',
                'pretty',
                'radiant',
                'ravishing',
                'refined',
                'resplendent',
                'shapely',
                'sightly',
                'splendid',
                'statuesque',
                'stunning',
                'sublime',
                'superb',
                'symmetrical',
                'taking',
                'well-formed',
                'wonderful',
                'absorbing',
                'alluring',
                'amiable',
                'appealing',
                'attractive',
                'bewitching',
                'charismatic',
                'choice',
                'cute',
                'dainty',
                'delectable',
                'delicate',
                'delightful',
                'desirable',
                'electrifying',
                'elegant',
                'enamoring',
                'engaging',
                'engrossing',
                'enthralling',
                'entrancing',
                'eye-catching',
                'fascinating',
                'fetching',
                'glamorous',
                'graceful',
                'infatuating',
                'inviting',
                'irresistible',
                'likable',
                'lovable',
                'lovely',
                'magnetizing',
                'pleasant',
                'pleasing',
                'provocative',
                'rapturous',
                'ravishing',
                'seducing',
                'seductive',
                'sweet',
                'tantalizing',
                'tempting',
                'winsome',
            ]
            let items3 = [
                'advocate',
                'ally',
                'backer',
                'challenger',
                'champ',
                'conqueror',
                'defender',
                'endorser',
                'exponent',
                'expounder',
                'guardian',
                'hero',
                'heroine',
                'medalist',
                'number one',
                'numero uno',
                'paladin',
                'partisan',
                'patron',
                'protector',
                'supporter',
                'sympathizer',
                'the greatest',
                'upholder',
                'vanquisher',
                'victor',
                'vindicator',
                'warrior',
                'adversary',
                'antagonist',
                'battler',
                'challenger',
                'combatant',
                'contender',
                'contester',
                'dark horse',
                'favorite',
                'hopeful',
                'rival',
            ]

            function randomWords(items) {
                return items[Math.floor(Math.random() * items.length)];
            }
            console.log(randomWords(items1));
            console.log(randomWords(items2));
            console.log(randomWords(items3));

            let mixItUP = this.nameInput + '' + randomWords(items1) + ' the ' + randomWords(items2) + ' ' + randomWords(items3)
            this.nameOutput = mixItUP;
            console.log(this.nameOutput);
        },

        shareMe: function () {
            console.log('share function here soon!')

            if (navigator.share) {
                // Web Share API is supported
                console.log('You can share your name using phone API!');
                navigator.share({
                    title: 'I have a unicorn name, get your own!',
                    text: 'My Unicorn name is 🦄 ' + this.nameOutput,
                    url: 'https://friendly-booth-089be7.netlify.app'
                });

            } else {
                // Fallback
                console.log('You can share your name using copy paste!');
                this.shareButton = false
                this.shareFallback = true;
            }
        },

        startagain: function () {
            location.reload();
        },

        nameCopiedNotification: function () {
            this.nameCopied = true;
        },

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
    <h1 id="foo">🦄 {{nameOutput}}</h1>
    <button v-on:click="shareMe" v-show="shareButton">🎉 Share this!</button>

    <button v-on:click="startagain">
    💡 Make another name!
    </button>


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
    </span>


    </div>
    </div>

    `
})

// unicorn component instance called into DOM
new Vue({ el: '#unicorn-me' })