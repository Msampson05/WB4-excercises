"use strict"; 

function parsePartCode(partCode){
    console.log("Supplier Code");
    console.log(partCode.supplierCode + partCode.productNumber + partCode.size);
    // console.log(partCode.productNumber);
    // consocle.log(partCode.size);


}
let partCode = {
    supplierCode: "XYZ:1254-L",
    productNumber: "238483",
    size: "-23244"
}

function parsePartCode1(partCode1){
  console.log("Supplier Code 2")
  console.log(partCode1.supplierCode + partCode1.productNumber + partCode1.size);
}

let partCode1 = {
    supplierCode: "ABCD:2245-9",
    productNumber: "357784",
    size: "-0094"
}


parsePartCode(partCode);
parsePartCode1(partCode1);