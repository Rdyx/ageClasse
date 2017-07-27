
//1.1. Partez d'un fichier script.js contenant les deux tableaux suivants

var classe1 = [
{ nom: 'Pierre', age: 40, sexe: 'M' },
{ nom: 'Marie', age: 18, sexe: 'F' },
{ nom: 'Louise', age: 16 , sexe: 'F' },
{ nom: 'Damien', age: 55, sexe: 'M' },
{ nom: 'Louis', age: 19, sexe: 'M' }
];

var classe2 = [
{ nom: 'Elodie', age: 27, sexe: 'F' },
{ nom: 'Christophe', age: 48, sexe: 'M' },
{ nom: 'Aurelie', age: 32, sexe: 'F' },
{ nom: 'Jeanne', age: 15, sexe: 'F' },
{ nom: 'Martin', age: 77, sexe: 'M' },
{ nom: 'Eric', age: 18, sexe: 'M' },
{ nom: 'Jacques', age: 35, sexe: 'M' },
{ nom: 'Eric', age: 47, sexe: 'M' }
];
/*
1.2. Définissez une fonction nombreHomme( classe ) 
qui retourne le nombre d'homme puis testez la en ligne de commande ( node script.js )
*/
var nombreHomme = function(classe){
	var count = 0;
	for(var i = 0; i < classe.length ; i++){
		if (classe[i].sexe ==='M'){
			count++;
		}
	}

	return count;
};
//console.log(nombreHomme(classe1));
//console.log(nombreHomme(classe2));

/*1.3. Définissez une fonction proportionHomme( classe ) 
qui renvoie le pourcentage d'homme dans la classe. Utiliser la fonction précédente.*/

var proportionHomme = function (classe){
	
	return (nombreHomme(classe) *100)/ classe.length;
}
//console.log(proportionHomme(classe1));
//console.log(proportionHomme(classe2));

/*1.4. Définissez une fonction proportionFemme( classe ) en vous servant de la fonction proportionHomme.*/
var proportionFemme = function (classe){
	
	return 100 - proportionHomme(classe);
}
//console.log(proportionFemme(classe1));
//console.log(proportionFemme(classe2));


/*1.5. Définissez une fonction moyenneAge( classe ) qui renvoie la moyenne d'age de la classe.*/

/*var moyenneAge = function(classe){
		var moy = 0;
		for(var i = 0; i < classe.length ; i++){
 			moy+= classe[i].age;
 		
 	}
 	
 	return moy / classe.length ;
}
console.log(moyenneAge(classe1));
console.log(moyenneAge(classe2));
*/


/*1.6. Modifiez la fonction précédente pour quelle puisse prendre en compte le sexe: moyenneAge
( classe, sexe = 'T'). L'argument sexe aura une valeur par défaut 'T' (pour Tous) 
ainsi si l'argument est omis lors de l'appel de la fonction nous ferons une moyenne 
d'age sur tous si non sur le sexe précisé. Prévoyé un message d'erreur si la valeur passé à l'argument 
sexe est différente de T,M,F.
*/
var moyenneAge = function(classe, sexe){
	if(sexe === 'T' || sexe === 'M' ||sexe === 'F' ){
		var count = 0;
		var moy = 0;
		for(var i = 0; i < classe.length ; i++){
			if(sexe === 'T' || classe[i].sexe === sexe){	
				count++;
				moy+= classe[i].age;
			}
		}
	
		return moy / count;
	}
	
	return "error sex";
}

/*console.log(moyenneAge(classe1,'T'));
console.log(moyenneAge(classe2,'T'));
console.log(moyenneAge(classe1,'M'));
console.log(moyenneAge(classe2,'M'));
console.log(moyenneAge(classe1,'F'));
console.log(moyenneAge(classe2,'F'));
console.log(moyenneAge(classe2,'J'));
*/



/*1.7. Définissez une fonction plusVieux( classe ) qui renvoie 
l'objet associé à la personne la plus vielle ( On part du principe que toutes les personnes ont un age différent)*/
var plusVieux = function(classe){
	var indice = 0;
	var age = classe[0].age;
	for(var i = 1; i < classe.length ; i++){
		if(classe[i].age > age){
			age = classe[i].age;
			indice = i;
		}
	}
	
	return classe[indice];
}
//console.log(plusVieux(classe1).nom);
//console.log(plusVieux(classe2).nom);


/*Fonction qui affiche chaque prénom en utilisant
une boucle*/
function displayClasse( classe ) {
	var noms = '';
	for(var i = 0 ; i < classe.length; i++){
		noms = noms + classe[i].nom +' ';
	}
	return noms;
}
//console.log(displayClasse(classe1));
//console.log(displayClasse(classe2));


//fonction qui prend un objet et qui liste clé + attribut
function displayObj(obj){	
	for(var o in obj){
		console.log(o+" : "+ obj[o]);
	}
	console.log("--------------");
}
//fonction qui liste les élèves d'une classe
function displayClass (classe){
	console.log("--------------");
	for(var i = 0 ; i < classe.length; i++){
		displayObj(classe[i]);
	}

}
//console.log("classe 1");
//displayClass(classe1);
//console.log("classe 2");
//displayClass(classe2);