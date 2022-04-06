const verif = require('./verif/verif.js');
const prompt = require('prompt-sync')();
const { Colors } = require('./color/color.js');


console.log('starting...');
const verify = new verif.verif();
let result = false;
console.log('down');
console.clear();
console.log('welcome to the mastermind game made by unel');
console.log(' the list of authorized colors is:' + Colors.masterMind.j + ' j' + Colors.masterMind.b + ' b' + Colors.masterMind.r + ' r' + Colors.masterMind.v + ' v' + Colors.masterMind.n + ' n' + Colors.masterMind.m + ' m' + Colors.reset);
console.log(Colors.masterMind.b + '•' + Colors.reset + ' good place, ' + Colors.masterMind.r + '•' + Colors.reset + 'good color but not in the right place');
// demander à l'utilisateur de rentrer une combinaison
const listLigne = [];
while (!result) {
	const input = prompt('What is your first combination (separate by a space) ? ');
	if (verify.verify(input).indexOf('errorLong') != -1) {
		console.log('error: the combination is not 4 characters long');
	} else if (verify.verify(input).indexOf('errorChar') != -1) {
		console.log('error: the combination contains an invalid character');
	} else {
		const returnVerify = verify.verify(input);
		// creation des indices
		let goodPlace = '';
		let goodButNotInTheRightPlace = '';
		for (let i = 0; i < returnVerify.length; i++) {
			if (returnVerify[i] == 'good place') {
				goodPlace += Colors.masterMind.b + '•' + Colors.reset;
			} else if (returnVerify[i] == 'good but not in the right place') {
				goodButNotInTheRightPlace += Colors.masterMind.r + '•' + Colors.reset;
			}
		}
		if (goodPlace.length == 4) {
			result = true;
		}
		listLigne.push('║' + verify.createColor(input, Colors) + '║ ' + goodButNotInTheRightPlace + goodPlace);
		// ecriture des lignes
		console.clear();
		console.log(' the list of authorized colors is:' + Colors.masterMind.j + ' j' + Colors.masterMind.b + ' b' + Colors.masterMind.r + ' r' + Colors.masterMind.v + ' v' + Colors.masterMind.n + ' n' + Colors.masterMind.m + ' m' + Colors.reset);
		console.log('╔═════════╗');
		for (let i = 0; i < listLigne.length; i++) {
			console.log(listLigne[i]);
		}
		console.log('╚═════════╝');
	}
}
console.log('you win');

