class pokemonAPICatalog {
    constructor() {
        this.API = "https://api.pokemontcg.io";
        this.API_VERSION= "v1";
        this.API_RESOURCE = "cards";

        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}`;
    }
    init(){
        console.log("zainicjowana klasa");
    }
}