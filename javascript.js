

$(document).ready(function() {
    $("#btn").click(function() {
        var date = $("#date").val();
        var tache = $("#tache").val();
        var newRow = $("<tr>");
        newRow.append("<td>" + date + "</td>");
        newRow.append("<td>" + tache + "</td>");
        newRow.append("<td>"+'<input type="checkbox" class="statut">'+"</td>");
        newRow.append("<td>"+'<button class="dange" id ="action" > <i class="fas fa-trash-alt"></i> </button>'+"</td>");

        $("#tablebody").append(newRow);
        var data = JSON.parse(localStorage.getItem("formData"))|| [];
        data.push({date:date, tache: tache});
        localStorage.setItem("formData",JSON.stringify(data));
        // pour vider les champs de formulaire
        $("#date, #tache").val(""); 

        // charger les données enregistre en local
       
    });
    // fonction supprimer
    $(document).on("click", ".dange", function() {
        $(this).closest("tr").remove();
        
    });
    

    
     // afficher et masquer les lignes avec checkbox
     $(document).on("change", ".statut", function() {
        $(this).closest("tr").toggleClass("lignbarre");
    });

});
var saveData= JSON.parse(localStorage.getItem("formData"))|| [];
    saveData.forEach(function(item){
    var newRow= $("<tr>");
    newRow.append("<td>"+ item.date+"</td>")
    newRow.append("<td>"+ item.tache+"</td>")
    newRow.append("<td>"+'<input type="checkbox" class ="statut">'+" </td>");
    newRow.append("<td>"+'<button class="dange" id ="action" > <i class="fas fa-trash-alt"></i> </button>'+"</td>");
    $("#tablebody").append(newRow);
});
