$(function(){
    var error=false;
    var persons=new Array();
    var date = new Date();
    var currentYear = date.getFullYear();
    var currentMonth = parseInt(date.getMonth()+1);
    var currentDay = date.getDate();
    
$("#submitBtn").click(verifyForm);
        

function findAge(){
var bd = new Date($("#date").val());
var day = bd.getDate();
var month = bd.getMonth()+1;
var year = bd.getFullYear();
    
    
var age= currentYear-year;
if(month>currentMonth)
    return age-1;
else if(month<currentMonth) 
    return age;
else if(month==currentMonth)
    {
        if(day>=currentDay)
        return age-1;
        else
        return age;
    }
}   
    
function verifyForm(){
    var fname=$("#first_name").val();
    var lname=$("#last_name").val();
    
    if(fname.trim().length<2 || fname==""){
        $("#fnameErr").html("Invalid input");
        error=true;
    }
    if(lname.trim().length<2 || lname==""){
        $("#lnameErr").html("Invalid input");
        error=true;
    }
    if(findAge()<0){
        $("#dateErr").html("Invalid date");
        error=true;
    }
    if(findAge()>0){
        $("#dateErr").html("");
       
    }
    
    if(error==false){
     personData();
    }
}
    
$("#first_name").keyup(function() {
     var fname=$("#first_name").val();
     if(fname.trim().length>1){
       $("#fnameErr").html("");
     }
    });

$("#last_name").keyup(function() {
     var lname=$("#last_name").val();
     if(lname.trim().length>1){
       $("#lnameErr").html("");
     }    
    });
    

    
function personData(){
var newPerson=new Object();

newPerson.firstName=$("#first_name").val();
newPerson.lastName=$("#last_name").val();
newPerson.dob=$("#date").val();
newPerson.gender=$("input[name='gender']:checked").val();
newPerson.personAge=findAge();

persons.push(newPerson);
resultTable();
}
    
function resultTable(){
    
var tableDiv=$("#formTable");
tableDiv.empty();
    
if(persons.length>0){
var table=$("<table border='1'></table>")
table.append('<tr><th>First Name</th><th>Last Name</th><th>Birth Date</th><th>Gender</th><th>Age</th></tr>');
tableDiv.append(table);
}
    
persons.forEach(function(obj){
var newline=$('<tr><td>'+obj.firstName+'</td><td>'+obj.lastName+'</td><td>'+obj.dob+'</td><td>'+obj.gender+'</td><td>'+obj.personAge+'</td></tr>');
 
var remBtn=$("<button class='rem'>X</button>");
$(".rem").on("click",function(){
                $(this).parent().remove();
            });    
newline.append(remBtn);    
table.append(newline);
});
}
    
});
    /*
    var elem1=$("<span></span>").text(fname);
          //  var elem2=$("<span></span>").text(lname);
            $(elem1).append("<button class='rem'>X</button>");
            $("#formTable").append(elem1);

            
            $(".rem").on("click",function(){
                $(this).parent().remove();
            });
    
*/