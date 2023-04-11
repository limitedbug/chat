const express = require('express')
const app = express();
const port = 3000;
// Middleware Import
const bodyparser = require("body-parser");
app.use(bodyparser.json());
app.use(bodyparser.urlencoded({ extended: false }));


app.use("/messages", require('./routes/messages.routes'));
app.use("/users", require('./routes/users.routes'));
app.use("/channels", require('./routes/channels.routes'));


app.listen(port, () => {
  console.log(`listen ${port}`);
});