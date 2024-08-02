	function showTime() {
		const countrySelect = document.getElementById('country');
		const timeDisplay = document.getElementById('timeDisplay');
		const timezone = countrySelect.value;

		const currentTime = moment().tz(timezone).format('MMMM Do YYYY, h:mm:ss a');
		timeDisplay.textContent = `Horário Atual nesse país: ${countrySelect.options[countrySelect.selectedIndex].text}: ${currentTime}`;
	}

	// Initialize with the default selection
	document.addEventListener('DOMContentLoaded', showTime);