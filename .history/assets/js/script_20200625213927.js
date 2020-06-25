class pokemonAPICatalog {
    constructor() {
        this.catalog = null;
        this.cards = [];

        this.API = "https://api.pokemontcg.io";
        this.API_VERSION= "v1";
        this.API_RESOURCE = "cards";

        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;

        this.UiSelectors = {
            content : `[data-content]`
        }
    }
    init(){
        this.catalog = document.querySelector(this.UiSelectors.content);
        this.pullCards();

    }

    async pullCards(){
        const { cards } = await this.fetchData(this.API_ENDPOINT)
        this.cards = [...cards];
        this.addCards(this.cards);
    }


    async fetchData(url){
        const response = await fetch(url);
        const parsedResponse = await response.json();

        return parsedResponse;
    }

    addCards(cards){
        this.cards.map(card => {
            this.catalog.insertAdjacentHTML("beforeend", this.drawCard(card))
        });
    }

    drawCard(cart){
        console.log("jestem")
        return{
            `<span class="section-main__card"><img src= ${cart.imageUrl} class="card__image"git > </span>`
        }
    }
}