var input=document.querySelector('.content');
var items=Array.from(document.querySelectorAll('.item'));
items.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(this.id=='delete_all')
        input.innerHTML='';
        else if(this.id=='result'){
            input.innerHTML=eval(input.innerHTML);
        }
        else if(this.id=='negative'){
            input.innerHTML=(input.innerHTML)*(-1);
        }          
        else if(this.id=='multiplication'){
            input.innerHTML=(input.innerHTML)+'*';
        }
        else if(this.id=='remainder'){
            input.innerHTML=(input.innerHTML)/100;
        }
        else if(this.id=='comma'){
            input.innerHTML=(input.innerHTML)+'.';
        }
        else if(this.id=='division'){
            input.innerHTML=(input.innerHTML)+'/';
        }
        else input.innerHTML+=btn.innerHTML;
    })
})
