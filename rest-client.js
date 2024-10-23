const app = Vue.createApp({
    data() {
        return {
            games: [],
            sortKey: '',
            sortAsc: true
        };
    },
    methods: {
        sortBy(key) {

            if (this.sortKey === key) {
                this.sortAsc = !this.sortAsc;
            } else {
                this.sortKey = key;
                this.sortAsc = true;
            }

            this.games.sort((a, b) => {
                if (a[key] < b[key]) return this.sortAsc ? -1 : 1;
                if (a[key] > b[key]) return this.sortAsc ? 1 : -1;
                return 0;
            });
        }
    },
    async created() {
        this.games = await (await fetch("http://localhost:8080/games")).json();
    }
}).mount('#app');