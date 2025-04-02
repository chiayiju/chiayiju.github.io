class HeaderComponent extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        	<style>
			    body {
				    display: none;
				    padding-bottom: 2rem;
			    }

			    .responsive-text-tiny {
				    font-size: clamp(10px, 2vw, 20px);
			    }

			    .responsive-text {
				    font-size: clamp(12.5px, 2.5vw, 25px);
			    }

			    .responsive-text-section {
				    font-size: clamp(15px, 3vw, 30px);
			    }

			    .responsive-text-title {
				    font-size: clamp(20px, 4vw, 40px);
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
                <h1><a href = "index.html" style = "margin-left: 5rem; position: relative; top:0px;"><img id = "logo" src = "/images/logo-light.webp" alt = "Formal Theory" height = "100" class = "enlarge"></a></h1>
                <div style = "position: relative; margin-top: -4rem;">
                    <h2>
                        <nav style = "text-align: right; margin-right: 10rem;">
                            <a href = "index.html" style = "margin-right: clamp(1rem, 3vw, 4rem); font-size: clamp(12.5px, 2.5vw, 25px);" class = "enlarge">Home</a>
                            <a href = "members.html" style = "margin-right: clamp(1rem, 3vw, 4rem); font-size: clamp(12.5px, 2.5vw, 25px);" class = "enlarge">Members</a>
                            <a href = "publications.html" style = "margin-right: clamp(1rem, 3vw, 4rem); font-size: clamp(12.5px, 2.5vw, 25px);" class = "enlarge">Publications</a>
                            <a href = "blog.html" style = "margin-right: clamp(1rem, 3vw, 4rem); font-size: clamp(12.5px, 2.5vw, 25px);" class = "enlarge">Blog</a>
                            <a href = "students.html" style = "margin-right: clamp(1rem, 3vw, 4rem); font-size: clamp(12.5px, 2.5vw, 25px);" class = "enlarge">For Students</a>
                            <a href = "links.html" style = "margin-right: clamp(1rem, 3vw, 4rem); font-size: clamp(12.5px, 2.5vw, 25px);" class = "enlarge">Links</a>
                            
                            <button id = "theme-toggle" style = "width: 2rem; height: 2rem; border-radius: 50%; border: none; font-size: clamp(10px, 2vw, 20px); cursor: pointer; position: absolute; margin-top: -0.4rem; right: 3rem; text-align: center; background-color: #f5f5f5; color: #333;" onclick = "toggleTheme()" class = "enlarge">&#9728;</button>
                        </nav>
                    </h2>
                </div>
            </header>
        `;
    }
}
customElements.define('header-component', HeaderComponent);
