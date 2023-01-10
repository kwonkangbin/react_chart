import { useEffect } from 'react';
import { useRef } from 'react';
import * as d3 from 'd3';
import { utcFormat } from 'd3';

function E3() {
  const data = [100, 10, 30, 50, 110, 80];
  const canvasRef = useRef(); 
    useEffect(() => {
        const canvas = d3.select(canvasRef.current);
        const svg = canvas.append('svg').attr('width',500).attr('height', 500);
        
       //비동기 요청
        d3.csv('/data/data.csv').then((data)=>{
          const xFunc = (_, index) => index * 30;
          const yFunc = (ydata) => 40 - ydata['평균최고기온(°C)'];
          const y2Func = (ydata) => 40 - ydata['평균최저기온(°C)'];
          const y3Func = (ydata) => 40 - ydata['평균기온(°C)'];
          const lineGenerator = d3.line().x(xFunc).y(yFunc);
          const lineGenerator2 = d3.line().x(xFunc).y(y2Func);
          const lineGenerator3 = d3.line().x(xFunc).y(y3Func);

          svg
            .append('path')
            .attr('stroke', 'red')
            .attr('stroke-width', 4)
            .attr('fill','none')
            .attr('d', lineGenerator(data))

          svg
            .append('path')
            .attr('stroke', 'black')
            .attr('stroke-width', 4)
            .attr('fill','none')
            .attr('d', lineGenerator2(data))

            svg
            .append('path')
            .attr('stroke', 'blue')
            .attr('stroke-width', 4)
            .attr('fill','none')
            .attr('d', lineGenerator3(data))
        
        });

    }, []);
  return (
    <div ref={canvasRef}>
    </div>
  );
}

export default E3;