process.stdin.resume();
process.stdin.setEncoding('ascii');

var input_stdin = "";
var input_stdin_array = "";
var input_currentline = 0;

process.stdin.on('data', function (data) {
    input_stdin += data;
});

process.stdin.on('end', function () {
    input_stdin_array = input_stdin.split("\n");
    main();
});

function readLine() {
    return input_stdin_array[input_currentline++];
}

/////////////// ignore above this line ////////////////////

function getRecord(s){
  var high = s[0]
  var highInc = 0
  var low = s[0]
  var lowDec = 0

  for (var i=1; i<s.length; i++) {
    if (s[i]>high) {
      high = s[i]
      highInc++
    } else if (s[i]<low) {
      low = s[i]
      lowDec++
    }
  }
  return [highInc, lowDec]
}

function main() {
    var n = parseInt(readLine());
    s = readLine().split(' ');
    s = s.map(Number);
    var result = getRecord(s);
    console.log(result.join(" "));

}
