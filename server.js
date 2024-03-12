const express = require("express");
const app = express();
const port = 3001;

app.get("/health", (req, res) => {
  res.send("Im working");
});

app.get("/getData", (req, res) => {
  axios
    .get("https://retoolapi.dev/UOfI6Q/data")
    .then((response) => {
      //We geting data from exaple api provided by retool
      //After 30 days its expired then You could change api url to any other api
      // https://retool.com/api-generator?ref=retool.com&_keyword=&adgroupid=&utm_source=google&utm_medium=display&utm_campaign=20576962772&utm_term=&utm_content=&hsa_acc=7420316652&hsa_cam=20576962772&hsa_grp=&hsa_ad=&hsa_src=x&hsa_tgt=&hsa_kw=&hsa_mt=&hsa_net=adwords&hsa_ver=3&gad_source=1&gclid=Cj0KCQjw-r-vBhC-ARIsAGgUO2BtafRSQe8FYqUZYLlRaTUTVbD_8QGStZSoHUiF9gAj_uL17r3mhokaAuOkEALw_wcB
      res.send(response.data);
    })
    .catch((error) => {
      res.send(error);
    });
});

https: app.listen(port, () => {
  console.log(`Example app listening on port ${port}`);
});
