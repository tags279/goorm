import fetch from 'node-fetch';

const PROXY_URL = "https://goormide.netlify.app/proxy";

async function getURL (pageURL) {
	const data = {
		pageURL
	};

	const config = {
		method: 'POST',
		headers: {},
		body: JSON.stringify(data)
	}

	const res = await fetch(PROXY_URL, config);
	const htmlContent = await res.text();
	return htmlContent;
}

async function main () {
	const htmlContent = await getURL("https://accounts.goorm.io/signup?");
	console.log(htmlContent);
}

main();
