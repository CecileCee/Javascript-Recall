
var selectElementsStartingWithA = function(array) {
  function startingWithA(element) {
    return element.charAt(0) === "a";
  }
  return array.filter(startingWithA);
}

var selectElementsStartingWithVowel = function(array) {
 var vowel = ["a", "e", "i", "o", "u", "y"];
 function startingWithVowel(element) {
   var firstChar = element.charAt(0);
   return vowel.indexOf(firstChar) !== -1;
 }
 return array.filter(startingWithVowel);
}

var removeNullElements = function(array) {
  function selectElements(element) {
    return element !== null;
  }
  return array.filter(selectElements);
}

var removeNullAndFalseElements = function(array) {
  function selectElements(element) {
    return element !== null && element !== false;
  }
  return array.filter(selectElements);
}

var reverseWordsInArray = function(array) {
  function reverseWords(element) {
      return element = element.split('').reverse().join('');
  }
  return array.map(reverseWords);
}

var everyPossiblePair = function(array) {
  //coupler par ordre alphabétique
  //faire le maximum de couples
  return array.sort();
}

var allElementsExceptFirstThree = function(array) {
  return array.slice(3);
}

var addElementToBeginning = function(array, element) {
  array.unshift(element);
  return array;
}

var sortByLastLetter = function(array) {
  function lastLetter(element1, element2) {
		var letter1 = element1[element1.length-1];
		var letter2 = element2[element2.length-1];

		if (letter1 > letter2) {
			return 1;
		}
		else if (letter1 < letter2) {
			return -1;
		}
		return 0;
	}
  return array.sort(lastLetter);
}

var getFirstHalf = function(string) {
  var lengthHalf = 0; // déclarer variable pour stocker la position de la moitié
  if (string.length%2 === 0) { // pour la longueur si le chiffre est pair
    lengthHalf = Math.floor(string.length/2);
  } else if (string.length%2 === 1) { // pour la longueur si le chiffre est impair
    lengthHalf = Math.floor(string.length/2) + 1; // ajouter un pour vraiment prendre en compte la moitié
  }
  return string.substring(0, lengthHalf); // retourne les caractères présents entre le début et la fin de la moitié
}

var makeNegative = function(number) {
  // transformer un nombre en chiffre négatif et qu'il le reste s'il l'était au départ
  // vérifier si le chiffre est négatif
  var verifNumber = Math.sign(number); // renvoie 1 ou -1
  if (verifNumber > 0) {
    return number * -1;
  } else {
    return number; // ne rien faire à number s'il est déjà négatif
  }
}

var numberOfPalindromes = function(array) {
  // créer un 2e tableau, pusher les éléments en reverse et les comparer au tableau initial
  var countPalindromes = 0,
      wordsReverse = array.slice(); // copie du tab Array dans wordsReverse

  function reverseStrings(element) { // fonction pour inverser les lettres
    element = element.split('').reverse().join('');
    return element;
  }
  wordsReverse = wordsReverse.map(reverseStrings); // lettres inversées

  for (var i = 0, c = array.length; i < c; i++) { // parcours et comparaison tableaux
    if (array[i] === wordsReverse[i]) {
      countPalindromes++; // incrémente seulement si les éléments sont identiques
    }
  }
  return countPalindromes;
}

var shortestWord = function(array) {
  function compareLength (element1, element2) { // compare élements du tableau ...
    return element1.length - element2.length;
  }
  var newArray = array.sort(compareLength); // ... et appliquer la méthode sort pour mettre dans l'ordre les mots les plus courts aux plus longs
  return newArray[0]; // afficher le premier élement (mot le + court)
}

var longestWord = function(array) { // compare élements du tableau ...
  function compareLength (element1, element2) {
    return element2.length - element1.length;
  }
  var newArray = array.sort(compareLength); // ... et appliquer la méthode sort pour mettre dans l'ordre les mots les plus longs aux plus courts
  return newArray[0]; // afficher le premier élément (mot le + long)
}

var sumNumbers = function(array) {
    var elementSum = 0;

    for (var i = 0, c = array.length; i < c; i++) { // additionner chaque élément
      elementSum += array[i];
    }
    return elementSum;
}

var repeatElements = function(array) {
  var copyArray = array.slice(); // copie du tableau

  for (var i = 0, c = array.length; i < c; i ++) { // push de chaque élément de la copie dans array
    array.push(copyArray[i]);
  }
  return array;
}

var stringToNumber = function(string) {
  return Number(string); // méthode transformant les strings en nombre
}

var calculateAverage = function(array) {
  var element = 0;
    for (var i = 0, c = array.length; i < c; i++) { // additionner chaque élément du tableau
      element += array[i];
    }
  return element/3; // diviser le total par 3
}

var getElementsUntilGreaterThanFive = function(array) {
  var arrayElementsUntilFive = [];            // tableau vide pour garder les valeurs du slice
  var indexOfGreaterElem = 0;                 // variable pour garder l'index du chiffre > 5

  function indexGreater(element) {            // fonction pour trouver l'élément > 5
    var greaterThanFive = 6;                  // et enregistrer l'index
    if (element === greaterThanFive) {
      return indexOfGreaterElem = array.indexOf(element);
    }
  }
  array.map(indexGreater);                    // méthode appliqué à chaque élément du tableau
  // console.log(indexOfGreaterElem);         // afficher l'index de l'élément > 5
  return arrayElementsUntilFive = array.slice(0, indexOfGreaterElem); // stocker les valeurs < 5 dans le tableau vide
}

var convertArrayToObject = function(array) {
  var arrayToObject = {}, // objet vide
      arrayElem1 = [], // tableau propriétés de l'objet
      arrayElem2 = []; // tableau valeurs de l'objet

  for (var i = 0, c = array.length; i < c; i++) { // séparer chaque élément ds 2 tableaux pour déterminer les propriétés et les valeurs
   elem = array[i];
   if (i === 0 || i%2 === 0) {
     arrayElem1.push(elem);
   } else if (i === 1 || i%2 === 1) {
     arrayElem2.push(elem);
   }
  } // fin boucle qui affecte dans les arrays respectifs les éléments aux index pairs et impairs

  for (var i = 0, c = arrayElem1.length; i < c; i++) { // affecter les éléments des 2 tableaux à arrayToObject pr remplir l'objet
	arrayToObject[arrayElem1[i]] = arrayElem2[i];
  }
  return arrayToObject;
}

var getAllLetters = function(array) {
  var lettersArray = array.join('');          // rassembler tous les mots en un seul
  lettersArray = lettersArray.split('');      // créer un tableau avec chaque lettre
  lettersArray.sort();                        // mettre dans l'ordre alphabétique

  var pairsArray = 0,                         // tableau récupérant les lettres en double
      index = 0;                              // initialiser index pour le tableau

  while (index < lettersArray.length) {       // boucle pour parcourir le tableau des lettres
    if (lettersArray[index-1] === lettersArray[index]) {
      pairsArray = lettersArray.splice(index, 1); // si la lettre est identique à la suivant supprimer l'élément du tableau et le placer dans pairsArray
    }
    index++;                                  // incrémenter index pour parcourir le tableau
  }

  return lettersArray;
}

var swapKeysAndValues = function(object) {
  // fonction qui place les props en value et les values en prop
  var newObject = {};

  for (var property in object ) {
    if (object.hasOwnProperty(property)) {
      newObject[object[property]] = property;     // object[property] <=> prendre la valeur de la propriété de l'objet et l'attribuer à la propriété de newObject + associé à la nouvelle propriété de newObject la propriété de Object
    }
  }

  return newObject;
}

var sumKeysAndValues = function(object) {
  var sum = 0;                                          // variable qui contiendra le résultat

  for (var key in object) {
    if (object.hasOwnProperty(key)) {
      sum += Math.floor(object[key]) + Math.floor(key); // addition des values et des keys
    }
  }

  return sum;
}

var removeCapitals = function(string) {
  var stringSeperate = string.split(" "),       // créer un tableau de chaque mot
      stringJoin = [];                          // créer un 2e tableau pour stocker les mots modifiés et y appliquer la méthode "join"

  function removeCapitalsWord (word) {          // fonction à appliquer à chaque mot et qui renvoie seulement les lettres après la majuscule
    return word.slice(1);
  }
  stringJoin = stringSeperate.map(removeCapitalsWord);
  return stringJoin.join(" ");
}

var roundUp = function(number) {
  return Math.ceil(number);
}

var formatDateNicely = function(date) {
  return date.toLocaleDateString("fr", {year:"numeric",month:"2-digit", day:"2-digit"});
}

var getDomainName = function(string) {
  var indexAt = string.indexOf("@") + 1,
      indexDot = string.lastIndexOf(".");
  return string.substring(indexAt, indexDot);
}

var titleize = function(string) {
  return 'Write your method here';
}

var checkForSpecialCharacters = function(string) {
  return 'Write your method here';
}

var squareRoot = function(number) {
  return 'Write your method here';
}

var factorial = function(number) {
  return 'Write your method here';
}

var findAnagrams = function(string) {
  return 'Write your method here';
}

var convertToCelsius = function(number) {
  return 'Write your method here';
}

var letterPosition = function(array) {
  return 'Write your method here';
}
