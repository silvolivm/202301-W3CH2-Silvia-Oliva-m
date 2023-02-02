import { Component } from '../component/component';

export class Add extends Component {
  constructor(public selector: string) {
    super();
    this.template = this.createTemplate();
    this.render();
  }

  /* HandleSubmit(event: Event) {
    event.preventDefault();
    const form =event.target as TMLInputElement
    const input1= form[0]= as HTMLInputElement
    console.dir(form[0].value)
    console.log('Añadiendo');
  } */

  handleSubmit(event: Event) {
    event.preventDefault();
    const form = event.target as HTMLInputElement;
    const inputs = form.querySelectorAll('input');
    console.dir(form[0].value);
    const newTask = new Task(inputs[0].value, inputs[1].value);

    console.log('Añadiendo');
  }

  render(place: globalThis.InsertPosition) {
    super.render(place);
    document
      .querySelector('form.add')
      ?.addEventListener('submit', this.handleSubmit.bind(this));
  }

  createTemplete() {
    return `<p>Add</p>;

      <form action="">

      <input type="text" name="name" placeholder = "Describe la tarea" required>
      <input type="text" name="owner" placeholder="Responsable de la tarea">
<button type="submit">Añadir</button>

    </form>`;
    /// /luego esto hay que trasladarlo a la caja grande que te le pones la posicion y se lo pasas al render
    /// en la caja grande se instancia el add
  }
}
