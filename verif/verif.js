class verif {
	constructor() {
		this.conbination = this.createCombination();
	}
	createCombination() {
		const array = [];
		for (let i = 0; array.length != 4; i++) {
			// aleatoir entre 0 et 5
			const random = Math.floor(Math.random() * 6);
			if (random == 0 && array.indexOf('j') == -1) {
				array.push('j');
			} else if (random == 1 && array.indexOf('b') == -1) {
				array.push('b');
			} else if (random == 2 && array.indexOf('r') == -1) {
				array.push('r');
			} else if (random == 3 && array.indexOf('v') == -1) {
				array.push('v');
			} else if (random == 4 && array.indexOf('n') == -1) {
				array.push('n');
			} else if (random == 5 && array.indexOf('m') == -1) {
				array.push('m');
			}
		}
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
					if (combination[i] != 'j' && combination[i] != 'b' && combination[i] != 'r' && combination[i] != 'v' && combination[i] != 'n' && combination[i] != 'm') {
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
		if (character == 'j') {
			return Colors.masterMind.j;
		}
		if (character == 'b') {
			return Colors.masterMind.b;
		}
		if (character == 'r') {
			return Colors.masterMind.r;
		}
		if (character == 'v') {
			return Colors.masterMind.v;
		}
		if (character == 'n') {
			return Colors.masterMind.n;
		}
		if (character == 'm') {
			return Colors.masterMind.m;
		}
	}
}

// export
module.exports = { verif };