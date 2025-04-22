

let r = parseFloat(process.argv[2]);

circleArea(r);
circleCircumference(r);

function circleArea(r){
    let area = Math.PI* Math.pow(r,2);
    console.log(`The Circle/'s R: ${r} , Circle Area : ${area}`);
}

function circleCircumference(r){
    let circumference = ( 2* Math.PI*r);
    console.log(`Circle Area is : ${circumference}`);
}
