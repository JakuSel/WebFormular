$(document).ready(function(){
   $(".odo").click(function(event){
       var error=false;
       var fname=$("#fname").val();
       if (fname.trim().length<2){
           console.log("Menej ako dva");
           $().html("Invalid name");
           error=true;
       }
           
   }); 
});