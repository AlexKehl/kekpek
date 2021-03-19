const axios = require("axios");

const urlRequestAddress =
  "https://steamcommunity.com/inventory/76561198398055814/570/2";
async function getInventoryData() {
  const urlResponse = await axios.get(urlRequestAddress);
  const urlResponseData = urlResponse.data;
  const AssDesArr = [];
  const totalInventoryCount = urlResponseData.total_inventory_count;

  for (const asset of urlResponseData.assets) {
    const obj = {
      assetid: asset.assetid,
      marketHashName: findMarketHashName(
        asset.classid,
        urlResponseData.descriptions
      ),
    };
    AssDesArr.push(obj);
  }
  console.log(AssDesArr);
  return AssDesArr;
}
function findMarketHashName(classid, descriptions) {
  const foundDescription = descriptions.find(function (oneDescription) {
    return classid === oneDescription.classid;
  });
  const marketHashName = foundDescription.market_hash_name;
  return marketHashName;
}

getInventoryData();
