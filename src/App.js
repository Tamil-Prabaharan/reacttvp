

function Tamil(){
var [v1,,v3,...v2] = [11,22,33,44,55,66,77,88,99]
return(
  <>
  {typeof(v1)}
  <br></br>
  {typeof(v2)}
  <br></br>
  {typeof(v3)}
  <br></br>
  {Array.isArray(v2) && "this is array"}
  <br></br>
  {v2.map(i=><><br></br>{i} </>)}
  </>
)
}
export default Tamil

/*function Tamil(){
  var arr =[11,22,33,-44,-55,-20]
  var json ={sno:1001,name:"tamil"}
  var boolen =true;
  var sum =0;
  return(
    <>
    <h1>data type of an array:{typeof(arr)}</h1>
    <h1>data type of an json:{typeof(json)}</h1>
    <h1>data type of an booolean:{typeof(boolen)}</h1>
     <h1>data type of an s1:{typeof(sum)}</h1>
     <h1>----------------------------</h1>
     <h1>arr variable:{(Array.isArray(arr) && "this is array") || "this not an array"}</h1>
     <h1>arr variable:{(Array.isArray(json) && "this is array") || "this not an json"}</h1>
    </>
  )
}
export default Tamil

/*function Tamil(){
var arr =[11,22,33,-44,-55,-20]
var sum =0;
var sum1 =0, sum2=0;
var big=[0];
return(
  <>
  <h1>sum of array</h1>
  <h1 style={{display:"none"}}>{arr.map((item) => sum = sum+item)}</h1>
  <h1>answer:{sum}</h1>

  <h1>find largest number in array</h1>
  <h1>
  {arr.map((item) => big<item && <>{big=item}</>)}
  </h1>
  <h1>answer:{big}</h1>

  <h1>{arr.map((item)=>item%2===0 && <>{sum1 = sum1+1}</>)}</h1>
  <h1>even numbers count in array:{sum1}</h1>

  <h1>{arr.map((item)=>item<0 && <>{sum2 = sum2+1}</>)}</h1>
  <h1>negative numbers count in array:{sum2}</h1>
  </>
     )
}
export default Tamil

/*function Tamil(){
var arr=[11,22,33,44,55]
return(
  <>
  <h1>loop map method print all elements</h1>
  <ol type="A">
    {arr.map((item)=><li>{item}</li>)}
  </ol>

  <h1>loop map method even and odd numbers only</h1>
  <ol type="circle">
    {arr.map((item)=>
    <li>
    {(item%2===0 && item+"even")||(item%2!==0 && item+"odd")}
    </li>
    )}
  </ol>

  <h1>loop map method even  only</h1>
  <ul type="square">
    {arr.map((item)=>
    <>
    {(item%2===0 && <li>{item}</li>)}
    </>
    )}
  </ul>
  </>
)
}
export default Tamil

 
/*
function Tamil(){
  var sobj={
    rno:1994,
    sname:"tamil",
    mark:{
      tamil:88,
      english:98,
      maths:88
    }
  }

  const dis=({rno,sname,mark:{tamil,english,maths}})=>{
    return [rno,sname,tamil,english,maths]
  }

  var [v1,v2,v3,v4,v5,v6]=dis(sobj)
  return(
    <>
    
      <h1> Nested Object Destruction</h1>
      <h1>Roll Number:{v1}</h1>
      <h1>Student Name:{v2}</h1>
      <h1>Tamil mark:{v3}</h1>
      <h1>English mark:{v4}</h1>
      <h1>Maths mark:{v5}</h1>
    
    </>
  )
}
export default Tamil

/*function Tamil(){
  var sobj={
    rno:1994,
    sname:"tamil",
    mark:43
  }

  const dis=({rno,sname,mark})=>{
    return [rno,sname,mark]
  }

  var [v1,v2,v3]=dis(sobj)
  return(
    <>
    
      <h1> Object Destruction</h1>
      <h1>Roll Number:{v1}</h1>
      <h1>Student Name:{v2}</h1>
      <h1>Mark:{v3}</h1>
    
    </>
  )
}
export default Tamil

/*function Tamil(){
const show=(a,b)=>
{
  var add = a+b;
  var sub = a-b;
  var mul = a*b;
  var div = a/b;
  return [add,sub,mul,div]
}
var [v1,v2,v3,v4] = show(11,22)
return(
  <>
  <h1>Function Destracting</h1>
  Addition:{v1}<br></br>
  subtraction:{v2}<br></br>
  multiplication:{v3}<br></br>
  division:{v4}<br></br>
  </>
)
}
export default Tamil


/*function Tamil(){
  var [v1,v2,...v3] = [11,22,33,44,55,66,77,88,99,100]
 return(
  <>
  <h1>Array Destracting : To get data from source</h1>
  value 1 : {v1}
  <br></br>
  value 2 : {v2}
  <br></br>
  value 3 : {v3}
  </>
 )
}
export default Tamil

/*function Tamil(){
  const show=(a,b,c)=>{
    if(true){
      var k =100;
    }
    document.getElementById("r1").innerHTML="arrow function show"+(a+b+c+k)
  }
  function dis(a,b,c){
    var m = 100;
     document.getElementById("r2").innerHTML="normal display function "+(a+b+c+m)
  }
  return(
    <>
    <h1>arrow function with parameter and var let const variables</h1>
    <h1>let and const cant out of the statement it is an error var is global variable</h1>
    <button onClick={()=>dis(11,22,33)}>click me</button>
    <button onClick={()=>show(11,22,33)}>click me</button>
    <div id="r1"></div>
    <div id="r2"></div>
    </>
  )
  }
  export default Tamil

/*function Tamil(){
  const show=(a,b,c)=>{
    document.getElementById("r1").innerHTML="arrow function show"+(a+b+c)
  }
  function dis(a,b,c){
     document.getElementById("r2").innerHTML="normal display function "+(a+b+c)
  }
  return(
    <>
    <h1>arrow function with parameter</h1>
    <h1>retun contains only arrow function if parameter is passed</h1>
    <button onClick={()=>dis(11,22,33)}>click me</button>
    <button onClick={()=>show(11,22,33)}>click me</button>
    <div id="r1"></div>
    <div id="r2"></div>
    </>
  )
  }
  export default Tamil


/*function Tamil(){
const show=()=>{
  document.getElementById("r1").innerHTML="arrow function show"
}
function dis(){
   document.getElementById("r2").innerHTML="normal display function "
}
return(
  <>
  <h1>arrow function without parameter</h1>
  <button onClick={dis}>click me</button>
  <button onClick={()=>dis()}>click me</button>

  <button onClick={show}>click me</button>
  <div id="r1"></div>
  <div id="r2"></div>
  </>
)
}
export default Tamil

/*function Tamil(){
  var stud =[{rno:1001,sname:"tamil",mark:85},
             {rno:1002,sname:"vignesh",mark:86},
             {rno:1003,sname:"prabhu",mark:75}
            ]
  return(
    <>
    <h1> array  contains json</h1>
    <h1>rool number:{stud[0].rno}</h1>
    <h1>rool number:{stud[0].sname}</h1>
    <h1>rool number:{stud[0].mark}</h1>
    <h1>rool number:{stud[1].rno}</h1>
    <h1>rool number:{stud[1].sname}</h1>
    <h1>rool number:{stud[1].mark}</h1>
    <h1>rool number:{stud[2].rno}</h1>
    <h1>rool number:{stud[2].sname}</h1>
    <h1>rool number:{stud[2].mark}</h1>
    </>
  )
}
export default Tamil

/*function Tamil(){
  var stud = {
    rno:1001,
    sname:"tamil",
    subjects:[77,88,75]
  }
  return(
    <>
    <h1>json with array</h1>
    <h1>roll number:{stud.rno}</h1>
    <h1>name of student:{stud.sname}</h1>
    <h1>tamil mark:{stud.subjects[0]}</h1>
    <h1>english mark:{stud.subjects[1]}</h1>
    </>
  )
}
export default Tamil

/*function Tamil(){
  var stud = {
    rno:1001,
    sname:"tamil",
    subjects:{
    mark1:88,
    mark2:75}
  }
  return(
    <>
    <h1>nested json</h1>
    <h1>roll number:{stud.rno}</h1>
    <h1>name of student:{stud.sname}</h1>
    <h1>tamil mark:{stud.subjects["mark1"]}</h1>
    <h1>english mark:{stud.subjects["mark2"]}</h1>
    </>
  )
}
export default Tamil

/*function Tamil(){
  var stud = {
    rno:1001,
    sname:"tamil",
    mark1:88,
    mark2:75
  }
  return(
    <>
    <h1>json</h1>
    <h1>roll number:{stud.rno}</h1>
    <h1>name of student:{stud.sname}</h1>
    <h1>tamil mark:{stud.mark1}</h1>
    <h1>english mark:{stud.mark2}</h1>
    </>
  )
}
export default Tamil

/*
function Tamil(){
  return(
    <>
    <div><CurrentBill></CurrentBill></div>
    <div><Game></Game></div>
    <div><Grade></Grade></div>
    <div><Cuttofmarks></Cuttofmarks></div> 
    <div><Purchaseproducts></Purchaseproducts></div>
    <h1>hi</h1>
    </>
  )
}
export default Tamil

function CurrentBill(){
  var unit =250;
  return(
    <>
    {
      (unit<100 && unit+"Free")||(unit>101 && unit<201 && unit*2 +"rupies")||(unit>201 && unit<401 && unit*3 +" rupies")||(unit>401 && unit<500 && unit*4 +" rupies")||(unit>500 && unit*7 +" rupies")
    }
    </>
  )
}

function Game(){
  var points =1;
  return(
    <>
    {
      (points === 5 && points+"Winner")||(points === 4 && points +"Runner")||(points<=3 && points +" Loser")
    }
    </>
  )
}

function Grade(){
  var grades=45
  return(
    <>
    {
      (grades >= 85 && grades+"Outstanding")||(grades === 75 && grades === 84.9 && grades +"Excellet")||(grades === 65 && grades === 74.9 && grades +" Very good")||(grades === 55 && grades === 64.9 && grades +" Good")||(grades<55 && grades +" Fair")
    }
    </>
  )
}

function Cuttofmarks(){
  var mark =155;
  return(
    <>
    {
      (mark >= 195 && mark+"Annauniversity")||(mark >= 190 && mark +"REC")||(mark >= 185 && mark +" CIT")||(mark >= 180 && mark +" PSG")||(mark<180 && mark +" Any Collage")
    }
    </>
  )
}

function Purchaseproducts(){
  var rate =5000;
  return(
    <>
    {
      (rate >= 10000 && rate*0.1+" Discount")||(rate >= 7500 && rate <= 9999 && rate*0.07+"Discount")||(rate >= 5000 && rate <= 7499 && rate*0.03 +" Discount")||(rate <= 5000 && rate*0.01 +" Discount")
    }
    </>
  )

}
/*function Tamil(){
  // var arr = new array(65,75,85,75,35,48,65,75)
  var arr = [75,85,95,45,75,85,95,45]
  var sum =0;
  for(var i=0 ;i<arr.length;i++){
    sum = sum+arr[i]
  }
  return(
    <>
    <cu></cu>
    <h1>index:0 {arr[0]}</h1>
    <h1>index:1 {arr[1]}</h1>
    <h1>index:2 {arr[2]}</h1>
    <h1>index:3 {arr[3]}</h1>
    <h1>sum of array: {sum}</h1>
    </>
  )
}
export default Tamil
/*function Tamil(){
 var m1= 65;
 var m2= 75;
 var m3= 95;
 var m4= 85;
 var m5= 55;
 var avg = (m1+m2+m3+m4+m5)/5;
return(
  <>
  <h1>your percentage :{avg}</h1>
  <h2>
    your grade:
     {(m1>34 && m2>34 && m3>34 && m4>34 && m5>34 &&
      ((avg>=85 && "outstanding")||(avg>=75 && "excellent")||(avg>=65 && "very good")||(avg>=55 && "good")||"fair"))
      ||
      "no grade because fail"
    }
  </h2>
  </>
)
}
export default Tamil


/*function App(){
  var n= -5;
  return(
    <>
    {
      (n<0 && n+"is -ve")||(n>0 && n+"is positive")||(n===0 && n+"is zero")
    }
    </>
  )
}
export default App



// function App(){
//   return(
//     <>
//     <h1>hi welcome to react to first time</h1>
//     <h1>one group level element</h1>
//     <p>tyriar.lorem-ipsum lihflihure ejrhfkjehgkjergf .ekjrfhoi5rhfjkn  
//     </p>
//     </>
//   )
// }
// export default App


// function Tamil(){
// var age =17;
// return(
//   <>
//   <h1>problem 1</h1>
 
//   <h1>{(age>18 && age+"he/se is eligible to vote") || age+"he/se is not eligible to vote"}</h1>
//   </>
// )
// }

// function year1(){
//   var leapyear = 2024;
//   return(
//     <>
//     <h2>problem 2</h2>
//     <h1>{(leapyear/4===0 && leapyear+"it is leap year") || leapyear+"it is not leap year"}</h1>
//     </>
//   )
//   }


// function App(){
//   var n1 = 2;
//   return(
//     <>
//     <Tamil></Tamil>
//     <year1></year1>
//     <h1>problem 3</h1>
//     <h1>{(n1>0 && n1+"is +ve") || n1+"is -ve"}</h1>
//     </>
//   )
// }
// export default App

/*import logo from './logo.svg';
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
*/