var arr1 = [2,3,4,5,6];
var arr2=["Adfar","a","x"]
var arr3 = [...arr1,...arr2]
arr1[3]="ADfar";
console.log(arr3)
console.log(arr1)