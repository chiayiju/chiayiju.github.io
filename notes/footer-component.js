class FooterComponent extends HTMLElement {
  connectedCallback() {
    this.innerHTML = `
      <footer>
        <p style = "position: relative; top: 1rem; text-align: center">
            Department of Physics, National Sun Yat-sen University, No. 70 Lien-hai Road, Kaohsiung, Taiwan 804201
        </p>
      </footer>
    `;
  }
}
customElements.define('footer-component', FooterComponent);
