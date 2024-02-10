import React,{useEffect,useState} from 'react';
import './home.css';
import Header1 from './Header1';
import { PieChart } from 'react-minimal-pie-chart';
import GaugeChart from 'react-gauge-chart'
import { CartesianGrid, Line, LineChart, XAxis } from 'recharts';
import { Tooltip } from 'react-bootstrap';
import DashboardSidebar from './DashboardSidebar';

function Home() {
  const [cityName, setCityName] = useState("");
  const [data, setData] = useState({
    name: "",
    humidity: "",
    pressure:"",
    country:"",
    wind:""
  });

  const getWeather = () => {
    let http = new XMLHttpRequest();

    let cityname = cityName;
    console.log(cityname);
    http.open('get', `https://api.openweathermap.org/data/2.5/weather?q=${cityname}&appid=3db6cb3f57b2fc7b2755fb0b51770747`);

    http.send();

    console.log(http.readyState);
    http.onreadystatechange = () => {
      console.log(http.readyState);
      if (http.readyState === 4) {
        if (http.status >= 200 && http.status <= 300) {
          console.log(http.responseText);
          let data = JSON.parse(http.responseText);
          console.log(data);
          setData({
            name: data.name,
            humidity: data.main.humidity,
            pressure: data.main.pressure,
            country:data.sys.country,
            wind:data.wind.speed,

          });
        } 
      }
    };
  };

  useEffect(() => {
    getWeather();
  }, [cityName]);

  return (
    <div className='d-flex'>
      <div>
        <DashboardSidebar/>
      </div>
      <div className='flex-grow-1'>
        <Header1/>
        <div className='row'>
          <div className='col-md-2'></div>
          <div className='col-md-8 align'>
            
              <div className='inputbar mt-3'>
                <input type="text" className='inputbar inp' placeholder='enter a place: ' onChange={(e) => { setCityName(e.target.value) }} id='cityName' />
                  <button className='btn' onClick={getWeather}><i class="fa-solid fa-magnifying-glass"></i></button>
              </div>
          </div>
          <div className='col-md-2'></div>
          </div>
             <div>
                
                  <div className='row pt-5 ps-4 pe-4'>
                    <div className='col col-s-12 col-sm-12 col-md-4 col-lg-4'>
                    <div className='commondiv'>
                      <PieChart className='pie'
                                  data={[
                                    { title: 'One', value: 10, color: '#E38627' },
                                    { title: 'Two', value: 15, color: '#C13C37' },
                                    { title: 'Three', value: 20, color: '#6A2135' },
                                    { title: 'Four', value: 50, color: '#6A2135' }
                                  ]}
                          />;
                    </div>
    
                    </div>
                    <div className='col col-s-12 col-sm-12 col-md-4 col-lg-4'>
                    {data ? (
                        <div className='commondiv' style={{display:"flex",flexDirection:'column', color:'white'}}>
                          <h2 className='text1'>{data.name}</h2>
                          <h2 className='text1'>{data.humidity}</h2>
                          <h2 className='text1'>{data.pressure}</h2>
                          <h2 className='text1'>{data.country}</h2>
                        </div>) : (
                        <div className='commondiv' style={{display:"flex",flexDirection:'column', color:'white'}}>
                          <h2 className='text1'>City</h2>
                          <h2 className='text1'>Humidity</h2>
                          <h2 className='text1'>Pressure</h2>
                          <h2 className='text1'>Country</h2>
                        </div>
                    )}
    
                    </div>
                    <div className='col col-s-12 col-sm-12 col-md-4 col-lg-4'>
                    
                      <div className='commondiv'>
                        <GaugeChart id="gauge-chart2" 
                          nrOfLevels={20} 
                          percent={0.86} 
                        />
      
                      </div>
                    </div>
                  </div>
                  
                
             </div>
      </div>
    </div>
      
  );
}

export default Home;
