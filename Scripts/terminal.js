commands = ['clear']

var inputValue = '';

function keyChecker(data) {
  if (event.key === "Enter")
    alert(data.value);
    inputValue = data.value;
}

if (inputValue == 'clear') {
    console.log('Hello');
}
