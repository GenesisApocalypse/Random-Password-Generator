function generatePassword() {
    // Grabbing user inputs
    const lowercase = document.getElementById('lowercase').checked;
    const uppercase = document.getElementById('uppercase').checked;
    const numbers = document.getElementById('numbers').checked;
    const symbols = document.getElementById('symbols').checked;
    const length = parseInt(document.getElementById('length').value);
    const output = document.getElementById('output');

    // Characters sets
    const lowercaseChars = 'abcdefghijklmnopqrstuvwxyz';
    const uppercaseChars = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    const numberChars = '0123456789';
    const symbolChars = '!@#$%^&*()';

    // Validating user selection
    if (!lowercase && !uppercase && !numbers && !symbols) {
        output.innerText = 'Please select at least one option!';
        return;
    }

    if (length < 4 || isNaN(length)) {
        output.innerText = 'Password length must be at least 4.';
        return;
    }
    if (length >20 || isNaN(length)) {
        output.innerText = 'Password length cannot exceed 20.';
        return;
    }

    // Building the pool of characters
    let characterPool = '';
    if (lowercase) characterPool += lowercaseChars;
    if (uppercase) characterPool += uppercaseChars;
    if (numbers) characterPool += numberChars;
    if (symbols) characterPool += symbolChars;

    // Generating the password
    let password = '';
    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * characterPool.length);
        password += characterPool[randomIndex];
    }

    // Displaying the result
    output.innerHTML = `Your password is: ${password}`;
}
