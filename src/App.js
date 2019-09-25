import React,{Component} from 'react';
import './App.css';
import Title from './components/titles'
import Weather from './components/weather'
import Form from './components/form'

const Api_Key="2f756dfd3e94112885d968acbb804215"

class App extends Component{

    state={
       city:'',
       country:'',
       temperature:'',
       humidity:'',
       description:'',
       error:'',
       switch:false

    }


  handleCHange=(prevState)=>{

     this.state.switch?this.setState({switch:false}):this.setState({switch:true});
  }

  getWeather = async (e) => {
    e.preventDefault();
    const city = e.target.elements.city.value;
    const country = e.target.elements.country.value;
    const api_call = await fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${Api_Key}`);

    const response = await api_call.json();
    if(city&&country&&response.main!==undefined){
    this.setState({
      city:response.name,
      country:response.sys.country,
      temperature:parseInt((response.main.temp-273.15)*9/5+32),
      description:response.weather[0].description,
      humidity:response.main.humidity,
      error:''
    })
  }else{
    this.setState({
    city:'',
    country:'',
    temperature:'',
     humidity:'',
    description:'',
    error: "Please enter a Valid City and Country...?-?"
  })


}
}



  render(){
   return (
     <div className='wrapper'>
      <Title />
      <div className="main">
      <Form getWeather={this.getWeather}/>
      <Weather
                temp={this.state.temperature}
                city={this.state.city}
                handleCHange={this.handleCHange}
                switch={this.state.switch}
                des={this.state.description}
                humid={this.state.humidity}
                country={this.state.country}
                error={this.state.error}/>
       </div>
     </div>
   );
 }
}


export default App;
