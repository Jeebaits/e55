// Import the CSS file
import './Section1.css';

// Nested JSX
const Section1 = () => {
  return (
    <div style={{backgroundColor : "coral", color : "green"}}>
        <h1 style={{fontSize : 40}}>Section 1: HTML</h1>
        <p className='title'>This is HTML description</p>
    </div>
  );
};

export default Section1;
// Expression and statement
let age = 40;
let sum = 20 + 20;

if(sum === age){
    console.log("It's a coincidence!");
}