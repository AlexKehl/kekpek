const dataitem = require("./dataneutralbnlabal.json");
const date = Date.now();
const MILIS_IN_SECOND = 1000;
const SECONDS_IN_MINUTE = 60;
const MINUTES_IN_HOUR = 60;
const HOURS_IN_DAY = 24;
const DAYS_IN_WEEK = 7;
const MILIS_IN_WEEK =
  MILIS_IN_SECOND *
  SECONDS_IN_MINUTE *
  MINUTES_IN_HOUR *
  HOURS_IN_DAY *
  DAYS_IN_WEEK;
const oneWeekAgoMilis = date - MILIS_IN_WEEK;
const dataItemLastWeek = [];
const otfiltroval = dataitem.prices.filter(isDataOfLastWeek);
console.log(otfiltroval);
/* for (const date of dataitem.prices) {
  const result = isDataOfLastWeek(date);
  if (result === true) {
    dataItemLastWeek.push(date);
    // dataitem.prices.push(arr);
  }
  //  dataItemLastWeek.push(arr);
}*/
function isDataOfLastWeek(oneDataItem) {
  const todayMilis = date;
  const pastMilis = new Date(oneDataItem[0]).valueOf();
  return todayMilis - pastMilis < MILIS_IN_WEEK;
}

console.log(dataItemLastWeek);
/*const oneDataItem = ["Mar 18 2021 01: +0", 26.461, "11"];
console.log(isDataOfLastWeek(oneDataItem));
 const testDate = "Mar 30 2014 01: +0";
const newDate = new Date(testDate).valueOf();
console.log(newDate);
*/
