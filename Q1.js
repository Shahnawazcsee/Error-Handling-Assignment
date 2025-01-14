// Function to simulate user login with error handling
function login(username, password) {
    if (!username) {
        throw new Error("Username is required.");
    }
    if (!password) {
        throw new Error("Password is required.");
    }

    // Simulated valid credentials
    const validCredentials = {
        username: "user123",
        password: "pass123"
    };

    if (username !== validCredentials.username || password !== validCredentials.password) {
        throw new Error("Invalid username or password.");
    }

    console.log("Login successful!");
}

// Function to simulate adding a product to the cart
function addToCart(cart, productName, productPrice, quantity) {
    if (!productName) {
        throw new Error("Product name is required.");
    }
    if (typeof productPrice !== 'number' || productPrice <= 0) {
        throw new Error("Invalid product price.");
    }
    if (!Number.isInteger(quantity) || quantity <= 0) {
        throw new Error("Invalid quantity.");
    }

    const product = {
        productName,
        productPrice,
        quantity
    };

    cart.push(product);
    console.log(`Added ${quantity} of "${productName}" to the cart.`);
}

// Function to simulate the checkout process
function checkout(cart) {
    if (cart.length === 0) {
        throw new Error("Cart is empty. Add items before checkout.");
    }

    // Simulate checkout process
    let totalAmount = cart.reduce((total, item) => total + (item.productPrice * item.quantity), 0);
    console.log(`Checkout successful! Total amount: ${totalAmount.toFixed(2)}`);
}

// Example usage:
const shoppingCart = [];

try {
    // User login simulation
    login("user123", "pass123"); // Successful login
    // login("", "pass123"); // Uncomment to test error: Username is required.
    // login("user123", ""); // Uncomment to test error: Password is required.
    // login("wrongUser", "pass123"); // Uncomment to test error: Invalid username or password.

    // Adding products to the cart
    addToCart(shoppingCart, "Laptop", 1000, 1); // Added 1 of "Laptop" to the cart.
    addToCart(shoppingCart, "Phone", 500, 2); // Added 2 of "Phone" to the cart.
    // addToCart(shoppingCart, "", 500, 2); // Uncomment to test error: Product name is required.
    // addToCart(shoppingCart, "Tablet", -100, 1); // Uncomment to test error: Invalid product price.
    // addToCart(shoppingCart, "Tablet", 300, 0); // Uncomment to test error: Invalid quantity.

    // Checkout simulation
    checkout(shoppingCart); // Checkout successful! Total amount: $2000.00
    // checkout([]); // Uncomment to test error: Cart is empty. Add items before checkout.
} catch (error) {
    console.error(`Error: ${error.message}`);
}
