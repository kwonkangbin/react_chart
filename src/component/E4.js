import { useEffect } from 'react';
import { useRef } from 'react';
import * as d3 from 'd3';
import { selectAll, utcFormat } from 'd3';

const maxdata = (array) =>{
  let MAXdata = -100; 
  let MAXindex = 0;
  let MINdata = 1000;
  let MINindex = 0;
  array.forEach((index, data) => {
    if(MAXdata < data){
      MAXdata = data;
      MAXindex = index;
    }
    if(MINdata > data){
      MINdata = data;
      MINindex = index;
    }
  });
  return [MAXindex, MINindex];
}

function E4() {
  const data = [100, 10, 30, 50, 110, 80];
  const canvasRef = useRef(); 
    useEffect(() => {
        const canvas = d3.select(canvasRef.current);
        const svg = canvas.append('svg').attr('width',500).attr('height', 500);
        
        const arcGenerator =  d3.arc()
          .innerRadius(50)
          .outerRadius(100);
        
        const pieGenerator = d3.pie();

        const g = svg.append('g').attr('transform','translate(150, 150)')
        g.selectAll('path')
          .data(pieGenerator(data))
          .enter()
          .append('path')
          .attr('fill',(d)=>{
            if(d.data >= 80){
              return 'red';
            }
            return 'brown';
          })
          .attr('stroke', 'black')
          .attr('stroke-width', 4)
          .attr('d', arcGenerator);
    }, []);
  return (
    <div ref={canvasRef}>
    </div>
  );
}

export default E4;