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
function isDataOfLastWeek(oneDataItem) {
  const todayMilis = date;
  const pastMilis = new Date(oneDataItem[0]).valueOf();
  return todayMilis - pastMilis < MILIS_IN_WEEK;
}

const lastWeekPrices = dataitem.prices.filter(isDataOfLastWeek);
const price = 0;
const avgPriceArrSum = lastWeekPrices
  .map((lastWeekPrice) => lastWeekPrice[1] * parseInt(lastWeekPrice[2]))
  .reduce(function (acc, currentvalue) {
    return acc + currentvalue;
  });
const lastWeekPricesCount = lastWeekPrices.reduce(function (acc, currentvalue) {
  return acc + parseInt(currentvalue[2]);
}, 0);
const avgPriceTrue = avgPriceArrSum / lastWeekPricesCount;
console.log(avgPriceTrue);
