class pokemonAPICatalog {
    constructor() {
        this.catalog = null;
        this.cards = [];

        this.API = "https://api.pokemontcg.io";
        this.API_VERSION= "v1";
        this.API_RESOURCE = "cards?pageSize=4&page=1";

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

    drawCard(card){
        return(
            `<span class="section-main__card">
                <header class="card__header">
                    <span class="card__name">${card.name}</span>
                    <span class="card__id">Nr: ${card.number}</span>
                </header>
                <img src=${card.imageUrl} class="card__image">
                <footer class="card_footer">
                    <div class="card__supertype">
                        <span class="card__supertype card--bold">Supertype : </span>
                        ${card.supertype}
                    </div>
                    <div class="card__subtype">
                        <span class="card__subtype card--bold">Subtype : </span>
                        ${card.subtype}
                    </div>
                    <div class="card__rarity">
                        <span class="card__rarity card--bold">Rarity : </span>
                        ${card.rarity}
                    </div>
                </footer>
            </span>`
        )
    }
}