class FooterComponent extends HTMLElement {
	connectedCallback() {
	    this.innerHTML = `
	    	<div class = "removable-box">
			    <footer id = "footer" style = "position: fixed; bottom: 0; width: 100vw; text-align: center;" class = "text-tiny">
					<a href = "https://phys.nsysu.edu.tw" target = "_blank">Department of Physics</a>, <a href = "https://www.nsysu.edu.tw" target = "_blank">National Sun Yat-sen University</a>, No. 70 Lien-hai Road, Kaohsiung, Taiwan 804201
				</footer>
		    </div>
	    `;
	}
}
customElements.define('footer-component', FooterComponent);
