// Base URL of the currency exchange API you're using
const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

// Get all <select> elements inside elements with class "dropdown"
const dropdowns = document.querySelectorAll(".dropdown select");

// Get the button inside the form (used for triggering conversion)
const btn = document.querySelector("form button");

// Get the "from" currency dropdown
const fromCurr = document.querySelector(".from select");

// Get the "to" currency dropdown
const toCurr = document.querySelector(".to select");

// Get the paragraph inside the element with class "message" to show conversion result
const msg = document.querySelector(".message p");

// Loop through each dropdown (both "from" and "to")
for (let select of dropdowns) {
  // Loop through each currency code in the countryList object (e.g., USD, NPR, INR, etc.)
  for (let currCode in countryList) {
    let option = document.createElement("option"); // Create an <option> element
    option.innerText = currCode; // Display currency code (e.g., "USD")
    option.value = currCode;     // Set value attribute (e.g., "USD")

    // Set default selected value: "USD" for 'from' and "NPR" for 'to'
    if (select.name === "from" && currCode === "USD") option.selected = true;
    if (select.name === "to" && currCode === "NPR") option.selected = true;

    select.appendChild(option); // Add option to the dropdown
  }

  // When user changes selection, update the flag next to the dropdown
  select.addEventListener("change", (e) => {
    updateFlag(e.target);
  });
}

// Function to update the flag image next to the selected currency
const updateFlag = (element) => {
  const currCode = element.value; // Get selected currency code (e.g., "USD")
  const countryCode = countryList[currCode]; // Get related country code (e.g., "US")

  const img = element.parentElement.querySelector("img"); // Get <img> tag inside the same container
  // Set flag image source using flagsapi.com
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;
};

// Function to fetch the exchange rate and update the message
const updateExchangeRate = async () => {
  const amountInput = document.querySelector("#amount"); // Get input field where user types amount
  let amt = parseFloat(amountInput.value); // Convert input to number

  // If amount is invalid or less than or equal to 0, default to 1
  if (isNaN(amt) || amt <= 0) {
    amt = 1;
    amountInput.value = "1";
  }

  // Convert selected currencies to lowercase for the API URL
  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();

  // Construct the API endpoint (e.g., https://.../usd.json)
  const url = `${BASE_URL}/${from}.json`;
  console.log("Fetching:", url); // Log the URL (for debugging)

  try {
    const res = await fetch(url); // Fetch data from the API
    const data = await res.json(); // Parse JSON response

    const rate = data[from][to]; // Get exchange rate from the response

    if (!rate) throw new Error("Invalid conversion"); // If rate is missing, throw error

    // Calculate the converted amount and round to 2 decimal places
    const finalAmount = (amt * rate).toFixed(2);

    // Display result to user
    msg.innerText = `${amt} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  } catch (err) {
    // If there's an error (e.g., API failure), log it and show error message
    console.error(err);
    msg.innerText = "Unable to fetch exchange rate. Try again later.";
  }
};

// When button is clicked, prevent form from submitting and call updateExchangeRate()
btn.addEventListener("click", (e) => {
  e.preventDefault();
  updateExchangeRate();
});

// When page loads: fetch exchange rate and update flag images for both dropdowns
window.addEventListener("load", () => {
  updateExchangeRate();     // Get initial conversion rate
  updateFlag(fromCurr);     // Set initial flag for 'from' currency
  updateFlag(toCurr);       // Set initial flag for 'to' currency
});
