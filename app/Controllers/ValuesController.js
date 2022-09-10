import { appState } from "../AppState.js";
import { valuesService } from "../Services/ValuesService.js";
import { Pop } from "../Utils/Pop.js";
import { setHTML } from "../Utils/Writer.js";


// //Private
// function _draw() {
//   let cardsTemplate = ''
//   appState.values.forEach(v => cardsTemplate += v.CardTemplate)
//   setHTML('app', /*html*/`
  
//   `)
// }

//Public
export class ValuesController {
  constructor() {
    

  }

  addValue() {
    valuesService.addValue()
  }

  /**
   * @param {string} id
   */
  async removeValue(id) {
    const yes = await Pop.confirm('Remove Value')
    if (yes) {
      valuesService.removeValue(id)
    }
  }
  
  async clearAll() {
    const yes = await Pop.confirm('Remove All Rolls?')
    if (yes) {
      valuesService.removeAll()
    }
  }

}
