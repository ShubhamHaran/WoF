const colour=["#3f51b5","#ff9800","#e91e63","#4caf50","#009688","#795548","#9c27b0","#f44336"]
var number = 1000+Math.ceil(Math.random() * 1000);
window.addEventListener('load', (event) => {
    displayItems();
});
function rotate()
{
    let container = document.querySelector(".container-spinner");
    container.style.transform = "rotate(" + number + "deg)";
	number += 1000+Math.ceil(Math.random() * 1000);
}
function displayItems()
{
    var colleges=JSON.parse(sessionStorage.getItem("colleges"));
    var s="<tr class='row'> <th class='col-sm-auto'> College name </th> <th class='col-sm-auto'> Action </th> </tr>";
    for(var i=0;i<colleges.length;i++)
    {
        s+="<tr class='row'> <td class='col-sm-auto'>"+colleges[i]+"</td> <td class='col-sm-auto'><button class='btn btn-danger col-sm-auto' type='submit' onClick='removeItemFromList("+i+")'>Remove </button></td></tr>";
    }
    document.getElementById("college-table").innerHTML=s;
}
function addItemToList() 
{
    var name=document.getElementById("clg").value;
    if(name === ""){
        window.alert("Please enter name of the college!");
        displayItems();
        return; 
    }
    var colleges = JSON.parse(sessionStorage.getItem("colleges"));
    name=name.toUpperCase();
    if( colleges === null ){ colleges=new Array(); }

    for (var i=0;i<colleges.length;i++) 
        {
            if (colleges[i] === name) 
            {
                window.alert("We know you're overwhelmed but "+name+" already exists in the wheel.")
                return;
            }
        }
    colleges.push(name);
    sessionStorage.setItem("colleges", JSON.stringify(colleges));
    location.reload();
    //setItems();
}
function removeItemFromList(name) 
{ 
    var colleges = JSON.parse(sessionStorage.getItem("colleges"));
    if( colleges === null ) colleges=new Array();
    if(name<colleges.length)
    colleges.splice(name, 1);
    sessionStorage.setItem("colleges", JSON.stringify(colleges));
    location.reload();
        //setItems();
}