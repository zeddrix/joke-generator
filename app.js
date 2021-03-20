const getJokes = (e) => {
	const number = document.querySelector('#number').value;

	const xhr = new XMLHttpRequest();

	xhr.open('GET', `http://api.icndb.com/jokes/random/${number}`, true);

	xhr.onload = function () {
		if (this.status === 200) {
			const res = JSON.parse(this.responseText);

			let output = '';

			if (res.type === 'success') {
				res.value.forEach(function (joke) {
					output += `<li>${joke.joke}</li>`;
				});
			} else {
				output += '<li>Something went wrong. Please reload page...</li>';
			}

			document.querySelector('.jokes').innerHTML = output;
		}
	};

	xhr.send();

	e.preventDefault();
};

document.querySelector('.get-jokes').addEventListener('click', getJokes);
