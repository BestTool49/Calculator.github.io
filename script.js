// Function to calculate dating age range
function calculateDatingRange() {
    const name = document.getElementById("name").value;
    const partnerName = document.getElementById("partnerName").value;
    const age = document.getElementById("age").value;
    const partnerAge = document.getElementById("partnerAge").value;
    const resultDiv = document.getElementById("result");
    const message = document.getElementById("message");
    const range = document.getElementById("range");

    // Ensure both ages are above 14
    if (age < 14 || partnerAge < 14) {
        alert("Please enter ages of 14 or older.");
        return;
    }

    // Calculate the dating age range for both
    const minAge = Math.floor(age / 2 + 7);
    const maxAge = (age - 7) * 2;
    const isWithinRange = partnerAge >= minAge && partnerAge <= maxAge;

    // Display the result
    range.textContent = `${name}, your ideal dating age range is between ${minAge} and ${maxAge} years old.`;

    // Show love message if within range
    if (isWithinRange) {
        const loveMessages = [
            `Congrats ${name} and ${partnerName}, you're a perfect match for a happy love journey!`,
            `${name}, you and ${partnerName} are a great match! Wishing you both love and happiness.`,
            `Love is in the air, ${name} and ${partnerName}! Enjoy your beautiful journey together!`
        ];
        const randomMessage = loveMessages[Math.floor(Math.random() * loveMessages.length)];
        message.textContent = randomMessage;
        speak(randomMessage);
        showShareButtons(name, partnerName, randomMessage);
    } else {
        message.textContent = `Sorry ${name}, you and ${partnerName} might not be the best match according to the rule.`;
        document.getElementById("share-buttons").innerHTML = '';
    }

    resultDiv.style.display = "block";
}

// Function to use voice assistant
function speak(text) {
    const speech = new SpeechSynthesisUtterance();
    speech.text = text;
    speech.volume = 1;
    speech.rate = 1;
    speech.pitch = 1;
    window.speechSynthesis.speak(speech);
}

// Function to show social share buttons
function showShareButtons(name, partnerName, message) {
    const shareButtons = document.getElementById("share-buttons");
    shareButtons.innerHTML = `
        <a href="https://wa.me/?text=${encodeURIComponent(message)}" target="_blank">Share on WhatsApp</a>
        <a href="https://www.facebook.com/sharer/sharer.php?u=https://example.com&quote=${encodeURIComponent(message)}" target="_blank">Share on Facebook</a>
        <a href="https://telegram.me/share/url?url=https://example.com&text=${encodeURIComponent(message)}" target="_blank">Share on Telegram</a>
    `;
}

// Function to clear the result and reset the form
function clearMessage() {
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("partnerName").value = '';
    document.getElementById("partnerAge").value = '';
    document.getElementById("message").textContent = '';
    document.getElementById("range").textContent = '';
    document.getElementById("share-buttons").innerHTML = '';
    document.getElementById("result").style.display = "none";
}
// Function to clear the result and reset the form
function clearMessage() {
    document.getElementById("name").value = '';
    document.getElementById("age").value = '';
    document.getElementById("partnerName").value = '';
    document.getElementById("partnerAge").value = '';
    document.getElementById("message").textContent = '';
    document.getElementById("range").textContent = '';
    document.getElementById("share-buttons").innerHTML = '';
    document.getElementById("result").style.display = "none";
}
