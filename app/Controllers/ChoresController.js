import { choresService } from "../Services/ChoresService.js";
import { getFormData } from "../Utils/FormHandler.js";


export class ChoresController {

  constructor() {
  console.log('hello from Chores Controller')
}

  createChore(cardId) {
    try {
      console.log('creating chore...')
      window.event.preventDefault()
      let form = window.event.target
      let formData = getFormData(form)
      formData.cardId = cardId
      console.log('does this cool okay?', formData)
      choresService.createChore(formData)
    } catch (error) {
      console.log('Create chore error:',error);
    }
  
  }
  
  deleteChore(choreId) {
    if (window.confirm('Do you want to remove this item?')) {
      choresService.deleteChore(choreId)
    }
    console.log('Chore deleted. But was it completed?',)
    try {
      choresService.deleteChore(choreId)
    } catch (error) {
      console.log(error)
    }
  }
  toggleChoreComplete(id) {
    choresService.toggleChoreComplete(id)
  }
  
}