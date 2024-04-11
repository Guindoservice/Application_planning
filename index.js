$(document).ready(function(){
    var TASK= JSON.parse(localStorage.getItem("TASK")) || [];
   Afficher();
   
   $(".Formulaire").submit(function(e){
    e.preventDefault();
    var date = $("#date").val();
    var tache = $("#tache").val();
    TASK.push({date:date, tache:tache});
    localStorage.setItem("TASK",JSON.stringify(TASK));

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