import { Icon } from "leaflet";

const locationIcon = new Icon({
  iconUrl: "https://assets.mapquestapi.com/icon/v2/marker-md.png",
  iconSize: 25,
});

const resultIcon = new Icon({
  iconUrl: "https://assets.mapquestapi.com/icon/v2/marker-sm-F8E71C-417505.png",
  iconSize: 25,
});

const middleIcon = new Icon({
  iconUrl: 'https://assets.mapquestapi.com/icon/v2/circle-lg-C4E39C-5BC5FF-M.png',
  iconSize: 35,
})

export { locationIcon, resultIcon, middleIcon };
