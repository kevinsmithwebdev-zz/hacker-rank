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

function getTotalX(a, b) {
  var result = []
  var min = Math.min(...a)
  var max = Math.min(...b)
  var total = 0

  for (var div=Math.max(...a); div<=max; div+=min) {
    var excluded = false
    for (var j=0; j<b.length; j++) {
      if (b[j] % div !== 0) {
        excluded = true
        break
      }
    }

    if (!excluded) {
      for (var j=0; j<a.length; j++) {
        if (div % a[j] !== 0) {
          excluded = true
          break
        }
      }
    }

    if (!excluded) {
      total++
    }
  }
  return total
}

function main() {
    var n_temp = readLine().split(' ');
    var n = parseInt(n_temp[0]);
    var m = parseInt(n_temp[1]);
    a = readLine().split(' ');
    a = a.map(Number);
    b = readLine().split(' ');
    b = b.map(Number);
    var total = getTotalX(a, b);
    process.stdout.write("" + total + "\n");

}
