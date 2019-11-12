new Vue({
    el: '#app',
    vuetify: new Vuetify(),
    data() {
        return {
            drawer: null,
            items: [
                { title: 'Home', icon: 'fab fa-github' },
                { title: 'About', icon: 'fas fa-at' },
            ],
            links: ['Présentation', 'Compétences', 'Expériences', 'Formation', 'Hobbies'],
            mini: true,
        }
    },
})