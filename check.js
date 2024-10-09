document.getElementById('dateForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const dateInput = document.getElementById('dateInput').value;
    if (dateInput) {
        const date = new Date(dateInput);
        const options = { weekday: 'long' };
        const weekday = new Intl.DateTimeFormat('en-US', options).format(date);

        document.getElementById('result').innerText = `${weekday}`;
    } else {
        document.getElementById('result').innerText = 'Please enter a valid date.';
    }
});
