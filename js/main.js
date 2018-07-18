// Resa whithout registration
//------------------------------
$('.formula').click (function(){
    let formulinfo = $(this).attr('formula'); 
    console.log(formulinfo);
    $("#msginfo").html('Vous avez choisi la formule : ');
    $("#msgformule").html(formulinfo);
    $("#msgformule").attr('name',formulinfo);
})
    
//------------------------------
// End resa whithout registration

