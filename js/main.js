// Resa whithout registration
//------------------------------
$('.formula').click(function() {
    let formulinfo = $(this).attr('formula'); 
    console.log(formulinfo);
    $("#msginfo").html('Vous avez choisi la formule');
    $("#msgformule").html(formulinfo);
    $("#option").attr('value', formulinfo);

    switch (formulinfo) {
        case 'Petit Passage' : 
            $("#price").attr('value', 3);
            $("#nbrDay").attr('value', 1);
            break;
        case 'Carnet du Nomade':
            $("#price").attr('value', 30);
            $("#nbrDay").attr('value', 10);
            break;
        case 'Formule Souplesse':
            $("#price").attr('value', 45);
            $("#nbrDay").attr('value', 16);
            break;
        case 'Comme à la Maison':
            $("#price").attr('value', 100);
            $("#nbrDay").attr('value', 62);
            break;

    }
});
    
//------------------------------
// End resa whithout registration



$('.cellday').click(function() {
    let datecell = $(this).children().attr("date");
    console.log(datecell);
    let chosendate = moment(datecell).format("DD-MM-YYYY");
    console.log(chosendate);
    $("#msgDate").html('Pour le : '+ chosendate);
    $("#date").attr("value", datecell);
});

// modal resa calendar checked ///////////////////////////

$('.validModalResa').click(() => {

    if ($('#morning').is(':checked')) {
        let matin = "morning";
        let mat = "Matin"
        $("#dateMatin").html(mat);
        $('#am').attr('value', matin);
    }
    if($('#afternoon').is(':checked')) {
        let aprem = "afternoon";
        let ap = "Après-midi"
        $("#dateAprem").html(ap);
        $('#pm').attr('value', aprem);
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
        $("#ecran").attr('value', ecran);
    }
    if ($('#hammock').is(':checked')) {
        let hamac = "Hamac";
        $("#optionHamac").html(hamac);
        $("#ham").attr('value', hamac);
    }
    console.log("option");
    $("#msgOption").html('Les Détails');
});

//-----------------------------------------------------------
