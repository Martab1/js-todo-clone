

/* 

TO DO LIST 

1. popolazione to do list 
2. inserendo un nuovo todo con un input testuale e gli eventi da tastiera
Rimozione todo con click su icona
Cliccando sul testo compare uno sbarramento a indicarne il completamento


*/

$(document).ready( function(){



    var todoItems = [
        {
            text: "to do 1",
            completed: false,
    
        },
        {
            text: "to do 2",
            completed: true,
    
        },
        {
            text: "to do 3",
            completed: false,
    
        },
        {
            text: "to do 4",
            completed: true,
    
        },
        {
            text: "to do 5",
            completed: false,
    
        },
    ];
    
    
    // referenze
    
    var list = $(".list");
    var newInput = $(".add-input");
    var template = $(".template li");
    
     
    
    // 1 POPOLAZIONE TO DO LIST
    
    // iter sull'array
    for (var i = 0; i < todoItems.length; i++){
        // obj
        var toDo = todoItems[i];
    
        // creare clone template
        var item = template.clone();
    
        // inserire text dell'obj nel template
        item.find(".text").text(toDo.text);
    
        // controllo completed
        if(toDo.completed ){
            item.find(".text").addClass("completed");
        }
     
    
        // inserire template nella lista
        list.append(item);
     
    
    }
    
    
    // 2 inserimento nuovo to do 
    newInput.keyup( function(event){

        console.log(event.which);
    });
    





    //end doc ready
});



