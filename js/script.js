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
 var modifiedBox=document.getElementById(101);
