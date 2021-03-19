const axios = require("axios");
async function gethtmlData() {
  const html = await axios.get("https://store.steampowered.com/");
  const regex = /\w+/gi;
  console.log(html.data.replace(regex, "kek")); //i;
}
gethtmlData();
