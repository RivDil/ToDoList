import './style.css';
import { project } from "./project";
import { DOM_CONTENT } from './dom-structure';
import { DOM_EVENTS } from './domEvent';



const luis = new project('luis');

const gabriela = new project ('gabriela');
gabriela.addTodos({name: 'desayuno', description: 'tengo hamrbe'})
gabriela.addTodos({name: 'almuerzo', description: 'tengo hamrbe'})
luis.addTodos({name: 'comer', description: 'tengo hamrbe'})
luis.addTodos({name: 'saludar', description: 'tengo hamrbe'})
let gabrielaAl = gabriela.getTodos();
let luisal = luis.getTodos();
console.log(gabrielaAl);
console.log(luisal);
console.log(luis.getName())

console.log(typeof(luis))






    
    DOM_CONTENT()
    DOM_EVENTS()

