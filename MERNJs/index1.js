/*function largest(x,y,z){

    if(x>y  && x>z ){
        
        console.log("x is greater");
    }
    else if(y>z){
        console.log("y is greater");
    }
    else if(x==y && y==z){
        console.log(x+"and"+y +"and"+z+" are equal");
    }
    else if(x==y){
        console.log(x+"and"+y +"are equal");
    }
    else if(y==z){
        console.log(y+"and"+z+"are equal");
    }
    else{
        console.log(x+"and "+y+ "are equal");
    }
}
largest(30,30,20);*/
// largest of two Number
 let x=180;
 let y=290;
 switch(x>y)
 {
    case true: console.log("x is greater");
    break;
    default:console.log("y is greater");
 }
   