class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        	<style>
			    body {
				    display: none;
				    padding-bottom: 2rem;
			    }

			    .responsive-text-tiny {
				    font-size: clamp(14px, 2vw, 20px);
			    }

			    .responsive-text {
				    font-size: clamp(16px, 2vw, 25px);
			    }

			    .responsive-text-section {
				    font-size: clamp(21px, 2vw, 30px);
			    }

			    .responsive-text-title {
				    font-size: clamp(28px, 2vw, 40px);
			    }
			    
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
                            <a href = "index.html" style = "margin-left: 4rem;" class = "enlarge">Home</a>
                            <a href = "members.html" style = "margin-left: 4rem;" class = "enlarge">Members</a>
                            <a href = "publications.html" style = "margin-left: 4rem;" class = "enlarge">Publications</a>
                            <a href = "blog.html" style = "margin-left: 4rem;" class = "enlarge">Blog</a>
                            <a href = "students.html" style = "margin-left: 4rem;" class = "enlarge">For Students</a>
                            <a href = "links.html" style = "margin-left: 4rem;" class = "enlarge">Links</a>
                            <button id = "theme-toggle" style = "width: 40px; height: 40px; border-radius: 50%; border: none; font-size: 20px; cursor: pointer; position: absolute; top: -10px; right: 40px; text-align: center; background-color: #f5f5f5; color: #333;" onclick = "toggleTheme()" class = "enlarge">&#9728;</button>
                        </nav>
                    </h2>
                </div>
            </header>
        `;
    }
}
customElements.define('header-component', HeaderComponent);
