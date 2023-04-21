import './App.css';
import {useState} from "react";

import starImg from "./assets/icon-star.svg";
import thankYouImg from './assets/illustration-thank-you.svg'


function App() {
  const [rating, setRating] = useState(undefined);
  const [isSubmit, setisSubmit] = useState(true);
     
  const data =[1,2,3,4,5];
      
    
  const handleRating = (rating) =>{
      setRating(rating)
  }

  const handleSubmit = (e) =>{
      e.preventDefault();
      setisSubmit(false);
  }

return(
  <div className="App">

      {isSubmit ? (<form onSubmit={handleSubmit}>
      
    <div className='container'>
      <img className="img-score"src={starImg} alt="icon star" />
      <h2 >How did we do?</h2>
      <p>Please let us know how we did with your support request. All feedback is appreciated to help us improve our offering!</p>
  
    <div className="btn-rating">
      {data.map((rating, i) =>(
        
      <button className='btn-score' key={i} type="button"  onClick={() => handleRating(rating)}>
      {rating}
      </button>

      ))
      }
    </div>
      <button className="btn-submit" disabled={ rating === undefined}type="submit">SUBMIT</button>
    </div> 
      

    </form>) 
    : 
    (<div className="container container-two">
        <img src={thankYouImg} alt="thank you" />
        <span> You selected {rating} out of 5 </span>
        <h2>Thank You!</h2>
        <p>We appreciate you taking the time to give a rating. If you ever need more support, don’t hesitate to get in touch!</p>
    </div>)}

    <footer><span>Challenge by</span>  Frontend Mentor.&nbsp;<span>Coded by</span>&nbsp; Matheus Padilha.</footer>    
    </div>
)
  
}

export default App;
