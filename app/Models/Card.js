import { appState } from "../AppState.js";
import { generateId } from "../Utils/generateId.js";


export class Card {
  /**
   * @param {{cardname: string, color: string, id:string}} data 
   */
  constructor(data) {
    this.id = data.id || generateId()
    this.cardname = data.cardname
    this.color = data.color
}

  
  get CardTemplate() {
    return /*html*/`
        <div class="col-12 col-md-4 p-2">
          <div class="elevation-5 rounded bg-light">

            <div class="bg-dark text-light text-end rounded pb-3">

              <button onclick="app.cardsController.removeCard('${this.id}')" class="btn btn-danger">
          <b><i class="mdi mdi-cancel text-light"></i></b>
          </button>

              <h4 class="text-center bulletin-font" id="listname">${this.cardname} : </h4>
              <div class="fs-5 text-center">0/2</div>
            </div>

            <div class="px-3" id="chores">

${this.ChoresTemplates}

              <form onsubmit="app.choresController.createChore('${this.id}')" class="py-4">
                <div class="form-group d-flex justify-content-between">
                  <input class="chore-input" type="text" name="chorename" maxlength="15" required
                        minlength="2" placeholder="Add Chore...">
                  <button class="btn" type="submit" ><i class="mdi mdi-plus"></i></button>
                </div>
            </div>
            </form>
          </div>
        </div>
        `
  }
  
  get ChoresTemplates() {
    let template = ''
    this.Chores.forEach(chore => template += chore.ChoreTemplate)
    return template
  }

  get Chores() {
    let chores = appState.chores.filter(chore => chore.cardId == this.id)
    return chores
  }

}


