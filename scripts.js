var input=document.querySelector('.content');
var items=Array.from(document.querySelectorAll('.item'));
var x='*';
items.forEach(function(btn){
    btn.addEventListener('click',function(){
        if(input.innerHTML=='0')
        input.innerHTML='';
        if(btn.innerHTML=='AC')
        input.innerHTML='';
        else if(btn.innerHTML=='='){
            input.innerHTML=eval(input.innerHTML);
        }
        else if(btn.innerHTML=='+/-'){
            input.innerHTML=(input.innerHTML)*(-1);
        }          
        else if(this.id=='x'){
            input.innerHTML=(input.innerHTML)+'*';
        }
        else if(this.id=='%'){
            input.innerHTML=(input.innerHTML)/100;
        }
        else if(this.id==','){
            input.innerHTML=(input.innerHTML)+'.';
        }
        else if(this.id=='÷'){
            input.innerHTML=(input.innerHTML)+'/';
        }
        else input.innerHTML+=btn.innerHTML;
    })
})
