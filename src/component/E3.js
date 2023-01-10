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
        

        // data.forEach((d, i)=>{
        //   svg
        //     .append('rect')
        //     .attr('width', 20)
        //     .attr('height', 0)
        //     .attr('x', i*30)
        //     .attr('y', 140)
        //     .attr('stroke', 'black')

        // });

        const xFunc = (data,index) => index*30;
        const yFunc = (data) => 150 - data;
        const drawLineCharGenerator = 
          d3.line().x(xFunc)
          .y(yFunc)
          .curve(d3.curveBasis);

          const path = svg
          .append('path')
          .attr('d',drawLineCharGenerator(data))
          .attr('fill','none')
          .attr('stroke', 'black')
          .attr('stroke-width', 8)
          .attr('stroke-linecap','round');

          const length = path.node().getTotalLength();

          path 
            .attr('stroke-dashoffest', length)
            .attr('stroke-dasharray', length)
            .transition()
            .ease(d3.easeSin)
            .duration(1000)
            .attr('stroke-dashoffset',2)
    }, []);
  return (
    <div ref={canvasRef}>
    </div>
  );
}

export default E3;