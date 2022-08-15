'use stict'

function calc(iden, a, b) {
	switch (iden) {
		case 'add':
			return a + b
			break
		case 'multi':
			return a * b
			break
		case 'subtract':
			return a - b
			break
	}
}


alert(calc('subtract', 2, 3))