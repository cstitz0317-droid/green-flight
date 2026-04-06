// Airport code to full name lookup
const airports = {
  "JFK": "John F. Kennedy International — New York",
  "LHR": "Heathrow Airport — London",
  "LAX": "Los Angeles International — Los Angeles",
  "CDG": "Charles de Gaulle Airport — Paris",
  "ORD": "O'Hare International — Chicago",
  "FRA": "Frankfurt Airport — Frankfurt",
  "SFO": "San Francisco International — San Francisco",
  "NRT": "Narita International — Tokyo",
  "DFW": "Dallas Fort Worth International — Dallas",
  "AMS": "Amsterdam Airport Schiphol — Amsterdam",
  "DXB": "Dubai International — Dubai",
  "SIN": "Changi Airport — Singapore",
  "MIA": "Miami International — Miami",
  "MAD": "Adolfo Suárez Madrid–Barajas — Madrid",
  "BCN": "Barcelona El Prat — Barcelona",
  "BOS": "Logan International — Boston",
  "ATL": "Hartsfield-Jackson — Atlanta",
  "SEA": "Seattle-Tacoma International — Seattle",
  "YYZ": "Toronto Pearson International — Toronto",
  "MEX": "Benito Juárez International — Mexico City",
  "GRU": "São Paulo/Guarulhos International — São Paulo",
  "SYD": "Sydney Kingsford Smith — Sydney",
  "HKG": "Hong Kong International — Hong Kong",
  "ICN": "Incheon International — Seoul",
  "DEL": "Indira Gandhi International — New Delhi",
  "DUS": "Düsseldorf Airport — Düsseldorf",
  "MUC": "Munich Airport — Munich",
  "ZRH": "Zurich Airport — Zurich",
  "VIE": "Vienna International Airport — Vienna",
  "CPH": "Copenhagen Airport — Copenhagen",
  "ARN": "Stockholm Arlanda Airport — Stockholm",
  "OSL": "Oslo Gardermoen Airport — Oslo",
  "HEL": "Helsinki-Vantaa Airport — Helsinki",
  "LIS": "Humberto Delgado Airport — Lisbon",
  "FCO": "Leonardo da Vinci International — Rome",
  "MXP": "Milan Malpensa Airport — Milan",
  "ATH": "Athens International Airport — Athens",
  "IST": "Istanbul Airport — Istanbul",
  "CAI": "Cairo International Airport — Cairo",
  "JNB": "OR Tambo International — Johannesburg",
  "NBO": "Jomo Kenyatta International — Nairobi",
  "BOM": "Chhatrapati Shivaji Maharaj — Mumbai",
  "BKK": "Suvarnabhumi Airport — Bangkok",
  "KUL": "Kuala Lumpur International — Kuala Lumpur",
  "PEK": "Beijing Capital International — Beijing",
  "PVG": "Shanghai Pudong International — Shanghai",
  "SVO": "Sheremetyevo International — Moscow",
  "YVR": "Vancouver International — Vancouver",
  "MEL": "Melbourne Airport — Melbourne",
  "AKL": "Auckland Airport — Auckland",
};

// Flight emissions data
const flightData = {
  "JFK-LHR": [
    { airline: "British Airways", aircraft: "Boeing 777-200", age: "Older", co2: 520, rating: "worst" },
    { airline: "Virgin Atlantic", aircraft: "Airbus A350-1000", age: "New", co2: 380, rating: "best" },
    { airline: "American Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 410, rating: "average" },
  ],
  "LAX-CDG": [
    { airline: "Air France", aircraft: "Boeing 777-300ER", age: "Older", co2: 540, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 400, rating: "average" },
    { airline: "La Compagnie", aircraft: "Airbus A321neo", age: "New", co2: 310, rating: "best" },
  ],
  "ORD-FRA": [
    { airline: "Lufthansa", aircraft: "Airbus A340-300", age: "Older", co2: 560, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 767-300ER", age: "Older", co2: 490, rating: "average" },
    { airline: "Lufthansa", aircraft: "Airbus A350-900", age: "New", co2: 370, rating: "best" },
  ],
  "SFO-NRT": [
    { airline: "Japan Airlines", aircraft: "Boeing 777-300ER", age: "Older", co2: 610, rating: "worst" },
    { airline: "ANA", aircraft: "Boeing 787-9", age: "Modern", co2: 430, rating: "average" },
    { airline: "Japan Airlines", aircraft: "Airbus A350-900", age: "New", co2: 390, rating: "best" },
  ],
  "DFW-LHR": [
    { airline: "American Airlines", aircraft: "Boeing 777-200ER", age: "Older", co2: 530, rating: "worst" },
    { airline: "British Airways", aircraft: "Boeing 787-9", age: "Modern", co2: 420, rating: "average" },
    { airline: "Norse Atlantic", aircraft: "Boeing 787-9", age: "New", co2: 395, rating: "best" },
  ],
  "JFK-CDG": [
    { airline: "Air France", aircraft: "Boeing 777-200ER", age: "Older", co2: 510, rating: "worst" },
    { airline: "Delta Airlines", aircraft: "Airbus A330-900neo", age: "Modern", co2: 420, rating: "average" },
    { airline: "Air France", aircraft: "Airbus A350-900", age: "New", co2: 375, rating: "best" },
  ],
  "LAX-NRT": [
    { airline: "Japan Airlines", aircraft: "Boeing 777-300ER", age: "Older", co2: 590, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 440, rating: "average" },
    { airline: "ANA", aircraft: "Boeing 787-10", age: "New", co2: 400, rating: "best" },
  ],
  "BOS-LHR": [
    { airline: "British Airways", aircraft: "Boeing 777-200", age: "Older", co2: 490, rating: "worst" },
    { airline: "American Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 400, rating: "average" },
    { airline: "Virgin Atlantic", aircraft: "Airbus A330-900neo", age: "New", co2: 360, rating: "best" },
  ],
  "JFK-DXB": [
    { airline: "Emirates", aircraft: "Airbus A380-800", age: "Older", co2: 670, rating: "worst" },
    { airline: "Emirates", aircraft: "Boeing 777-300ER", age: "Modern", co2: 570, rating: "average" },
    { airline: "JetBlue + Emirates", aircraft: "Airbus A321neo (connect)", age: "New", co2: 490, rating: "best" },
  ],
  "LAX-SYD": [
    { airline: "Qantas", aircraft: "Boeing 747-400", age: "Older", co2: 780, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 560, rating: "average" },
    { airline: "Qantas", aircraft: "Airbus A350-1000", age: "New", co2: 480, rating: "best" },
  ],
  "ORD-LHR": [
    { airline: "British Airways", aircraft: "Boeing 747-400", age: "Older", co2: 580, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 767-300ER", age: "Older", co2: 500, rating: "average" },
    { airline: "American Airlines", aircraft: "Boeing 787-9", age: "New", co2: 410, rating: "best" },
  ],
  "SFO-LHR": [
    { airline: "British Airways", aircraft: "Boeing 747-400", age: "Older", co2: 600, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 450, rating: "average" },
    { airline: "Virgin Atlantic", aircraft: "Airbus A350-1000", age: "New", co2: 400, rating: "best" },
  ],
  "MIA-MAD": [
    { airline: "Iberia", aircraft: "Airbus A340-600", age: "Older", co2: 550, rating: "worst" },
    { airline: "American Airlines", aircraft: "Boeing 777-200ER", age: "Modern", co2: 470, rating: "average" },
    { airline: "Iberia", aircraft: "Airbus A350-900", age: "New", co2: 380, rating: "best" },
  ],
  "JFK-SIN": [
    { airline: "Singapore Airlines", aircraft: "Airbus A380-800", age: "Older", co2: 820, rating: "worst" },
    { airline: "Singapore Airlines", aircraft: "Boeing 777-300ER", age: "Modern", co2: 690, rating: "average" },
    { airline: "Singapore Airlines", aircraft: "Airbus A350-900ULR", age: "New", co2: 580, rating: "best" },
  ],
  "LAX-DEL": [
    { airline: "Air India", aircraft: "Boeing 777-300ER", age: "Older", co2: 720, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 590, rating: "average" },
    { airline: "Air India", aircraft: "Airbus A350-900", age: "New", co2: 510, rating: "best" },
  ],
  "JFK-FRA": [
    { airline: "Lufthansa", aircraft: "Airbus A340-600", age: "Older", co2: 500, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 767-400ER", age: "Modern", co2: 430, rating: "average" },
    { airline: "Lufthansa", aircraft: "Airbus A350-900", age: "New", co2: 360, rating: "best" },
  ],
  "LAX-ICN": [
    { airline: "Korean Air", aircraft: "Boeing 747-400", age: "Older", co2: 620, rating: "worst" },
    { airline: "Asiana Airlines", aircraft: "Boeing 777-200ER", age: "Modern", co2: 510, rating: "average" },
    { airline: "Korean Air", aircraft: "Airbus A380-800", age: "New", co2: 460, rating: "best" },
  ],
  "JFK-GRU": [
    { airline: "LATAM Airlines", aircraft: "Boeing 767-300ER", age: "Older", co2: 580, rating: "worst" },
    { airline: "American Airlines", aircraft: "Boeing 777-200ER", age: "Modern", co2: 500, rating: "average" },
    { airline: "LATAM Airlines", aircraft: "Boeing 787-9", age: "New", co2: 420, rating: "best" },
  ],
  "LHR-DXB": [
    { airline: "British Airways", aircraft: "Boeing 777-200", age: "Older", co2: 380, rating: "worst" },
    { airline: "flydubai", aircraft: "Boeing 737 MAX 8", age: "Modern", co2: 290, rating: "average" },
    { airline: "Emirates", aircraft: "Airbus A350-900", age: "New", co2: 250, rating: "best" },
  ],
  "SFO-SYD": [
    { airline: "Qantas", aircraft: "Boeing 747-400", age: "Older", co2: 810, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 600, rating: "average" },
    { airline: "Qantas", aircraft: "Airbus A350-1000", age: "New", co2: 520, rating: "best" },
  ],
  "ATL-LHR": [
    { airline: "British Airways", aircraft: "Boeing 747-400", age: "Older", co2: 560, rating: "worst" },
    { airline: "Delta Airlines", aircraft: "Airbus A330-300", age: "Modern", co2: 470, rating: "average" },
    { airline: "Delta Airlines", aircraft: "Airbus A330-900neo", age: "New", co2: 400, rating: "best" },
  ],
  "YYZ-LHR": [
    { airline: "Air Canada", aircraft: "Boeing 767-300ER", age: "Older", co2: 480, rating: "worst" },
    { airline: "British Airways", aircraft: "Boeing 777-200", age: "Modern", co2: 420, rating: "average" },
    { airline: "Air Canada", aircraft: "Boeing 787-9", age: "New", co2: 360, rating: "best" },
  ],
  "LAX-HKG": [
    { airline: "Cathay Pacific", aircraft: "Boeing 777-300ER", age: "Older", co2: 640, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 520, rating: "average" },
    { airline: "Cathay Pacific", aircraft: "Airbus A350-900", age: "New", co2: 450, rating: "best" },
  ],
  "JFK-IST": [
    { airline: "Turkish Airlines", aircraft: "Airbus A330-300", age: "Older", co2: 490, rating: "worst" },
    { airline: "Turkish Airlines", aircraft: "Boeing 777-300ER", age: "Modern", co2: 420, rating: "average" },
    { airline: "Turkish Airlines", aircraft: "Airbus A350-900", age: "New", co2: 360, rating: "best" },
  ],
  "LHR-JNB": [
    { airline: "South African Airways", aircraft: "Airbus A340-300", age: "Older", co2: 610, rating: "worst" },
    { airline: "British Airways", aircraft: "Boeing 777-200", age: "Modern", co2: 530, rating: "average" },
    { airline: "Virgin Atlantic", aircraft: "Airbus A350-1000", age: "New", co2: 450, rating: "best" },
  ],
  "SFO-AMS": [
    { airline: "KLM", aircraft: "Boeing 747-400", age: "Older", co2: 590, rating: "worst" },
    { airline: "United Airlines", aircraft: "Boeing 787-9", age: "Modern", co2: 450, rating: "average" },
    { airline: "KLM", aircraft: "Boeing 787-10", age: "New", co2: 390, rating: "best" },
  ],
};

// Grab elements from the page
const searchBtn = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("results");
const originInput = document.getElementById("origin");
const destinationInput = document.getElementById("destination");
const originLabel = document.getElementById("originLabel");
const destinationLabel = document.getElementById("destinationLabel");

// Show airport name as user types
originInput.addEventListener("input", function () {
  const code = originInput.value.trim().toUpperCase();
  originLabel.textContent = airports[code] || "";
});

destinationInput.addEventListener("input", function () {
  const code = destinationInput.value.trim().toUpperCase();
  destinationLabel.textContent = airports[code] || "";
});

// When the user clicks Search
searchBtn.addEventListener("click", function () {
  const origin = originInput.value.trim().toUpperCase();
  const destination = destinationInput.value.trim().toUpperCase();

  if (origin.length !== 3 || destination.length !== 3) {
    resultsDiv.innerHTML = `<p class="no-results">Please enter valid 3-letter airport codes (e.g. JFK, LHR)</p>`;
    return;
  }

  const key = origin + "-" + destination;
  const reverseKey = destination + "-" + origin;
  const flights = flightData[key] || flightData[reverseKey];

  if (!flights) {
    resultsDiv.innerHTML = `<p class="no-results">No data yet for ${origin} → ${destination}. More routes coming soon!</p>`;
    return;
  }

  const sorted = [...flights].sort((a, b) => a.co2 - b.co2);

  const best = sorted[0].co2;
  const worst = sorted[sorted.length - 1].co2;
  const savings = worst - best;

  let html = `<div class="savings-banner">✈️ Choosing the greenest option saves <strong>${savings} kg of CO₂</strong> on this route</div>`;

  sorted.forEach(function (flight) {
    const badgeText = flight.rating === "best" ? "🌿 Greenest Option" : flight.rating === "average" ? "⚠️ Average" : "❌ Most Polluting";
    const badgeClass = flight.rating === "best" ? "best" : flight.rating === "average" ? "average" : "worst";

    html += `
      <div class="result-card ${flight.rating}">
        <div class="card-left">
          <div class="airline">${flight.airline}</div>
          <div class="aircraft">${flight.aircraft} · ${flight.age} aircraft</div>
          <span class="badge ${badgeClass}">${badgeText}</span>
        </div>
        <div class="card-right">
          <div class="co2">${flight.co2} kg</div>
          <div class="co2-label">CO₂ per passenger</div>
        </div>
      </div>
    `;
  });

  resultsDiv.innerHTML = html;
});

// Allow Enter key to trigger search
destinationInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") searchBtn.click();
});
originInput.addEventListener("keypress", function (e) {
  if (e.key === "Enter") searchBtn.click();
});
// Corporate Savings Calculator
const calcBtn = document.getElementById("calcBtn");
const calcResults = document.getElementById("calcResults");

calcBtn.addEventListener("click", function () {
  const routeInput = document.getElementById("calcRoute").value.trim().toUpperCase();
  const flightsPerYear = parseInt(document.getElementById("calcFlights").value);
  const passengersPerFlight = parseInt(document.getElementById("calcPassengers").value);

  // Validate inputs
  if (!routeInput || isNaN(flightsPerYear) || isNaN(passengersPerFlight)) {
    calcResults.innerHTML = `<p class="no-results">Please fill in all three fields.</p>`;
    return;
  }

  const parts = routeInput.split("-");
  if (parts.length !== 2 || parts[0].length !== 3 || parts[1].length !== 3) {
    calcResults.innerHTML = `<p class="no-results">Please enter route as ORIGIN-DESTINATION (e.g. JFK-LHR)</p>`;
    return;
  }

  const key = routeInput;
  const reverseKey = parts[1] + "-" + parts[0];
  const flights = flightData[key] || flightData[reverseKey];

  if (!flights) {
    calcResults.innerHTML = `<p class="no-results">No data yet for ${routeInput}. Try JFK-LHR or LAX-CDG.</p>`;
    return;
  }

  const sorted = [...flights].sort((a, b) => a.co2 - b.co2);
  const bestFlight = sorted[0];
  const worstFlight = sorted[sorted.length - 1];

  const worstTotal = (worstFlight.co2 * flightsPerYear * passengersPerFlight) / 1000;
  const bestTotal = (bestFlight.co2 * flightsPerYear * passengersPerFlight) / 1000;
  const savedTotal = worstTotal - bestTotal;
  const savedPercent = Math.round((savedTotal / worstTotal) * 100);

  // Equivalent comparisons to make the number relatable
  const carsOffRoad = Math.round(savedTotal / 4.6);
  const treesNeeded = Math.round(savedTotal * 45);
  const homesPerYear = Math.round(savedTotal / 7.5);

  calcResults.innerHTML = `
    <div class="calc-result-card">
      <h3>📋 Your Annual Travel Carbon Report</h3>
      <p class="calc-route-label">${parts[0]} → ${parts[1]} · ${flightsPerYear} flights/year · ${passengersPerFlight} passengers</p>

      <div class="calc-comparison">
        <div class="calc-col worst-col">
          <div class="calc-col-label">❌ Current (Worst Option)</div>
          <div class="calc-airline">${worstFlight.airline}</div>
          <div class="calc-aircraft">${worstFlight.aircraft}</div>
          <div class="calc-total">${worstTotal.toFixed(1)} tonnes CO₂/year</div>
        </div>
        <div class="calc-vs">VS</div>
        <div class="calc-col best-col">
          <div class="calc-col-label">🌿 Optimized (Best Option)</div>
          <div class="calc-airline">${bestFlight.airline}</div>
          <div class="calc-aircraft">${bestFlight.aircraft}</div>
          <div class="calc-total">${bestTotal.toFixed(1)} tonnes CO₂/year</div>
        </div>
      </div>

      <div class="calc-savings-total">
        🎯 Your company could save <strong>${savedTotal.toFixed(1)} tonnes of CO₂</strong> per year — a <strong>${savedPercent}% reduction</strong>
      </div>

      <div class="calc-equivalents">
        <div class="equiv">
          <div class="equiv-number">${carsOffRoad}</div>
          <div class="equiv-label">cars taken off the road</div>
        </div>
        <div class="equiv">
          <div class="equiv-number">${treesNeeded.toLocaleString()}</div>
          <div class="equiv-label">trees needed to offset</div>
        </div>
        <div class="equiv">
          <div class="equiv-number">${homesPerYear}</div>
          <div class="equiv-label">homes powered for a year</div>
        </div>
      </div>
    </div>
  `;
});
// Waitlist Form
const waitlistBtn = document.getElementById("waitlistBtn");

waitlistBtn.addEventListener("click", async function () {
  const name = document.getElementById("wName").value.trim();
  const email = document.getElementById("wEmail").value.trim();
  const company = document.getElementById("wCompany").value.trim();
  const flights = document.getElementById("wFlights").value.trim();

  if (!name || !email || !company) {
    alert("Please fill in your name, email and company.");
    return;
  }

  waitlistBtn.textContent = "Submitting...";
  waitlistBtn.disabled = true;

  try {
    const response = await fetch("https://formspree.io/f/xvzvdede", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, company, flights }),
    });

    if (response.ok) {
      document.getElementById("waitlistForm").style.display = "none";
      document.getElementById("waitlistSuccess").style.display = "block";
    } else {
      alert("Something went wrong. Please try again.");
      waitlistBtn.textContent = "Join the Waitlist 🌿";
      waitlistBtn.disabled = false;
    }
  } catch (error) {
    alert("Something went wrong. Please try again.");
    waitlistBtn.textContent = "Join the Waitlist 🌿";
    waitlistBtn.disabled = false;
  }
});