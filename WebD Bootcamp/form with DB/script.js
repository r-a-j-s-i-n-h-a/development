import {getDatabase ,get, set, ref, update,remove, child } from  "https://www.gstatic.com/firebasejs/9.9.0/firebase-database.js";



var nameV,branchV,dateV,mailV,genV;

const db=getDatabase();




//getting data

var namebox = document.getElementById("namebox");
var branchbox = document.getElementById("branchbox");
var datebox = document.getElementById("datebox");
var mailbox = document.getElementById("mailbox");
var genbox = document.getElementsByName("gen")



function insertData(event){
    event.preventDefault();//for pausing the event
    readData();
    


    set(ref(db, "data/" + mailV),{
        name: nameV,
        branch:branchV,
        Dob:dateV,
        email:mailV,
        gender:genV,
        
    }).then(() => {
        alert("Data Stored Sucessfully");
    }).catch((error)=>{alert("Unsucessfull",error);
})
 clearData();
}


//read data

function readData(){

    nameV = namebox.value;
    branchV= branchbox.value;
    dateV=datebox.value;
    mailV=mailbox.value;
    genV=genbox.value;
   
    console.log(nameV,branchV,dateV,mailV,genV);
}


function clearData(){
    namebox.value = "";
    branchbox.value= "";
    datebox.value="";
    mailbox.value="";
    
}

document.querySelectorAll('.btns')[0].onclick = insertData;
