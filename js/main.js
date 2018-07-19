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
        $("#dateMatin").html("-" + " " + matin);
        $('#dateMatin').attr('name', matin);
    }
    if($('#afternoon').is(':checked')) {
        var aprem = "Après-midi";
        $("#dateAprem").html("-" + " " + aprem);
        $('#dateAprem').attr('name', aprem);
    }
    if ($('#cowork').is(':checked')) {
        var espace = "Espace Coworking";
        $("#optionEspace").html("-" + " " + espace);
    }
    if ($('#solo').is(':checked')) {
        var espace = "Bureau";
        $("#optionEspace").html("-" + " " + espace);
    }
    if ($('#screen').is(':checked')) {
        var ecran = "Ecran";
        $("#optionEcran").html("-" + " " + ecran);
        $("#optionEcran").attr('name', ecran);
    }
    if ($('#hammock').is(':checked')) {
        var hamac = "Hamac";
        $("#optionHamac").html("-" + " " + hamac);
        $("#optionHamac").attr('name', hamac);
    }
    console.log("option");
    $("#msgOption").html('Vous avez choisi les options suivantes : ');
    $("#msgDate").html('Vous venez le : ');

});
//-----------------------------------------------------------
