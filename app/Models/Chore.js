import { generateId } from "../Utils/generateId.js";


export class Chore {

  /**
   * @param {{chorename: string, choreComplete: string, id:string, cardId:string}} data 
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.chorename = data.chorename
    this.choreComplete = data.choreComplete || false
    this.cardId = data.cardId
}

  get ChoreTemplate() {
    return/*html*/`
    <div class="d-flex justify-content-between align-items-baseline">
                <input onchange="app.choresController.toggleChoreComplete('${this.id}')" class="form-check-input" ${this.choreComplete ? 'checked' : ''} type="checkbox" value="">
                
                <p class="p-2 mb-2 border-bottom border-2 border-info">${this.chorename}</p>
                <i onclick="app.choresController.deleteChore('${this.id}')" class="mdi mdi-close selectable"></i>
              </div>
    `
  }
}