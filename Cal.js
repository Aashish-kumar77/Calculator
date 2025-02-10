function show(x) {
   let num = document.getElementById('container1').value;
   document.getElementById('container1').value= num + x;

}

function Cleardisplay() {
   document.getElementById('container1').value = "";
}

function del() {
   let current_Val = document.getElementById('container1').value;

   document.getElementById('container1').value = current_Val.slice(0, -1);
}


function calculate(){
   let exp=document.getElementById('container1').value;
   try{
      let result=eval(exp);
      document.getElementById('container1').value=result;
   }
   catch(error){
      document.getElementById('container1').value=error;
   }
}