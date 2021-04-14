

/* 

TO DO LIST 

1. popolazione to do list 
2. inserendo un nuovo todo con un input testuale e gli eventi da tastiera
3. Rimozione todo con click su icona
4. Cliccando sul testo compare uno sbarramento a indicarne il completamento


*/

$(document).ready( function(){



var todoItems = [
    {
        text: "seguire la lezione di Boolean",
        completed: false,

    },
    {
        text: "eseguire l'esercizio",
        completed: true,

    },
    {
        text: "mangiare",
        completed: false,

    },
    {
        text: "allenarsi",
        completed: true,

    },
    {
        text: "fare la spesa",
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

    
    
// 2 INSERIMENTO NUOVO TO DO 

// evento tastiera
newInput.keyup( function(event){

    console.log(event.which); 
        
        if (event.which === 13){
            var newText = newInput.val().trim();
            

                // template 
            if (newText != ""){
                var item = template.clone();
                item.find(".text").text(newText);

                // inserire template nella lista
                list.append(item);

                // reset (to do appena scritta si cancella)
                newInput.val("");
            }

        }
  
    });
    

// 3 RIMOZIONE TO DO AL CLICK DELL'ICONA --> metodo per comprendere anche i to do aggiunti dopo
$("body").on("click", ".list li i", function(){

    $(this).parent().remove();

});

// 4 CLICCANDO SUL TESTO COMPARE UNO SBARRAMENTO 
$("body").on("click", ".text", function(){

    $(this).toggleClass("completed");

});


    //end doc ready
});



