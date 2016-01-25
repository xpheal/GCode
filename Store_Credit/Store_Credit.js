var fs = require('fs');

// compare param: x and y, return 1 if x > y, -1 if x < y, 0 if x == y
function compare(x, y){
	if(x.Key > y.Key){
		return 1;
	}
	else if(y.Key > x.Key){
		return -1;
	}
	else{
		return 0;
	}
}

// Arguments check
if(process.argv.length != 3){
	throw new Error("Usage: node Store_Credit.js <input file>");
}

var inFile = process.argv[2];

// Create buffer for files
var readBuf = fs.readFileSync(inFile, "utf-8");
var writeBuf = new Buffer("");

// Split the input by line
var split = readBuf.split("\n");

// First line = number of cases
var j = 0;
var numCases = parseInt(split[j]);
j++;

// Solution
var numItem; // Number of items in the store
var credit; // Amount of money the person has
var itemLine; // A line of item prices
var solutionString = ""; // String to store the answer that is going to be written to solution.out
var array; // Array to store the list of items
var high, low, mid; // For binary search
var k; // To iterate through the list
var done; // When search is done

// Outer loop through number of Cases
for(var i = 0; i < numCases; i++){
	array = [];

	// Obtain the amount of credit on hand
	credit = parseInt(split[j]);
	j++;

	// Obtain the number of items in the store
	numItem = parseInt(split[j]);
	j++;

	// Split the items and store the as objects in an array
	itemLine = split[j].split(" ");

	for(var ctr = 0; ctr < numItem; ctr++){
		var temp = {};
		temp.Key = parseInt(itemLine[ctr]);
		temp.Value = ctr + 1;
		array.push(temp);
	}

	// Sort the items in ascending order
	array.sort(compare);

	// Binary search
	// Scan through every item in the list and add it up with the second item obtained through binary search
	// Compare item with credts until solution is obtained
	// Complexity of O(N) for outer iteration through list and Olog(N) for binary search
	// Total complexity = O(Nlog(N))
	// Naive approach complexity would be O(N^2/2)

	done = false;
	k = 0;

	while(!done){
		if(k >= numItem -1){
			break;
		}

		low = k + 1;
		high = numItem - 1;

		while(true){
			mid = Math.floor((high - low)/2) + low;

			// Answer is found when x + y = credit, add solution to string
			if((array[mid].Key + array[k].Key) == credit){
				if(array[mid].Value > array[k].Value){
					solutionString = solutionString + "Case #" + (i + 1) + ": " + array[k].Value + " " + array[mid].Value + "\n";
				}
				else{
					solutionString = solutionString + "Case #" + (i + 1) + ": " + array[mid].Value + " " + array[k].Value + "\n";
				}
				done = true;
				break;
			}

			if(low >= high){
				break;	
			}

			// Decrease "low" limit and do the search again
			if((array[mid].Key + array[k].Key) > credit){
				high = mid - 1;
			}
			else{
				// Increase "high" limit and do the search again
				low = mid + 1;
			}

		}		

		k++; 
	}

	j++;
}

// Create output file and write solution to it
var outFile = inFile.split(".")[0] + ".out";

fs.writeFileSync(outFile, solutionString);