import { appState } from "../AppState.js";
import { Chore } from "../Models/Chore.js";
import { saveState } from "../Utils/Store.js";


class ChoresService {

  deleteChore(choreId) {
    let chores = appState.chores.filter(c => c.id != choreId)
    appState.chores = chores
    saveState('chores', appState.chores)
}

  creatChore(newChore) {
    let chore = new Chore(newChore)
    console.log('new chore', chore)
    appState.chores = [chore, ...appState.chores]
    // console.log(appState.chores);
    saveState('chores', appState.chores)
}

}

export const choresService = new ChoresService