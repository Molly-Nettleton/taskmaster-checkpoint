import { appState } from "../AppState.js";
import { Card } from "../Models/Card.js";
import { saveState } from "../Utils/Store.js";

class CardsService {
  createCard(formData) {
    let card = new Card(formData)
    appState.cards = [ ...appState.cards,card]
    console.log(appState.cards)
    saveState('cards', appState.cards)
}

  removeCard(id) {
      console.log("Card removed.")
    let leftovers = appState.cards.filter(card => card.id !== id)
    appState.cards = leftovers
    saveState('cards', appState.cards)
  }

}

export const cardsService = new CardsService