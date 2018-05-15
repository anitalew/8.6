var a = 2,
	b = -4,
	value = (a * a) - (2 * a * b) - (b * b);

alert(value);
if (value < 0) {
	document.write('Wynik ujemny');
} else if (value > 0) {
	document.write('Wynik dodatni');
} else if (value == 0) {
	document.write('Wynik równy 0');
}
