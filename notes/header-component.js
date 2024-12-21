class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        	<style>
				.enlarge {
					display: inline-block;
					transition: transform 0.3s ease;
				}

				.enlarge:hover {
					transform: scale(1.3);
				}
			</style>
			
            <header>
                <h1><a href = "../index.html" style = "margin-left: 5rem; position: relative; top:0px;"><img id = "logo" src = "../images/logo-light.webp" alt = "Formal Theory" height = "100" class = "enlarge"></a></h1>
                <div style = "position: relative; top: -70px;">
                    <h2>
                        <nav style = "text-align: right; margin-right: 10rem;">
                            <a href = "../index.html" style = "margin-left: 4rem;" class = "enlarge">Home</a>
                            <a href = "../members.html" style = "margin-left: 4rem;" class = "enlarge">Members</a>
                            <a href = "../publications.html" style = "margin-left: 4rem;" class = "enlarge">Publications</a>
                            <a href = "../notes.html" style = "margin-left: 4rem;" class = "enlarge">Notes</a>
                            <a href = "../students.html" style = "margin-left: 4rem;" class = "enlarge">Prospective Students</a>
                            <a href = "../links.html" style = "margin-left: 4rem;" class = "enlarge">Links</a>
                            <button id = "theme-toggle" style = "width: 40px; height: 40px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; position: absolute; top: -10px; right: 40px; text-align: center; background-color: #f5f5f5; color: #333;" onclick = "toggleTheme()" class = "enlarge">&#9728;</button>
                        </nav>
                    </h2>
                </div>
            </header>
        `;
    }
}
customElements.define('header-component', HeaderComponent);
