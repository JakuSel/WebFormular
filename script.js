(function($){
//validation
    $(document).ready(function(){
        $("#form").validate();
    });
    
//function
$("#first_name").keyup(function(event) {
     var fname=$("#first_name").val();
          /* Act on the event */
   });

   $("#last_name").keyup(function(event) {
     var lname=$("#last_name").val();
     /* Act on the event */
   });

function processFormData(){
var newPerson=new Object();
newPerson.firstName=$("#first_name").val();
newPerson.lastName=$("#last_name").val();
newPerson.dob=$("#birthdate").val();
newPerson.gender=$("input[name='gend']:checked").val();

     persons.push(newPerson);
     printTable();

   }

function printTable(){
var tablediv=$('.table');
     tablediv.empty();
var selectedGender = getSelectedGender();
var checkedAge=isCheckedAge();

var arr=new Array();

     persons.forEach(function(obj){

       if(selectedGender == 'm' && obj.gender=='true'){
         //console.log("muz");
            arr.push(obj);
       }
       if(selectedGender == 'f' && obj.gender=='false'){
         //console.log("zeny");
            arr.push(obj);
       }
       if(selectedGender == 'a'){
         //console.log("muzy a zeny");
            arr.push(obj);
       }
     });

     if(arr.length>0){

        var table = $("<table/>");
        var line=$("<tr/>");
        var col1=$("<th/>");
        $(col1).append('First name');
        var col2=$("<th/>");
        $(col2).append('Last name');
        var col3=$("<th/>");
        if(checkedAge){
              $(col3).append('Age');
        }
        else {
             $(col3).append('Date of birth');
        }
        var col4=$("<th/>");
        $(col4).append('Gender');
        var col5=$("<th/>");
        $(col5).append('Delete');
        line.append(col1);
        line.append(col2);
        line.append(col3);
        line.append(col4);
        line.append(col5);
        table.append(line);
        tablediv.append(table);
     }
     //for(i=0;i<persons.size();i++){}
     arr.forEach(function(obj){
        var line=$("<tr/>");
        var col1=$("<td/>");
        $(col1).append(obj.firstName);
        var col2=$("<td/>");
        $(col2).append(obj.lastName);
        var col3=$("<td/>");
        $(col3).append(obj.dob);
        var col4=$("<td/>");
        $(col4).append(obj.gender);
        line.append(col1);
        line.append(col2);
        line.append(col3);
        line.append(col4);
        table.append(line);
     });

   }

   function getSelectedGender(){
      var value = $("#selectGender").val();
      return value;
   }

   $("#selectGender").change(function(event) {
     /* Act on the event */
     printTable();
   });

   function isCheckedAge(){
     return $("#showAge").is(':checked');
   }

   $("#showAge").change(function(event){
     printTable();
   });
});
 
})(jQuery);