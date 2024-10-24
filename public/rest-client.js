const app = Vue.createApp({
    data() {
        return {
            gameInModal: { id: null, name: null, price: null },
            games: [],
            sortKey: '',
            sortAsc: true,
            newGame: { name: '', price: '' }
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
        },
        async getGame(id) {
            this.gameInModal = await (await fetch(`http://localhost:8080/games/${id}`)).json();
            let gameInfoModal = new bootstrap.Modal(document.getElementById('gameInModal'));
            gameInfoModal.show();
        },
        async addGame() {
            try {
                const response = await fetch("http://localhost:8080/games", {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify(this.newGame)
                });

                if (!response.ok) throw new Error('Failed to add game');
                const addedGame = await response.json();
                this.games.push(addedGame);
                this.newGame.name = '';
                this.newGame.price = '';
            } catch (error) {
                console.error('Error adding game:', error);
            }
        }
    },
    async created() {
        this.games = await (await fetch("http://localhost:8080/games")).json();
    }
}).mount('#app');