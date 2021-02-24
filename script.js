// Variables globales ainsi que les array
var golds = 0;
var x = 1;
var karasuno = [
  { id: 1, name: "Yamaguchi", cost: 10, gps: 0.1, owned: 0 },
  { id: 2, name: "Chikara", cost: 100, gps: 1, owned: 0 },
  { id: 3, name: "Tanaka", cost: 500, gps: 5, owned: 0 }
];
var stock = karasuno[0].owned + karasuno[1].owned + karasuno[2].owned;
addGps()
/*function displayOwned(){
  console.log(x)
  document.getElementById("clickrate").innerHTML = "owned :" + karasuno[0].owned;
}*/


//Fonctions Utilitaires ----------------------------------------------------------------
// Ajoute la valeur de GPS, à la valeur de Gold toutes les secondes
    function displayGps(){
  document.getElementById("gps").innerHTML = "Gps :" + gps.toFixed(2);
}

// Affiche le nombre de Gold
    function displayGolds(){
  document.getElementById("golds").innerHTML = "Gold :" + Number(localStorage.gold).toFixed(2);
}
// Permet le localStorage
function storage(){
localStorage.setItem("gold", golds);
}
storage()
//Ajoute un nombre de gps (suivant les minions) ----------------------------------------------------------------
function addGps(){
  setInterval(function(){
    getGPS();  //Ici cela ne doit pas prendre les GPS des minions si le joueur ne les as pas achetés ----------------------------------------------------------------
    localStorage.gold = Number(localStorage.gold) + gps;
    displayGolds();
    displayGps();
    //storage();
  }, 1000)
}


// Permet de rajouter la valeur de GPS d'un minion pour l'ajouter aux GPS de base ----------------------------------------------------------------
       function getGPS(){
gps = 0;
         		karasuno.forEach(test);
         	function test(karasuno) {
           	if (karasuno.owned != 0) {
         			gps = gps + (karasuno.owned * karasuno.gps);
         		}
         	}
}

// Acheter un minion ----------------------------------------------------------------
function buyMinion(id){
  id--
if (karasuno[id].cost <= localStorage.gold && localStorage.gold > 0){
localStorage.gold = Number(localStorage.gold) - karasuno[id].cost;
  ++karasuno[id].owned;
  ++stock;
  localStorage.owned = Number(karasuno.owned) +1;


  karasuno[id].cost = (karasuno[id].cost * 1.15);
}
if (stock === 50){
  stock = 0;
  x=x*2;
}
if (karasuno[id].owned == 25 || karasuno[id].owned == 50 || karasuno[id].owned == 100 || karasuno[id].owned == 250 || karasuno[id].owned == 1000) {
              karasuno[id].gps *= 2;
                }
addCaracteristiques()
getGPS()
}

//Ajoute des Golds en appuyants sur le bouton ----------------------------------------------------------------
function addGold(){
  localStorage.gold = Number(localStorage.gold) + x;
  displayGolds();
}


//Affiche les minions


    //Première Ligne du Tableau
    function addCaracteristiques()
    {
        //Première Ligne du Tableau

        document.getElementById("name").innerHTML = karasuno[0].name;
        document.getElementById("cost").innerHTML = "Price: " + karasuno[0].cost.toFixed(2) + " Golds";
        document.getElementById("owned").innerHTML = "Nombres détenus : " + karasuno[0].owned;


        //Deuxième ligne du Tableau

        document.getElementById("names").innerHTML = karasuno[1].name;
        document.getElementById("costs").innerHTML = "Price: " + karasuno[1].cost.toFixed(2) + " Golds";
        document.getElementById("owneds").innerHTML = "Nombres détenus : " + karasuno[1].owned;

        //Troisième ligne du Tableau

        document.getElementById("namess").innerHTML = karasuno[2].name;
        document.getElementById("costss").innerHTML = "Price: " + karasuno[2].cost.toFixed(2) + " Golds";
        document.getElementById("ownedss").innerHTML = "Nombres détenus : " + karasuno[2].owned;

    }



//
  addCaracteristiques()
