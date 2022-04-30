$(document).ready(function(){
    var menu_items = $("#menu_items");
    var menu = ['Chi siamo','Lavorazioni','Progetti & realizzazioni','Area Tecnica',];
    $.each(menu,function(index,value){
        menu_items.append($('<li class="nav-item"> <a class="nav-link" aria-current="page" href="#">' + value + " </a> </li>"));
    });
});