const fetch = require('node-fetch');

fetch(`http://www.mapquestapi.com/geocoding/v1/address?key=3pGwJokbqy2JgZZMlYOMfjHpYtMWxqyk&location=1301%20lombard%20street%20philadelphia`)
.then(response => response.json())
.then(data => console.log(data));