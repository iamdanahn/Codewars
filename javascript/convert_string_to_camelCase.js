// Complete the method/function so that it converts dash/underscore delimited words into camel casing. The first word within the output should be capitalized only if the original word was capitalized (known as Upper Camel Case, also often referred to as Pascal case).

// Examples
// "the-stealth-warrior" gets converted to "theStealthWarrior"
// "The_Stealth_Warrior" gets converted to "TheStealthWarrior"

function toCamelCase(str) {
	if (str.length === 0) return "";

	let words;

	if (str.includes("-")) {
		words = str.split("-");
	} else if (str.includes("_")) {
		words = str.split("_");
	}

	for (let i = 0; i < words.length; i++) {
		if (i === 0) continue;
		words[i] = capitalizeFirstLetter(words[i]);
	}

	return words.join("");
}

function capitalizeFirstLetter(word) {
	return word[0].toUpperCase() + word.slice(1);
}
