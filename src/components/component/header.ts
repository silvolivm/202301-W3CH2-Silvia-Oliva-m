export class Header extends Component {
  constructor(public selector: string, public title: string = 'Pests List') {
    super();
    this.template = this.createTemplate();
    this.render('afterbegin');
  }
  private createTemplate() {
    return `
    <header class= 'Header'<h1>${this.title}<h1>
      </header>`;
  }
  render(place: globalThis.InsertPosition) {
    super.render(place);
  }
}
