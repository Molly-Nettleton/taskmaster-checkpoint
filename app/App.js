import { CardsController } from "./Controllers/CardsController.js";
import { ChoresController } from "./Controllers/ChoresController.js";

class App {
  cardsController = new CardsController()
  choresController = new ChoresController()
}

window["app"] = new App();
