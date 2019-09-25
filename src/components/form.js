import React from 'react'

const Form=(props)=>{
  return(
    <div>
      <form onSubmit={props.getWeather}>
      <input className="hold" type="text" name="city" placeholder="City..."/>
      <input className="hold" type="text" name="country" placeholder="Country..."/>

        <button className='myButton'>Get Weather</button>
      </form>
    </div>
  );
}

export default Form;
