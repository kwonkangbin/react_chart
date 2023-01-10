import { useEffect, useState } from 'react';
import { useRef } from 'react';
import * as d3 from 'd3';
import { utcFormat } from 'd3';
import LineChart from './LineChart'

const graphInfos = [
  {key: '평균최고기온(°C)', color : 'red'},
  {key: '평균최저기온(°C)', color : 'blue'},
  {key: '평균기온(°C)', color : 'orange'}
];

function E5() {
    const [data,setData] = useState([]);
    useEffect(() => {
      d3.csv('/data/data.csv').then((data)=>{
        setData(data);
      })}, []);
  return (
    <div>
      <LineChart graphInfos={graphInfos} data={data}></LineChart>
    </div>
  );
}


export default E5;