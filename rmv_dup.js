function remove_duplicate(arr){
    var data=[];
    val={};
    for(var x=0;x<arr.length;x++){

        val[arr[x]]=0;
    }
    for(x in val){
        data.push(x);
    }
    return data;
}
let arr1=['a','b','b','c','C','d'];
let arr2=arr1.map(arr1=>arr1.toLowerCase());
let res=remove_duplicate(arr2);
document.write(arr1+"<br>");
document.write(res);