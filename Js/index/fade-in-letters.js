function animateTitle() {

    const textElement = document.getElementById('staggeredText');
    const text = textElement.textContent.trim();
    // console.log("This is the text content", text.trim())
    // Clear existing content
    textElement.textContent = "";

    // Wrap each letter in a span
    for (let i = 0; i < text.length; i++) {
        const letter = text.charAt(i);
        // console.log(letter);
        if (letter === " ") {
            // It's a space
            // console.log('space')
            const span = document.createElement('span');
            span.textContent = " "; // Add a space within the span
            textElement.appendChild(span);
        } else {
            // It's a regular character
            // ... (Your existing code for regular characters) 
            const span = document.createElement('span');
            span.style.opacity = "0"; // Initially hide the letters
            span.textContent = letter;
            textElement.appendChild(span);
        }
    }

    // Now, animate the spans
    const spans = textElement.querySelectorAll('span');
    let delay = 0;

    spans.forEach(span => {
        setTimeout(() => {
            span.style.opacity = "1";
            span.style.transform = "translateY(0)"; // Animate back to normal position
        }, delay);
        delay += 100;
    });

}
