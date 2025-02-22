class FooterComponent extends HTMLElement {
	connectedCallback() {
	this.innerHTML = `
		<footer style = "position: fixed; bottom: 0; width: 100%; text-align: center; background: #000; font-size: 20px;">
			<a href = "https://phys.nsysu.edu.tw" target = "_blank">Department of Physics</a>, <a href = "https://www.nsysu.edu.tw" target = "_blank">National Sun Yat-sen University</a>, No. 70 Lien-hai Road, Kaohsiung, Taiwan 804201
		</footer>
	`;
	}
}
customElements.define('footer-component', FooterComponent);