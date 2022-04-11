class verif {
	constructor() {
		this.conbination = this.createCombination();
	}
	conbinationToString() {
		let stringconbination = this.conbination[0];
		for (let i = 1; i < this.conbination.length; i++) {
			stringconbination += ' ' + this.conbination[i];
		}
		return stringconbination;
	}
	createCombination() {
		const array = [];
		for (let i = 0; array.length != 4; i++) {
			// aleatoir entre 0 et 5
			const random = Math.floor(Math.random() * 6);
			if (random == 0 && array.indexOf('o') == -1) {
				array.push('o');
			} else if (random == 1 && array.indexOf('w') == -1) {
				array.push('w');
			} else if (random == 2 && array.indexOf('r') == -1) {
				array.push('r');
			} else if (random == 3 && array.indexOf('g') == -1) {
				array.push('g');
			} else if (random == 4 && array.indexOf('c') == -1) {
				array.push('c');
			} else if (random == 5 && array.indexOf('m') == -1) {
				array.push('m');
			}
		}
		console.log(array);
		return array;
	}
	verify(combination) {
		combination = combination.split(' ');
		const result = [];
		if (combination.length != 4) {
			result.push('errorLong');
		} else {
			for (let i = 0; i < 4; i++) {
				if (combination[i] != ' ') {
					if (combination[i] != 'o' && combination[i] != 'w' && combination[i] != 'r' && combination[i] != 'g' && combination[i] != 'c' && combination[i] != 'm') {
						result.push('errorChar');
						// console.log('error at' + combination[i]);
					} else if (combination[i] == this.conbination[i]) {
						result.push('good place');
						// console.log(combination[i] + '==' + this.conbination[i]);
					} else if (combination.indexOf(this.conbination[i]) != -1) {
						result.push('good but not in the right place');
						// console.log(combination[i] + '+-=' + this.conbination[i]);
					} else {
						result.push('bad');
						// console.log(combination[i] + '!=' + this.conbination[i]);
					}
				}
			}
		}
		// console.log(result);
		return result;
	}
	createColor(combination, Colors) {
		combination = combination.split(' ');
		let output = '';
		for (let i = 0; i < combination.length; i++) {
			output = output + this.testColor(combination[i], Colors) + '•' + Colors.reset + ' ';
		}
		output = ' ' + output;
		return output;
	}
	testColor(character, Colors) {
		if (character == 'o') {
			return Colors.masterMind.o;
		} else if (character == 'w') {
			return Colors.masterMind.w;
		} else if (character == 'r') {
			return Colors.masterMind.r;
		} else if (character == 'g') {
			return Colors.masterMind.g;
		} else if (character == 'c') {
			return Colors.masterMind.c;
		} else if (character == 'm') {
			return Colors.masterMind.m;
		}
	}
}

// export
module.exports = { verif };