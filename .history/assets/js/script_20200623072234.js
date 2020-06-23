class pokemonAPICatalog {
    constructor() {
        this.API = "https://api.pokemontcg.io";
        this.API_VERSION= "v1";
        this.API_RESOURCE = "cards";

        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;
    }
    init(){
        console.log("zainicjowana klasa");
        this.pullCards();
    }

    async pullCards(){
        const { cards } = await this.fetchData(this.API_ENDPOINT)
        console.log(cards)
    }


    async fetchData(url){
        const response = await fetch(url);
        const parsedResponse = await response.json();

        return parsedResponse;
    }
}