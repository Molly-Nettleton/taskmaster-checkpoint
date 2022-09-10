import { appState } from "../AppState.js"
import { getFormData } from "../Utils/FormHandler.js"
import { setHTML } from "../Utils/Writer.js"
import { cardsService } from "../Services/CardsService.js";

function _drawCards() {
  let template = ''
  appState.cards.forEach(card => template += card.CardTemplate)
  setHTML('cards', template)
}
export class CardsController{
  constructor() {
    console.log('hello from card controller')
    appState.on('cards', _drawCards)
    appState.on('chores', _drawCards)
    _drawCards()
  
  }
  
  createCard() {
    try {
      console.log('creating card')
      window.event.preventDefault()
      const form = window.event.target
      let newCard = getFormData(form)
      cardsService.createCard(newCard)
      // @ts-ignore
      form.reset()
    } catch (error) {
      console.log(error)
    }
  }

   removeCard(id) {
    if (window.confirm('Do you want to remove this item?')) {
      cardsService.removeCard(id)
    }
  }

}