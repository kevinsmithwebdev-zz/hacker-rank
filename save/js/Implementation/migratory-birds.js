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

function migratoryBirds(n, arr) {
  var countArr = []
  arr.map((bird) => {
    countArr[bird]
      ? countArr[bird]++
      : countArr[bird] = 1
  })

  var indexMax = 0
  var countMax = 0

  countArr.map((count, index) => {
    if (count>countMax) {
      indexMax = index
      countMax = count
    }
  })
  return indexMax
}

function main() {
    var n = parseInt(readLine());
    ar = readLine().split(' ');
    ar = ar.map(Number);
    var result = migratoryBirds(n, ar);
    process.stdout.write("" + result + "\n");
}
