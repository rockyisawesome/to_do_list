let add = document.getElementById('add');   //button ki id he beta ye
let clear = document.getElementById('clear');

function update(){
    //console.log("updating..");
   document.getElementById('title').value = "";
   document.getElementById('description').value = "";

  

    // if (localStorage.getItem('itemsJson') == null) {
    //     itemJsonArr = [];
    //     //itemJsonArr.push([tit, desc]);
    //     localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));

    // }
    // else {

    //     itemJsonArrStr = localStorage.getItem('itemsJson');
    //     itemJsonArr = JSON.parse(itemJsonArrStr);
    //     itemJsonArr.push([tit, desc]);
    //     localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    // }

    // if (localStorage.getItem('itemsJson') == null){
    //     return;
    // }
   // else {
       if(localStorage.getItem('itemsJson') == null){
           return;
       }
    console.log("hello");
    let  itemJsonArrStr = localStorage.getItem('itemsJson');
    let  itemJsonArr = JSON.parse(itemJsonArrStr);



    let tableBody = document.getElementById("tableBody"); 
    let str = "";
    itemJsonArr.forEach((element, index) => {

        str += `
            <tr>
                <th scope="row">${index+1}</th>
                <td>${element[0]}</td>
                <td>${element[1]}</td>
                <td><button class="btn btn-sm btn-danger" onclick = "deleted(${index})">Delete</button></td>
            </tr>`;
    });


    console.log("hello");
    tableBody.innerHTML = str;
//}


}

function deleted ( itemIndex){

    itemJsonArrStr = localStorage.getItem('itemsJson');
    itemJsonArr = JSON.parse(itemJsonArrStr);

    // now delete the index
    itemJsonArr.splice(itemIndex, 1);
    localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    update();

}



function getUpdate(){
    console.log("updating..");
    tit = document.getElementById('title').value;
    desc = document.getElementById('description').value;

    if(tit = "" || desc == ""){
        alert("fill the boxes");
        return;
    }

    else if (localStorage.getItem('itemsJson') == null) {
        let itemJsonArr = [];
        itemJsonArr.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));

    }
    else {

        let itemJsonArrStr = localStorage.getItem('itemsJson');
        let itemJsonArr = JSON.parse(itemJsonArrStr);
        itemJsonArr.push([tit, desc]);
        localStorage.setItem('itemsJson', JSON.stringify(itemJsonArr));
    }



    update();


}

function clearLocalStorage(){
    console.log("clearing local storage")
    localStorage.clear();
    localStorage.setItem('itemsJson', `[]` );
    update();
}
update();

add.addEventListener("click", getUpdate);


//this is clear_feature branch




