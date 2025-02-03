// YEARS WORKING
const current_year = new Date().getFullYear();
const workYearHTML = document.querySelector("#anos-trabalho");
if (workYearHTML) workYearHTML.innerHTML = current_year - 2019;

//  current year
const yearHTML = document.querySelector("#year");
if (yearHTML) yearHTML.innerHTML = current_year;

// TIME FUNCTION
function getTime() {
  var options = { hour: "2-digit", minute: "2-digit" };
  const currentHour = new Date().toLocaleTimeString("pt-BR", options);

  const dayPeriod = new Date().toLocaleTimeString("pt-BR", {
    hour12: true,
  });
  let greeting = "Bom dia";
  const split = dayPeriod.split(":");
  if (dayPeriod.includes("PM")) {
    if (split[0] < 6) greeting = "Boa tarde";
    else greeting = "Boa noite";
  } else {
    if (split[0] < 5) greeting = "Boa noite";
  }

  const timeHtml = document.querySelector("#time-now");
  const greetingHtml = document.querySelector("#greeting");
  if (timeHtml) timeHtml.innerHTML = currentHour;
  if (greetingHtml) greetingHtml.innerHTML = greeting;
}

getTime();

window.setInterval(() => {
  getTime();
}, 3 * 10000);


