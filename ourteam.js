const item=document.querySelectorAll(".items");
console.log(item);
var index=0;
alert("note : this slider is work manually and automatically every two seconds");
var a=setInterval(function(){
    slide(1);
    
},3000);

function slide(a){
    
    if(a==1){
        index=index+1;
        console.log(index);
    }
    if(a==-1){
        index--;
        
    }
    if(index>2){
        index=0;
    }
    if(index< 0){
        index=item.length-1;
       
    }
    for(var i=0;i<item.length;i++){
    item[i].style.display="none";
    }
    item[index].style.display="block";
    item[index].style.transition="3s ease";

     
}

function delete1(){
    clearInterval(a);
}