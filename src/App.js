import logo from './logo.svg';
import './App.css';

import React, { useState, useEffect } from 'react';

import axios from 'axios';
function App() {

  const [state1, setState1] = useState(0);
  const [state2, setState2] = useState(0);
  const [state3, setState3] = useState(0);
  const [state4, setState4] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      axios.get("https://api.netpie.io/feed/dashboardmachine?apikey=aHjFlVwqGyuD34VUijBMrz8UftfokCTj&granularity=10minutes&since=24hours").then((res) => {
        setState1(res.data.lastest_data[0].values[0][1]);
        setState2(res.data.lastest_data[1].values[0][1]);
        setState3(res.data.lastest_data[2].values[0][1]);
        setState4(res.data.lastest_data[3].values[0][1]);
        // console.log("state1 = " + res.data.lastest_data[0].values[0][1]);
        // console.log("state2 = " + res.data.lastest_data[1].values[0][1]);
        // console.log("state3 = " + res.data.lastest_data[2].values[0][1]);
        // console.log("state4 = " + res.data.lastest_data[3].values[0][1]);
      })
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="App">
      <div className="head">โรงเรียนวิทยาศาสตร์จุฬาภรณราชวิทยาลัย ชลบุรี</div>
      <div className="App-header">

        <ul>
          <li>
            {
              (state1 == 1) ?
                <div className="state">Machine 1 : <span class="dot-running"></span> <span class="dot-txt-running">Running</span></div> :
                <div className="state">Machine 1 : <span class="dot-stopping"></span> <span class="dot-txt-stopping">Stopping</span></div>
            }
          </li>
          <li>
            {
              (state2 == 1) ?
                <div className="state">Machine 2 : <span class="dot-running"></span> <span class="dot-txt-running">Running</span></div> :
                <div className="state">Machine 2 : <span class="dot-stopping"></span> <span class="dot-txt-stopping">Stopping</span></div>
            }
          </li>
          <li>
            {
              (state3 == 1) ?
                <div className="state">Machine 3 : <span class="dot-running"></span> <span class="dot-txt-running">Running</span></div> :
                <div className="state">Machine 3 : <span class="dot-stopping"></span> <span class="dot-txt-stopping">Stopping</span></div>
            }
          </li>
          <li>
            {
              (state4 == 1) ?
                <div className="state">Machine 4 : <span class="dot-running"></span> <span class="dot-txt-running">Running</span></div> :
                <div className="state">Machine 4 : <span class="dot-stopping"></span> <span class="dot-txt-stopping">Stopping</span></div>
            }
          </li>
        </ul>

      </div>

    </div>
  );
}

export default App;
