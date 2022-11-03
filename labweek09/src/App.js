import logo from './logo.svg';
import './App.css';
import StudentDetails from './student';
import Student from './student';
let stud = {studId: "101343887",
fn: "Yaroslav",
ln: "Yatsyk"}
function App() {
  return (
    <div className='App'>
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />

      <h1>Welcome to the Full-Stack Development-1</h1> 
      <h2>React JS Programming lab exercise for week 09</h2>
      <Student student = {stud}/>
      <h5>George Brown College, Toronto</h5>
  
      </header>
    </div>
  );
}

export default App;
