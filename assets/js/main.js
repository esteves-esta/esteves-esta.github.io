// YEARS WORKING
const current_year = new Date().getFullYear();
document.querySelector("#anos-trabalho").innerHTML = current_year - 2019;

// TIME FUNCTION
function getTime() {
  var options = { hour: "2-digit", minute: "2-digit" };
  const currentHour = new Date().toLocaleTimeString("pt-BR", options);

  const dayPeriod = new Date().toLocaleTimeString();
  let greeting = "Bom dia";
  const split = dayPeriod.split(":");
  if (dayPeriod.includes("PM")) {
    if (split[0] < 6) greeting = "Boa tarde";
    else greeting = "Boa noite";
  } else {
    if (split[0] < 5) greeting = "Boa noite";
  }

  document.querySelector("#time-now").innerHTML = currentHour;
  document.querySelector("#greeting").innerHTML = greeting;
}
getTime();

window.setInterval(() => {
  getTime();
}, 3 * 10000);
