class pokemonAPICatalog {
    constructor() {
        this.catalog = null;
        this.cards = [];
        this.page = 1;

        this.API = "https://api.pokemontcg.io";
        this.API_VERSION= "v1";
        this.API_RESOURCE = "cards?pageSize=4&page=2";
        this.API_PAGE_SIZE = "pageSize=4"
        this.API_PAGE = "page="

        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}?${this.API_PAGE_SIZE}&${this.API_PAGE}${this.page}`;

        this.UiSelectors = {
            content : `[data-content]`,
            loadButton : `[data-load-button]`
        }
    }
    init(){
        this.catalog = document.querySelector(this.UiSelectors.content);
        this.loadButton = document.querySelector(this.UiSelectors.loadButton);
        this.pullCards(this.API_ENDPOINT);
        this.loadButton.addEventListener("click",()=>{
            this.updateAPI_ENDPOINT();
            this.pullCards(this.API_ENDPOINT);
        })

    }

    updateAPI_ENDPOINT(){
        this.page += 1;
        this.API_ENDPOINT = `${this.API}/${this.API_VERSION}/${this.API_RESOURCE}?${this.API_PAGE_SIZE}&${this.API_PAGE}${this.page}`;
    }

    async pullCards(url){
        const { cards } = await this.fetchData(url)
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
                    <span class="card__name card--bold">${card.name}</span>
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