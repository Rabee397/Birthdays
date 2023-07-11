import   {React ,useState}    from 'react' ;
import "./Birthday.css";
import Data from './Data';

function Birthdays() {
  
  const [people , setPeople] = useState(Data);
  
  

  return (
      <div className="outer">
         <div className="main-container">
          <div className="sub-container">
            <h1 className="title"> <span className='people-num'>{people.length}</span> birthdays today</h1>
            {people.map((person)=>{
  
             return(
              <div className="person-box" key="id">
                <img src={person.image} alt="person" className="person-img"/>
                <div className="person-info">
                  <h3>{person.name}</h3>
                  <h3>{person.age}</h3>
                </div>
              </div>)
            })}
            
          </div>
            
            <button className="clear-btn" onClick={()=> setPeople([])}>Clear All</button>
         </div>

      </div>
  )
}


export default Birthdays;