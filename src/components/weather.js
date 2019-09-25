import React from 'react'

const Weather=(props)=>{
  return(
  
    <div className="result">

      {props.city&&props.country&&<p>Location:<span>{props.city},{props.country}</span></p>}
      {props.temp&&<p>Temperature: <span>{props.switch?parseInt((props.temp-32)*5/9):props.temp}<a href='#' onClick={props.handleCHange}>  °F</a> |<a href='#' className='sec' onClick={props.handleCHange}> °C</a></span></p>}

      {props.humid&&<p>Humidity: <span>{props.humid}</span></p>}

      {props.des&&<p>Condition: <span>{props.des}</span></p>}

      {props.error&&<p><span>{props.error}</span></p>}




    </div>
  );
}

export default Weather;
