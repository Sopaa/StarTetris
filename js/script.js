  var grilleWidth=10;
  var grilleHeight=20;
  var laGrille=document.querySelector('.Container')
 for(i=0;i<grilleWidth;i++){
   laGrille.innerHTML+='<ul class="column" id='+i+'></ul>';
   var column=document.getElementById(i);
   for(n=0;n<grilleHeight;n++){
     column.innerHTML+='<li class="box" id='+((i+1)*100+(n+1))+'></li>'
   }
 }
 var a;
 var b;
function createBox(){
    a=(Math.floor(Math.random() * 10) + 1)*100;
    console.log(a);
    b=1;

    var modifiedBox=document.getElementById(a+b);
    modifiedBox.className="boxModified";
}
createBox();
window.addEventListener('keydown', function(event){

    var modifiedBox=document.getElementById(a+b);
    modifiedBox.className="box";

      if(event.which===40 && b<20){
        b+=1;
      }
      else if(event.which===39 && a<1000){
        a+=100;
      }
      else if(event.which===37 && a>100){
        a-=100;
      }

      var modifiedBox=document.getElementById(a+b);
      modifiedBox.className="boxModified";

      if(b===20){
        modifiedBox.className="boxFix";
        createBox();
      }

    var compar=document.getElementById(a+(b+1));
    if(compar.classList.contains("boxFix")===true){
      modifiedBox.className="boxFix";
      if(b===2){
        alert('VAS NIQUER TA MERE');
      }
      createBox();
    }
      
  })
