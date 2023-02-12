function addNewWeField(){
    //console.log("addNewWeField")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("weField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows" ,3);
    newNode.setAttribute("placeholder" ,"Enter Your Experience");

    let weOb = document.getElementById("we");
    let weButtonOb =  document.getElementById("weAddButton");

    weOb.insertBefore(newNode , weButtonOb);
}

function addNewQeField(){
    //console.log("addNewQeField")
    let newNode = document.createElement("textarea");
    newNode.classList.add("form-control");
    newNode.classList.add("qeField");
    newNode.classList.add("mt-2");
    newNode.setAttribute("rows" ,3);
    newNode.setAttribute("placeholder" ,"Enter Your Qualification");

    let qeOb = document.getElementById("qe");
    let qeButtonOb =  document.getElementById("qeAddButton");

    qeOb.insertBefore(newNode , qeButtonOb);
}


//generation of CV : Fetching data from html and storing it into the template;
function generatecv(){
    //console.log("generate CV");
    let nameField = document.getElementById("nameField").value;
    let nameT1 = document.getElementById("NameT1");
    nameT1.innerHTML = nameField;
    document.getElementById("nameT2").innerHTML=nameField;

    document.getElementById("contactT").innerHTML = document.getElementById("contactField").value;
    document.getElementById("addressT").innerHTML = document.getElementById("addressField").value;
    document.getElementById("linT").innerHTML = document.getElementById("socialField").value;
    document.getElementById("objectiveT").innerHTML = document.getElementById("obField").value;

    //work experience feild (making loop for fethching from multiple text areas)

    let wes = document.getElementsByClassName("weField");
    let str='';
    for(let e of wes){
        str= str+`<li> ${e.value} </li>`;
    }
    document.getElementById("weT").innerHTML = str;

    //academic qualification

    let aqs = document.getElementsByClassName("qeField");
    let st ='';
    for(let j of aqs){
        st = st+`<li> ${j.value} </li>`
    }
    document.getElementById("aqT").innerHTML = st;

    //for dynamic picture upload

    let file = document.getElementById("picField").files[0];
    //console.log(file);
    let reader = new FileReader();
    reader.readAsDataURL(file);
    reader.onload = function(){
    document.getElementById("imgT").src = reader.result;
    };

    
    //toggler for generate cv
    document.getElementById("cv-form").style.display ='none';
    document.getElementById("cv-template").style.display ='block';
}


//fuction for printing resulsts in pdf format
function printCV(){
    window.print();
}