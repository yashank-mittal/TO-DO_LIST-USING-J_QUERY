$('ul').on('click','li',function(){
    $(this).toggleClass('completed')
})

$('ul').on('click','span',function(e){
    $(this).parent().fadeOut(500,function(){
        $(this).remove();
    })
    event.stopPropagation();
})

$('input[type="text"]').keypress(function(e){
    if(e.which === 13){
        let todotext = $(this).val();
        console.log(todotext);

        const todo =`<li><span><i class="far fa-trash-alt"></i></span>&nbsp&nbsp&nbsp${todotext}</li>`;
        $('ul').append(todo);
        $(this).val("")
    }
})

$('#plus').click(function(){
    $('input[type="text"]').fadeToggle(400);
})
