import { useEffect } from 'react';
import { useRef } from 'react';
import * as d3 from 'd3';
import { utcFormat } from 'd3';

function E2() {
  const data = [100, 10, 30, 50, 110, 80];
  //const MAX = max(data);
  const canvasRef = useRef(); 
    useEffect(() => {
        const canvas = d3.select(canvasRef.current);
        const svg = canvas.append('svg').attr('width',500).attr('height', 500);
        data.forEach((d, i)=>{
          svg
            .append('rect')
            .attr('id',`rect-${i}`)
            .attr('width', 20)
            .attr('height', 0)
            .attr('x', i*30)
            .attr('y', 140)
            .transition()
            .duration(1000)
            .attr('y',140 - d)
            .attr('height',d)
            .ease(d3.easeBack);

            d3.select()
            .transition()
            .duration(1000)
            .style('fill', 'blue')
            .delay(1000);
        //   svg
        //     .append('text')
        //     .attr('x', i * 30)
        //     .attr('y', 140 - d)
        //     .text(d)
        });
        
    }, []);
  return (
    <div ref={canvasRef}>
    </div>
  );
}

export default E2;