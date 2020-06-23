class pokemonAPICatalog {
    constructor() {
        this.API = "https://api.pokemontcg.io";
        this.API_VERSION= "v1";
        this.API_RESOURCE = "cards";

        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;
    }
    init(){
        console.log("zainicjowana klasa");
        this.fetchCards(this.API_ENDPOINT);
    }
    async fetchCards(url){
        const response = await fetch(url);
        console.log(response);
    }
}