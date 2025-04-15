const figlet = require('figlet');
const colors = require('colors');

figlet("Hello World!!", function (err, data) {
  if (err) {
    console.log("Something went wrong...");
    console.dir(err);
    return;
  }
  console.log(data.rainbow);
});



// dont ever let people think you can't live without them remind there was a time you didn't know them,and you were still doing fine 