function updateTime() {

  // Lagos Time
  let lagosEl = document.querySelector("#lagos");
  if (lagosEl) {
  let lagosDate = document.querySelector(".date");
  let lagosTime = document.querySelector(".time");

  let time = moment.tz("Africa/Lagos");

  lagosDate.innerHTML = time.format("MMMM Do YYYY");
  lagosTime.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");

  lagosDate.innerHTML = time.format("MMMM Do YYYY");
  lagosTime.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
}
  // Athens Time
  let athenElement = document.querySelector("#athen");
  if (athenElement) {
  let athenDateElement = athenElement.querySelector(".date");
  let athenTimeElement = athenElement.querySelector(".time");
  let athensTime = moment().tz("Europe/Athens");
  athenDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
  athenTimeElement.innerHTML = athensTime.format("h:mm:ss [<small>]A[</small>]");
  }

  // Tokyo Time
  let tokyoEl = document.querySelector("#tokyo");
  if (tokyoEl) {
  let tokyoDateEl = tokyoEl.querySelector(".date");
  let tokyoTimeEl = tokyoEl.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateEl.innerHTML = tokyoTime.format("MMMM	Do YYYY");
  tokyoTimeEl.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
  }
}

updateTime();
// Update every second
setInterval(updateTime, 1000);

let citySelect = document.querySelector("#city-select");
citySelect.addEventListener("change", updateCity);
function updateCity(event) {
  let cityName = event.target.value;
  let cityNameElement = cityName.replace("_", " ").split("/")[1];
  let cityTime = moment().tz(cityName);
  let cityElement = document.querySelector(".cities");
  
  cityElement.innerHTML = `
  <div class="city" id="${cityName}">
      <div>
        <h2>${cityNameElement}</h2>
        <div class="date">${cityTime.format("MMMM	Do YYYY")}</div>
      </div>
      <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
    </div>`
}
