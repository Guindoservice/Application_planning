$(document).ready(function(){
    // Chargement des données depuis le localStorage
    var TASK= JSON.parse(localStorage.getItem("TASK")) || [];
      // Affichage initial des données
   Afficher();
   // Gestion de la recuppération des données du formulaire
   $(".Formulaire").submit(function(e){
    e.preventDefault();
    var date = $("#date").val();
    var tache = $("#tache").val();
    TASK.push({date:date, tache:tache});
    localStorage.setItem("TASK",JSON.stringify(TASK));
    $("#date, #tache").val(""); 

    Afficher();
    $("#date").val();
    $("#tache").val();

   });
   // fonction pour afficher
   function Afficher(){
    $("#tablebody").empty();
    TASK.forEach(function(addTast, index){
        $("#tablebody").append(`
        <tr>
          <td>${addTast.date}</td>
          <td>${addTast.tache}</td>
          <td><input type="checkbox" class="statut"></td>
          <td><button class="dange" id ="action" data-index="${index}"> <i class="fas fa-trash-alt"></i> </button></td>
        </tr>
        `);
    });
   }
   // Gestion du clic sur le bouton de suppression
   $(document).on("click",".dange",function(){
    let index= $(this).data("index");
    TASK.splice(index,1);
    localStorage.setItem("TASK",JSON.stringify(TASK));
    Afficher();
   });
   
   $(document).on("change", ".statut", function() {
    $(this).closest("tr").toggleClass("lignbarre");
    // localStorage.setItem("TASK",JSON.stringify(TASK));
    // Afficher();
});

});