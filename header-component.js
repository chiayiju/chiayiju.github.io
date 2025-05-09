let parent = true;

class HeaderComponent extends HTMLElement {
	connectedCallback() {
		this.innerHTML = `
			<style>
				header {
					position: relative;
				}

				.enlarge {
					display: inline-block;
					transition: transform 0.3s ease;
				}

				.enlarge:hover {
					transform: scale(1.3);
				}

				.flex-row {
					display: flex;
					justify-content: space-between;
					align-items: center;
				}

				.flex-row > div:first-child {
					text-align: left;
				}

				.flex-row > div:last-child {
					text-align: right;
				}

				/* Default Screen */
					body {
						padding-bottom: 1.25rem;
					}

					.text-tiny {
						font-size: 1.25rem;
					}

					.text {
						font-size: 1.5rem;
					}

					.text-section {
						font-size: 2rem;
					}

					.text-title {
						font-size: 2.5rem;
					}
				
					nav#main-nav {
						display: flex;
						flex-wrap: wrap;
						justify-content: flex-end;
						gap: 6rem;
					}

					.nav-link {
						font-size: 2rem;
					}

					#menu-toggle {
						position: absolute;
						top: 1rem;
						right: 1rem;
						font-size: 1.8rem;
						background: none;
						border: none;
						cursor: pointer;
						display: none;
					}

				/* Mobile styles */
				@media (max-width: 1380px) {
					body {
						padding-bottom: 0rem;
					}

					.text-tiny {
						font-size: 0.8rem;
					}

					.text {
						font-size: 1rem;
					}

					.text-section {
						font-size: 1.2rem;
					}

					.text-title {
						font-size: 1.5rem;
					}
					#menu-toggle {
						display: block;
						position: relative;
					}

					nav#main-nav {
						display: none;
						flex-direction: column;
						align-items: flex-start;
						padding: 1rem 2rem;
						border-radius: 0.8rem;
						position: absolute;
						top: 4.5rem;
						right: 1rem;
						z-index: 1000;
						gap: 0rem;
					}

					nav#main-nav.show {
						display: flex;
					}

					.nav-link {
						font-size: 1.5rem;
						line-height: 2;
					}

					.removable-box{
						display: none;
					}
				}
			</style>

			<header>
				<div style = "margin: 1rem 2rem;" class = "flex-row">
					<div>
						<a id = "index" href = "index.html">
							<img id = "logo" src = "images/logo-light.webp" alt = "Formal Theory" style = "width: 8rem;" class = "enlarge">
						</a>
					</div>
					<div>
						<button id = "menu-toggle" style = "font-size: 1.5rem; margin-top: -2.5rem; border: 0.2rem solid; padding: 0.25rem 0.5rem; border-radius: 0.6rem; cursor: pointer;">☰</button>
					</div>
					<div style = "display: flex; align-items: center; gap: 6rem;">
						<nav id = "main-nav">
							<a id = "members" href = "members.html" class = "nav-link enlarge">Members</a>
							<a id = "publications" href = "publications.html" class = "nav-link enlarge">Publications</a>
							<a id = "blog" href = "blog.html" class = "nav-link enlarge">Blog</a>
							<a id = "students" href = "students.html" class = "nav-link enlarge">For Students</a>
							<a id = "links" href = "links.html" class = "nav-link enlarge">Links</a>
						</nav>
						<button id = "theme-toggle" style = "width: 2rem; height: 2rem; border-radius: 50%; border: none; font-size: 1.5rem; cursor: pointer; background-color: #f5f5f5; color: #333;" onclick = "toggleTheme(true)" class = "enlarge">&#9728;</button>
					</div>
				</div>
			</header>
		`;
	}
}
customElements.define('header-component', HeaderComponent);