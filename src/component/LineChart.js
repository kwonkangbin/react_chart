import { useEffect } from 'react';
import { useRef } from 'react';
import * as d3 from 'd3';
import { utcFormat } from 'd3';

function LineChart({graphInfos, data}) {
  const canvasRef = useRef(); 
    useEffect(() => {
        const canvas = d3.select(canvasRef.current);
        const svg = canvas.append('svg').attr('width',500).attr('height', 500);
        const yScaleFunc = d3.scaleLinear().domain([5, 40]).range([0, 300]);

        graphInfos.forEach((info)=>{
          const xFunc = (_, index) => index * 30;
          const yFunc = (ydata) => 40 - ydata[info.key];
          const lineGenerator = d3.line().x(xFunc).y(yFunc);

        svg
            .append('path')
            .attr('stroke', info.color)
            .attr('stroke-width', 4)
            .attr('fill','none')
            .attr('d', lineGenerator(data))
        });

    }, [data]);
  return (
    <div ref={canvasRef}>
    </div>
  );
}

export default LineChart;