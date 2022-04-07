const verif = require('./verif/verif.js');
const prompt = require('prompt-sync')();
const { Colors } = require('./color/color.js');


console.log('starting...');
const verify = new verif.verif();
let result = 0;
console.log('down');
console.clear();
console.log('Welcome to the mastermind game made by Unel');
console.log(' the list of authorized colors is:' + Colors.masterMind.o + ' o' + Colors.masterMind.w + ' w' + Colors.masterMind.r + ' r' + Colors.masterMind.g + ' g' + Colors.masterMind.c + ' c' + Colors.masterMind.m + ' m' + Colors.reset);
// demander à l'utilisateur de rentrer une combinaison
const listLigne = [];
while (result == 0) {
	const input = prompt('What is your combination (separate by a space) ? ');
	if(input == 'get'){
		result = 2;
	} else if(input == 'exit'){
		result = 3;
	}
	if (verify.verify(input).indexOf('errorLong') != -1&&result == 0) {
		console.log('error: the combination is not 4 characters long');
	} else if (verify.verify(input).indexOf('errorChar') != -1&&result == 0) {
		console.log('error: the combination contains an invalid character');
	} else if(result == 0){
		const returnVerify = verify.verify(input);
		// creation des indices
		let goodPlace = '';
		let goodButNotInTheRightPlace = '';
		for (let i = 0; i < returnVerify.length; i++) {
			if (returnVerify[i] == 'good place') {
				goodPlace += Colors.masterMind.w + '•' + Colors.reset;
			} else if (returnVerify[i] == 'good but not in the right place') {
				goodButNotInTheRightPlace += Colors.masterMind.r + '•' + Colors.reset;
			}
		}
		if (goodPlace == Colors.masterMind.w + '•' + Colors.reset + Colors.masterMind.w + '•' + Colors.reset + Colors.masterMind.w + '•' + Colors.reset + Colors.masterMind.w + '•' + Colors.reset) {
			result = 1;
		}
		listLigne.push('║' + verify.createColor(input, Colors) + '║ ' + goodButNotInTheRightPlace + goodPlace);
		// ecriture des lignes
		console.clear();
		console.log(' the list of authorized colors is:' + Colors.masterMind.o + ' o' + Colors.masterMind.w + ' w' + Colors.masterMind.r + ' r' + Colors.masterMind.g + ' g' + Colors.masterMind.c + ' c' + Colors.masterMind.m + ' m' + Colors.reset);
		console.log(Colors.masterMind.w + '•' + Colors.reset + ' good place, ' + Colors.masterMind.r + '•' + Colors.reset + ' good color but not in the right place');
		console.log('╔═════════╗');
		for (let i = 0; i < listLigne.length; i++) {
			console.log(listLigne[i]);
		}
		console.log('╚═════════╝');
	}

}
if (result == 1) {
	// random pour afichier des message diferant
	const random = Math.floor(Math.random() * 4);
	if (random == 0) {
		console.log('You win !!!');
	} else if (random == 1) {
		console.log('You win ☉ ‿ ⚆');
	} else if (random == 2) {
		console.log('You win [̲̅$̲̅(̲̅ ͡° ͜ʖ ͡°̲̅)̲̅$̲̅]');
	} else if (random == 3) {
		console.log('You win ಠ_ಠ');
		
	}
	console.log('did you want restart ?')
} else if (result == 2) {
	console.log('you asked for the solution here it is');
	let combination = '';
	/*for (let i = 0; i < verify.conbination.length; i++) {
		console.log(verify.conbination[i]);
		combination+=verify.createColor(verify.conbination[i], Colors);		
	}*/
		combination+=verify.createColor(verify.conbinationToString(), Colors);

	listLigne.push('║' +combination + '║ '+Colors.masterMind.w + '•' + Colors.masterMind.w + '•' + Colors.masterMind.w + '•' + Colors.masterMind.w + '•' + Colors.reset)
	console.log('╔═════════╗');
		for (let i = 0; i < listLigne.length; i++) {
			console.log(listLigne[i]);
		}
	console.log('╚═════════╝');
}else if (result == 3) {
	console.log('you left the game');
}