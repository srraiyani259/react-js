import './App.css';
import Empl from './Empl';


function App() {
  const posts = [
    {
      id : 1, 
      name : "Ayan", 
      post : "SeniorEngineer",
      salary : 200000
    },
    {
      id : 2, 
      name : "Darshan", 
      post : "JounierEngineer",
      salary : 20000
    },
    {
      id : 3, 
      name : "Raj", 
      post : "Engineer",
      salary : 30000
    }

    ]

  return (
    <>
   
  <Empl posts={posts} />
    </>
    
  );
}

export default App;