
// MENU NAVIGAZIONE

$(document).ready(function(){
    var menu_items = $("#menu_items");
    // var menu = ['Chi siamo','Lavorazioni','Progetti & realizzazioni','Area Tecnica',];
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

