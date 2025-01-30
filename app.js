const date = new Date();
const localeString = date.toLocaleString()
// console.log('ISOString', localeString)
const dateArray = localeString.split(',');
// console.log('dateArray', dateArray);

const today =  dateArray[0];
// console.log('fecha', today);
const showDate = document.getElementById('today');
showDate.innerHTML = today;

const now = dateArray[1];
// console.log('hora', now);
const showTime = document.getElementById('now');
showTime.innerHTML = now;

const setDate = () => {
  const lastCycle = document.getElementById('lastCycle').value;
  console.log('lastCycle --->', lastCycle);
  const lastStartDate = document.getElementById('lastDate').value;
  console.log('lastStartDate --->', lastStartDate);

}

const showData = document.getElementById('showData');