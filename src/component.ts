export default class Component extends HTMLElement {
	public constructor() {
		super();
		this.style.display = 'inline-block';
	}
}
customElements.define('figui-component', Component);
