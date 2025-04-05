(function () {
	parent = false;

	document.addEventListener("DOMContentLoaded", function() {
		const index = document.getElementById("index");
		if (index){
			index.href = "../index.html";
		}

		const members = document.getElementById("members");
		if (members){
			members.href = "../members.html";
		}

		const publications = document.getElementById("publications");
		if (publications){
			publications.href = "../publications.html";
		}

		const blog = document.getElementById("blog");
		if (blog){
			blog.href = "../blog.html";
		}

		const students = document.getElementById("students");
		if (students){
			students.href = "../students.html";
		}

		const links = document.getElementById("links");
		if (links){
			links.href = "../links.html";
		}
	});
})();