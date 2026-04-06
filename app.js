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

  // Calculate CO2 savings between best and worst
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