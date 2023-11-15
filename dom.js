
var btn1=document.getElementById("btn1");

var input=document.getElementById("input");
input.value=0;
btn1.addEventListener("click",function change1(){

    if(input.value>0){
        input.value--;
    }
    else{
        input.value;    
    }

});

var btn2=document.getElementById("btn2");

btn2.addEventListener("click",function change2(){
    input.value++;
});


