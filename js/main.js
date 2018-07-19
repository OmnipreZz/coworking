// Resa whithout registration
//------------------------------
$('.formula').click(function() {
    let formulinfo = $(this).attr('formula'); 
    console.log(formulinfo);
    $("#msginfo").html('Vous avez choisi la formule');
    $("#msgformule").html(formulinfo);
    $("#msgformule").attr('name',formulinfo);
});
    
//------------------------------
// End resa whithout registration



$('.cellday').click(function() {
    let datecell = $(this).children().attr("date");
    console.log(datecell);
    let chosendate = moment(datecell).format("DD/MM/YYYY");
    console.log(chosendate);
    $("#msgDate").html('Pour le : '+ chosendate);
    $("#msgDate").attr("name", datecell);
});

// modal resa calendar checked ///////////////////////////

$('.validModalResa').click(() => {

    if ($('#morning').is(':checked')) {
        let matin = "Matin";
        $("#dateMatin").html(matin);
        $('#dateMatin').attr('name', matin);
    }
    if($('#afternoon').is(':checked')) {
        let aprem = "Après-midi";
        $("#dateAprem").html(aprem);
        $('#dateAprem').attr('name', aprem);
    }
    if ($('#cowork').is(':checked')) {
        let espace = "Espace Coworking";
        $("#optionEspace").html(espace);
    }
    if ($('#solo').is(':checked')) {
        let espace = "Bureau";
        $("#optionEspace").html(espace);
    }
    if ($('#screen').is(':checked')) {
        let ecran = "Ecran";
        $("#optionEcran").html(ecran);
        $("#optionEcran").attr('name', ecran);
    }
    if ($('#hammock').is(':checked')) {
        let hamac = "Hamac";
        $("#optionHamac").html(hamac);
        $("#optionHamac").attr('name', hamac);
    }
    console.log("option");
    $("#msgOption").html('Les Détails');
});

//-----------------------------------------------------------
