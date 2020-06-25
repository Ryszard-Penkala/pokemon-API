class pokemonAPICatalog {
    constructor() {
        this.catalog = null;
        this.cards = [];

        this.API = "https://api.pokemontcg.io";
        this.API_VERSION= "v1";
        this.API_RESOURCE = "cards";

        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;

        this.UiSelectors = {
            content : "[data-content]"
        }
    }
    init(){
        this.catalog = document.querySelector(this.UiSelectors.content);
        this.addCards(this.cards);
    }

    async pullCards(){
        const { cards } = await this.fetchData(this.API_ENDPOINT)
        this.cards = [...cards];
    }


    async fetchData(url){
        const response = await fetch(url);
        const parsedResponse = await response.json();

        return parsedResponse;
    }

    addCards(cards){
        cards.forEach(card => {
            this.catalog.insertAdjacentHTML("beforeend", "<span><img src=`card.imageUrl`></span>")
        });
    }
}