class pokemonAPICatalog {
    constructor() {
        this.catalog = null;

        this.API = "https://api.pokemontcg.io";
        this.API_VERSION= "v1";
        this.API_RESOURCE = "cards";

        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;

        this.UiSelectors {
            content : "[data-content]";
        }
    }
    init(){
        this.catalog = document.querySelector(this.UiSelectors.content);
        console.log("zainicjowana klasa");
        let cards = this.pullCards();
        this.addCards(cards);
    }

    async pullCards(){
        const { cards } = await this.fetchData(this.API_ENDPOINT)
    }


    async fetchData(url){
        const response = await fetch(url);
        const parsedResponse = await response.json();

        return parsedResponse;
    }

    addCards(cards){

    }
}