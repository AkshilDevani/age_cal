
import './App.css';
import {useState} from 'react';

function App() {

    let [date,setdate] = useState("");
    let [date1,setdate1] = useState("");
    let [tdate,settdate] = useState("");
    let [milli,setmilli] = useState(0);
    let [sec,setsec] = useState("");
    let [min,setmin] = useState("");
    let [hour,sethour] = useState("");
    let [days,setdays] = useState("");
    let [week,setweek] = useState("");
    let [year,setyear] = useState("");
    let [month,setmonth] = useState("");
    let [monthm,setmonthm] = useState("");
    let [day,setday] = useState("");
    let [daym,setdaym] = useState("");

    const agefunc=()=>{
      setdate1(new Date(date));
      settdate(new Date());
      setmilli(tdate - date1);
      setyear(Math.floor(milli/(365 * 24 * 60 * 60 * 1000)));
      setmonthm(Math.floor(milli%(365 * 24 * 60 * 60 * 1000)));
      setmonth(Math.floor(monthm/(30 * 24 * 60 * 60 * 1000)));
      setdaym(Math.floor(monthm%(30 * 24 * 60 * 60 * 1000)));
      setday(Math.floor(daym/(24 * 60 * 60 * 1000)));
      
      setsec(Math.floor(milli/1000));
      setmin(Math.floor(sec/60));
      sethour(Math.floor(min/60));
      setdays(Math.floor(hour/24));
      setweek(Math.floor(days/7));
    }
  return (
    <div>

      Birth Date : <input type="date" name="" id="datee" value={date} onChange={(e)=>{setdate(e.target.value)}}></input><br></br><br></br>
      <input type="button" name="" value="Click Here" onClick={agefunc}></input><br></br>
      Milliseconds : <input type="text" value={milli}  placeholder='Milliseconds'></input><br></br>
      Seconds : <input type="text" value={sec}  placeholder='seconds'></input><br></br>
      Minutes : <input type="text" value={min}  placeholder='minutes'></input><br></br>
      Hours : <input type="text" value={hour}  placeholder='hours'></input><br></br>
      Days : <input type="text" value={days}  placeholder='hours'></input><br></br>
      Weeks : <input type="text" value={week}  placeholder='weeks'></input><br></br>
      Year : <input type="text" value={year}  placeholder='years'></input><br></br>
      Month : <input type="text" value={month}  placeholder='months'></input><br></br>
      Day : <input type="text" value={day}  placeholder='days'></input><br></br>
    </div>
  );
}

export default App;
