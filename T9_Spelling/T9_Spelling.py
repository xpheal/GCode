import sys

# Check arguments
if len(sys.argv) != 2:
	print "Usage: python T9_Spelling.py <input_file>"
	sys.exit(1)

# Dictionary for converting alphabets to numbers
alpDict = {
	'a': '2',
	'b': '22',
	'c': '222',
	'd': '3',
	'e': '33',
	'f': '333',
	'g': '4',
	'h': '44',
	'i': '444',
	'j': '5',
	'k': '55',
	'l': '555',
	'm': '6',
	'n': '66',
	'o': '666',
	'p': '7',
	'q': '77',
	'r': '777',
	's': '7777',
	't': '8',
	'u': '88',
	'v': '888',
	'w': '9',
	'x': '99',
	'y': '999',
	'z': '9999',
	' ': '0'
}

# Open input file
inFileName = sys.argv[1]
inFile = open(inFileName, 'r')

# Open output file
outFileName = sys.argv[1].split(".")[0]
outFileName += ".out"
outFile = open(outFileName, 'w')

# Number of lines
numCase = int(inFile.readline())

# Convert alphabets to numbers on phone keypad
for x in range(0, numCase):
	outFile.write("Case #" + str(x + 1) + ": ")

	# obtain input line
	line = inFile.readline()

	solution = ""

	# iterate line
	for y in range(0, len(line) - 1):
		if len(solution) != 0 and alpDict[line[y]][0] == solution[len(solution) - 1]:
			solution += " "

		solution += alpDict[line[y]]

	outFile.write(solution + "\n")