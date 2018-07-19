// Resa whithout registration
//------------------------------
$('.formula').click(function() {
    let formulinfo = $(this).attr('formula'); 
    console.log(formulinfo);
    $("#msginfo").html('Vous avez choisi la formule : ');
    $("#msgformule").html(formulinfo);
    $("#msgformule").attr('name',formulinfo);
})
    
//------------------------------
// End resa whithout registration



// modal resa calendar checked ///////////////////////////

$('.validModalResa').click(() => {

    if ($('#morning').is(':checked')) {
        var matin = "Matin";
    }
    if($('#afternoon').is(':checked')) {
        var aprem = "Après-midi";
    }
    if ($('#cowork').is(':checked')) {
        var espace = "Espace Coworking";
    }
    if ($('#solo').is(':checked')) {
        var espace = "Bureau";
    }
    if ($('#screen').is(':checked')) {
        var ecran = "Ecran";
    }
    if ($('#hammock').is(':checked')) {
        var hamac = "Hamac";
    }
    console.log("option");
    $("#msgOption").html('Vous avez choisi les options suivantes : ');
    $("#optionEspace").html("-" + " " + espace);
    $("#optionEcran").html("-" + " " + ecran);
    $("#optionEcran").attr('name', ecran);
    $("#optionHamac").html("-" + " " + hamac);
    $("#optionHamac").attr('name', hamac);

    $("#msgDate").html('Vous venez le : ');
    $("#dateMatin").html("-" + " " + matin);
    $('#dateMatin').attr('name', matin);
    $("#dateAprem").html("-" + " " + aprem);
    $('#dateAprem').attr('name', aprem);

});
//-----------------------------------------------------------
