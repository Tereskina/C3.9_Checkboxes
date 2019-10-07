function getCookie(name) {
	let matches = document.cookie.match(new RegExp("(?:^|; )" + name.replace(/([\.$?*|{}\(\)\[\]\\\/\+^])/g, '\\$1') + "=([^;]*)"));
	return matches ? decodeURIComponent(matches[1]) : undefined;
}


function setCookie(name, value, options = {}) {

	options = {
		path: '/',
		'max-age': 60,
		expires: new Date(),
	};

	if (options.expires) {
		options.expires = options.expires.toUTCString();
	}

	let updatedCookie = encodeURIComponent(name) + "=" + encodeURIComponent(value);

	for (let optionKey in options) {
		updatedCookie += "; " + optionKey;
		let optionValue = options[optionKey];
		if (optionValue !== true) {
			updatedCookie += "=" + optionValue;
		}
	}

	document.cookie = updatedCookie;
}



save.onclick = () => {
	checkboxes_total_value = "";

	for (i = 0; i < 6; i++) { 
		checkboxes_total_value = checkboxes_total_value 
			+ (document.getElementById(i + 1).checked ? "1" : "0");
		document.getElementById(i + 1).disabled = true;
	}
	 

	save.style.display = "none";
	document.getElementById("add_message").innerHTML = "You have already chosen your dishes. Wait a minute. It will be ready soon:";
	setCookie("dinner", checkboxes_total_value, {"max-age": 60} );
}


load_page = getCookie("dinner");

if (load_page != undefined) {
	save.style.display = "none";
	document.getElementById("add_message").innerHTML = "You have already chosen your dishes. Wait a minute. It will be ready soon:";
	// 101000
	for (i = 0; i < 6; i++) { 
		document.getElementById(i + 1).checked = load_page[i] == "1";
		document.getElementById(i + 1).disabled = true;

	} 
}
