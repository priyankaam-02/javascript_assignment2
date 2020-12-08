let data=Array();
let x=0;
function add(){
    data[x] = document.getElementById("text1").value;
    alert("Element "+data[x]+" added");
    x++;
    document.getElementById("text1").value = "";
}

function display(){
    let z = "<hr/>";   
    
   for (let y=0; y<data.length; y++)
   {
     z += "Element " + y + " = " + data[y] + "<br>";
   }
   document.getElementById("res").innerHTML = z;
}

