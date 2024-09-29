function processPayment(amount, cardNumber, expirationDate) {
    // Check if the payment amount is a positive number
    if (typeof amount !== 'number' || amount <= 0) {
        throw new Error("Invalid payment amount.");
    }

    // Check if the card number is provided and is a valid credit card number
    if (!cardNumber || !isValidCardNumber(cardNumber)) {
        throw new Error("Invalid card number.");
    }

    // Check if the expiration date is provided and is not in the past
    if (!expirationDate || isExpired(expirationDate)) {
        throw new Error("Invalid expiration date.");
    }

    // If all validations pass, process the payment
    console.log(`Payment of ${amount.toFixed(2)} processed successfully.`);
}

// Function to validate credit card number (simple check for demonstration)
function isValidCardNumber(cardNumber) {
    // Basic validation: must be a string of digits only and length between 13 and 19
    const cardNumberRegex = /^\d{13,19}$/;
    return cardNumberRegex.test(cardNumber);
}

// Function to check if the expiration date is in the past
function isExpired(expirationDate) {
    const today = new Date();
    const expDate = new Date(expirationDate);
    return expDate < today;
}

// Example usage
try {
    // Successful payment simulation
    processPayment(100, "1234567812345678", "2025-12-31"); // Payment processed successfully
    // processPayment(-50, "1234567812345678", "2025-12-31"); // Uncomment to test error: Invalid payment amount.
    // processPayment(100, "", "2025-12-31"); // Uncomment to test error: Invalid card number.
    // processPayment(100, "1234567812345678", "2020-01-01"); // Uncomment to test error: Invalid expiration date.
} catch (error) {
    console.error(`Error: ${error.message}`);
}
