const axios = require("axios");
const { iskek } = require("./iskek");

const config = [
  "https://yandex.ru/",
  "https://www.gametracker.com/server_info/server.dayzeuropa.com:2302/",
  "https://dayzeuropa.com/playerProfile.php?id=76561199078409623&p=quarter",
];

async function requestSending(request) {
  const response = await axios.get(request);
  return response.data;
}
const promises = config.map(requestSending);
Promise.all(promises).then(function (response) {
  const isKekArr = response.map(function (oneResponse) {});
  console.log(isKekArr);
});

/*Promise.all([
  requestSending(REQUEST_YANDEX),
  requestSending(REQUEST_DAYZ_EUROPA),
  requestSending(REQUEST_GAME_TRACKER),
]).then(function (response) {
  const YandexResult = iskek.iskek(response[0]);
  const DayzResult = iskek.iskek(response[1]);
  const GameResult = iskek.iskek(response[2]);
  const allresult = YandexResult || DayzResult || GameResult;
  console.log(allresult);
});
// requestSending(REQUEST_YANDEX); */
