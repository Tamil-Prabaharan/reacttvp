
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