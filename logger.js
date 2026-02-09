const EventEmitter = require("events"); //event emmiter class

var url = "https://example.com/api/logs";

class Logger extends EventEmitter {
  log(message) {
    console.log(message);

    this.emit("messageLogged", { id: 1, url: "http://" }); //raise event
  }
}

module.exports = Logger;
