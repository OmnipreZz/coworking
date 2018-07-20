// Resa whithout registration
//------------------------------
$('.formula').click(function() {
    let formulinfo = $(this).attr('formula'); 
    console.log(formulinfo);
    $("#msginfo").html('Vous avez choisi la formule');
    $("#msgformule").html(formulinfo);
    $("#option").attr('value', formulinfo);
});
    
//------------------------------
// End resa whithout registration



$('.cellday').click(function() {
    let datecell = $(this).children().attr("date");
    console.log(datecell);
    let chosendate = moment(datecell).format("DD/MM/YYYY");
    console.log(chosendate);
    $("#msgDate").html('Pour le : '+ chosendate);
    $("#date").attr("value", datecell);
});

// modal resa calendar checked ///////////////////////////

$('.validModalResa').click(() => {

    if ($('#morning').is(':checked')) {
        let matin = "Matin";
        $("#dateMatin").html(matin);
        $('#morning').attr('value', matin);
    }
    if($('#afternoon').is(':checked')) {
        let aprem = "Après-midi";
        $("#dateAprem").html(aprem);
        $('#afternoon').attr('value', aprem);
    }
    if ($('#cowork').is(':checked')) {
        let espace = "Espace Coworking";
        $("#optionEspace").html(espace);
        $("#place").attr('value', espace);
    }
    if ($('#solo').is(':checked')) {
        let espace = "Bureau";
        $("#optionEspace").html(espace);
        $("#place").attr('value', espace);
    }
    if ($('#screen').is(':checked')) {
        let ecran = "Ecran";
        $("#optionEcran").html(ecran);
        $("#screen").attr('value', ecran);
    }
    if ($('#hammock').is(':checked')) {
        let hamac = "Hamac";
        $("#optionHamac").html(hamac);
        $("#hammock").attr('value', hamac);
    }
    console.log("option");
    $("#msgOption").html('Les Détails');
});

//-----------------------------------------------------------
