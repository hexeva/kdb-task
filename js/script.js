
// MENU NAVIGAZIONE

$(document).ready(function(){
    var menu_items = $("#menu_items");

    var menu = [
        {
            label: 'Chi siamo',
            href: '#'
        },
        {
            label: 'Lavorazioni',
            href: '#'
        },
        {
            label: 'Progetti & Realizzazioni',
            href:'#'
        },
        {
            label: 'Area Tecnica',
            href: '#'
        },
    ];
    $.each(menu,function(index,value){
        // console.log(value.href);
        
        menu_items.append($('<li class="nav-item"> <a class="nav-link mx-3"  href=" '+ value.href +' " >' + value.label + " </a> </li>"));
           
    });

    
    
});

 // FUNZIONE CAROSELLO PER BOTTONE
    
 $("#carousel").on('click',  function() {    
    if($("#first").hasClass("active")){
    $("#first").removeClass("active");
    $("#second").addClass("active");
    }else if($("#second").hasClass("active")){
        $("#second").removeClass("active");
        $("#third").addClass("active");
    }else if($("#third").hasClass("active")){
        $("#third").removeClass("active");
        $("#first").addClass("active");
    } 
        
});



   
 



