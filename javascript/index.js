function updateTime() {

  // lagos Time
  let lagosEl = document.querySelector("#lagos");
  let lagosDate = document.querySelector(".date");
  let lagosTime = document.querySelector(".time");

  let time = moment();

  lagosDate.innerHTML = time.format("MMMM Do YYYY");
  lagosTime.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");

  lagosDate.innerHTML = time.format("MMMM Do YYYY");
  lagosTime.innerHTML = time.format("h:mm:ss [<small>]A[</small>]");
  lagosEl.style.backgroundColor = "#027547";
  lagosEl.style.color = "#fff";
  lagosEl.style.paddingLeft = "20px";
  lagosEl.style.paddingRight = "20px";
  lagosEl.style.borderRadius = "10px";

  // Athens Time
  let athenElement = document.querySelector("#athen");
  let athenDateElement = athenElement.querySelector(".date");
  let athenTimeElement = athenElement.querySelector(".time");
  let athensTime = moment().tz("Europe/Athens");
  athenDateElement.innerHTML = athensTime.format("MMMM Do YYYY");
  athenTimeElement.innerHTML = athensTime.format("h:mm:ss [<small>]A[</small>]");
  athenElement.style.backgroundColor = "#181885";
  athenElement.style.color = "#fff";
  athenElement.style.paddingLeft = "20px";
  athenElement.style.paddingRight = "20px";
  athenElement.style.borderRadius = "10px";

  // Paris Time
  let tokyoEl = document.querySelector("#tokyo");
  let tokyoDateEl = tokyoEl.querySelector(".date");
  let tokyoTimeEl = tokyoEl.querySelector(".time");
  let tokyoTime = moment().tz("Asia/Tokyo");

  tokyoDateEl.innerHTML = tokyoTime.format("MMMM	Do YYYY");
  tokyoTimeEl.innerHTML = tokyoTime.format("h:mm:ss [<small>]A[</small>]");
  tokyoEl.style.backgroundColor = "#c5264b";
  tokyoEl.style.color = "#fff";
  tokyoEl.style.paddingLeft = "20px";
  tokyoEl.style.paddingRight = "20px";
  tokyoEl.style.borderRadius = "10px";
}

updateTime();
// Update every second
setInterval(updateTime, 1000);
