import React,{useState} from 'react';
import './style.css';
let App=()=>{
  const[objvar,setInput]=useState({
    name: "",
    dept: "",
    rating: ""
  })
const[details,setDetails]=useState([]);
const[show,setShow]=useState(true);
   
  let inputEvent=(event)=>{
    const name=event.target.name;
    const value=event.target.value;
    setInput({...objvar,[name]:value})
  }
  let sub=(e)=>{
    e.preventDefault();
    const boy={...objvar,id:new Date().getTime().toString()}//To generate unique id
    setDetails([...details,boy])//All the input fields declared in objvar object is copied in empty array details
    setShow(!show) //On submitting the form show changes to false
    setInput({name:" ",dept:" ",rating:" "})//On submitting the data, clears the input field
  }
  return(
    <div className='main_div'>
    <h2>EMPLOYEE FEEDBACK FORM</h2>
     { show && <form onSubmit={sub}> {/* Form will be visible since show is set to true */}
      <label htmlFor="">Name</label><input type="text" name='name' value={objvar.name} onChange={inputEvent} />
      <br />
      <label htmlFor="">Department</label><input type="text" name='dept' value={objvar.dept} onChange={inputEvent} />
      <br />
      <label htmlFor="">Rating</label><input type="text" name='rating' value={objvar.rating} onChange={inputEvent} />
      <br />
      <button type='submit'>Submit</button>
    </form>
    }
    {!show && <div className='outerdiv'> {/* Since show is inverted in line number 196 therefore we are not able to see outerdiv box but on submitting the data, setShow will change show's state to visible and we are able to see outerdiv box  */}
         {
      details.map((curreElem)=>{
        const{id,name,dept,rating}=curreElem
             return(
                    <div  key={id} className='innerdiv' >
                        Name:{name}|Department:{dept}|Rating:{rating}  
                    </div>
                    )      
        }
        )}
          </div>
}
<br />
{!show && <button onClick={()=>setShow(!show)}>Go Back</button>} {/* Since show is inverted in line number 210 therefore we are not able to see Go Back button but on submitting the data, setShow will change show's state to visible and we are able to see Go Back button */} 
    </div>
  )
}
export default App;
