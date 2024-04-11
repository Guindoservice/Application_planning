// la fonction pour ajouter les données dans le tableau
function ajouter(){
    
    var date = document.getElementById("date").value;
    var tache= document.getElementById("tache").value;

    if(date.trim()===''||tache.trim()===''){
        alert("Veillez un renseigner les champs");
        return;
    }
  // insertion des des données du champs
    var tableau = document.getElementById("tablebody");
    var newRow= tableau.insertRow(-1);
    var coldate= newRow.insertCell(0);
    var coltast= newRow.insertCell(1);
    var colstatut= newRow.insertCell(2);
    var colaction= newRow.insertCell(3);

    coldate.innerHTML= date;
    coltast.innerHTML= tache;
    colstatut.innerHTML= ' )<input type="checkbox" class="statut">';
    colaction.innerHTML= '<button class="dange" id ="action" onclick="deleteRow(this)"> <i class="fas fa-trash-alt"></i> </button>';


    //enregistrement local
    var taches= localStorage.getItem('taches')? JSON.parse(localStorage.getItem('taches')):[];
    taches.push({date:date,tache: tache, colstatut:'<input type="checkbox" class="statut">',colaction:'<button class="dange" id ="action"onclick="deleteRow(this)" > <i class="fas fa-trash-alt"></i> </button>'});
    localStorage.setItem('taches',JSON.stringify(taches));
}
// affichage des informations 
window.onload = function(){
    var taches= localStorage.getItem('taches');
    if(taches){
        taches= JSON.parse(taches);
        var tableau= document.getElementById("tablebody");
        taches.forEach(function(pn){
            var newRow= tableau.insertRow(-1);
            var coldate= newRow.insertCell(0);
            var coltast= newRow.insertCell(1);
            var colstatut= newRow.insertCell(2);
            var colaction= newRow.insertCell(3);
            coldate.innerHTML= pn.date;
            coltast.innerHTML= pn.tache;
            colstatut.innerHTML= pn.colstatut;
            colaction.innerHTML= pn.colaction;
        });

            
        
    }
 
}

