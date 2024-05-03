const https = require('https');

const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
  });
  
  readline.question('Please type an ip adress: ', name => {
    https.get("https://ipinfo.io/"+ name +"/json", res => {
    let data = [];
    console.log('Status code: ',res.statusCode);
    res.on('data', chunk => {
        data.push(chunk);
    });
    res.on('end', () => {
        let resData = JSON.parse(Buffer.concat(data).toString());
        console.log(resData);
    });
    });
    readline.close();
  });