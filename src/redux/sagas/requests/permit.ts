import axios from "axios";

export function requestGetPermit() {
  return axios.request({
    method: "get",
    url: "https://data.cityofchicago.org/resource/ydr8-5enu.json"
  });
}
