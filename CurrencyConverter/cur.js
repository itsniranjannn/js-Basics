// Base URL of the currency exchange API ---- got this from Github 
const BASE_URL = "https://2024-03-06.currency-api.pages.dev/v1/currencies";

const dropdowns = document.querySelectorAll(".dropdown select");
const btn = document.querySelector("form button");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");
const msg = document.querySelector(".message p");

for (let select of dropdowns) {  // drop down ma loop lagako
 
  for (let currCode in countryList) {   //extracted currency code from codes.js file 
    let option = document.createElement("option"); // Create an <option> element
    option.innerText = currCode; // Display currency code 
    option.value = currCode;     // Set value attribute 

    // Set default selected value: "USD" for 'from' and "NPR" for 'to'
    if (select.name === "from" && currCode === "USD") option.selected = true;
    if (select.name === "to" && currCode === "NPR") option.selected = true;

    select.appendChild(option); // Add option to the dropdown
  }

 
  select.addEventListener("change", (e) => { // When user changes select option then flag is change next to the dropdown
    updateFlag(e.target);
  });
}


const updateFlag = (element) => {// Function to update the flag image next to the selected currency
  const currCode = element.value; // Get selected currency code
  const countryCode = countryList[currCode]; // Get related country code 

  const img = element.parentElement.querySelector("img"); 
  
  img.src = `https://flagsapi.com/${countryCode}/flat/64.png`;   
};

const updateExchangeRate = async () => { // Function to fetch the exchange rate and update the message
  const amountInput = document.querySelector("#amount"); // input field with amount
  let amt = parseFloat(amountInput.value); // Convert input to number using parse

  // If amount is invalid or less than or equal to 0, default to 1
  if (isNaN(amt) || amt <= 0) {
    amt = 1;
    amountInput.value = "1";
  }

  // Convert selected currencies to lowercase for the API URL
  const from = fromCurr.value.toLowerCase();
  const to = toCurr.value.toLowerCase();

 
  const url = `${BASE_URL}/${from}.json`;  // link banako mathi ko api url bata
  console.log("Fetching:", url); // chcecking te status 200 ayo ki nai
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
