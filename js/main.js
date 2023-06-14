$(document).ready(function () {


	$("#portfolio-contant-active").mixItUp();


	// Counter

	$('.counter').counterUp({
		delay: 10,
		time: 1000
	});

	// Replace with your GitHub username, repository, and file path
	const username = "forrestameling";
	const repository = "BesbuyGpuBot";
	const filePath = "blob/main/bestbuy.py";

	// Fetch the file content from GitHub API
	fetch(`https://api.github.com/repos/${username}/${repository}/contents/${filePath}`)
		.then(response => response.json())
		.then(data => {
			const fileContent = atob(data.content); // Decode base64 content

			// Display the file content on the page
			const fileContentElement = document.getElementById("file-content");
			fileContentElement.innerText = fileContent;
		})
		.catch(error => console.error(error));


});




