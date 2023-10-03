import logo from './logo.svg';
import './App.css';
import {useEffect, useState} from 'react';
function App() {
  return (
    <div className="App">
     
      <Board>
      
      </Board>
    </div>
  );
}
function Board()
{
  const [marks, setMarks] = useState([0,0,0,0,0,0,0,0,0]);
  const [player,setPlayer] = useState(1);

  useEffect(()=>{
    const combinations=[[0,1,2],[3,4,5],[6,7,8],[0,3,6],[1,4,7],[2,5,8],[0,4,8],[2,4,6]]

    for(let c of combinations)
    {
      if(marks[c[0]]===1 && marks[c[1]]===1 && marks[c[2]]===1)
      {
         
        async function delayFunction() {
          // Wrap the setTimeout inside a Promise
          return new Promise((resolve) => {
            setTimeout(() => {
              alert("Player 1 wins");
              window.location.reload();
              // Resolve the Promise after the specified timeout
            }, 300); // Timeout duration in milliseconds (e.g., 2000ms = 2 seconds)
          });
        }
         delayFunction();
       
          // window.location.reload();
      }
      else if(marks[c[0]]===2 && marks[c[1]]===2 && marks[c[2]]===2)
      {
        async function delayFunction() {
          // Wrap the setTimeout inside a Promise
          return new Promise((resolve) => {
            setTimeout(() => {
              alert("Player 2 wins");
              window.location.reload();
              // Resolve the Promise after the specified timeout
            }, 300); // Timeout duration in milliseconds (e.g., 2000ms = 2 seconds)
          });
        }
         delayFunction();
      }
    }
    let count=0;
    for(let i=0;i<9;i++)
    {
      if(marks[i]!=0) count++;
    }
    if(count==9)
    {
      async function delayFunction() {
        // Wrap the setTimeout inside a Promise
        return new Promise((resolve) => {
          setTimeout(() => {
            alert("Nobody wins");
            window.location.reload();
            // Resolve the Promise after the specified timeout
          }, 300); // Timeout duration in milliseconds (e.g., 2000ms = 2 seconds)
        });
      }
       delayFunction();
      


    }

  },[marks])



  const changeMark= (i) =>{
  
    const m = [...marks];
  if(m[i]===0){
    m[i]=player;
    setMarks(m);
    setPlayer(player===1 ? 2:1)}
    else{
       alert("Please click on desired box");
    }
  }
  

  
 
  return (
   
   <div className="Board">
        <h1 className='heading'>Tic Tac Toe</h1>
     <div>
    
     <Block mark={marks[0]} position={0} changeMark={changeMark}></Block>
     <Block  mark={marks[1]} position={1} changeMark={changeMark}></Block>
     <Block  mark={marks[2]} position={2} changeMark={changeMark}></Block>
     </div>
     <div>
     <Block mark={marks[3]} position={3} changeMark={changeMark}></Block>
     <Block  mark={marks[4]} position={4} changeMark={changeMark}></Block>
     <Block  mark={marks[5]} position={5} changeMark={changeMark}></Block>
     </div>
     <div>
     <Block mark={marks[6]} position={6} changeMark={changeMark}></Block>
     <Block  mark={marks[7]} position={7} changeMark={changeMark}></Block>
     <Block  mark={marks[8]} position={8} changeMark={changeMark}></Block>
     </div>
     
   </div>
     
  );
}
function Block({mark,position,changeMark}){

  
  return (
    <div className={`Block mark${mark}`}  onClick={e=>changeMark(position)}>
     
    </div> 
   );
}

export default App;
