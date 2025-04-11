function navigateToPage() {
    let select = document.getElementById("pageSelect");
    let url = select.value;
    if (url) {
        // window.location.href = url; open in the same tab
        window.open(url, "_blank");
    }
}

function toggleMenu() {
    document.getElementById("navMenu").classList.toggle("show");
}

function openSignUp(){
    window.open("./html files/signup.html");
}

function signIn(){
    window.open("./html files/signin.html");
}


async function searchProductByName() {
    const name = document.getElementById("searchInput").value.trim();
  
    if (!name) {
      alert("Please enter a product name.");
      return;
    }
  
    try {
      const response = await fetch(`http://localhost:8080/api/v1/oils/getbyname?name=${encodeURIComponent(name)}`);
  
      if (!response.ok) {
        throw new Error("Product not found");
      }
  
      const oil = await response.json();
  
      // Show product details in alert box
      alert(
        `Product Found:\n\n` +
        `ID: ${oil.id}\n` +
        `Name: ${oil.productName}\n` +
        `Weight: ${oil.productWeight}\n` +
        `Price: ₹${oil.productPrice}\n` +
        `Quantity: ${oil.productQuantity}\n` +
        `Expiry Date: ${oil.expiryDate}`
      );
    } catch (error) {
      console.error("Error fetching product by name:", error);
      alert("Product not found or error occurred.");
    }
  }
  