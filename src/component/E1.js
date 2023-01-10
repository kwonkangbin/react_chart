import * as d3 from 'd3';
import { utcFormat } from 'd3';
import {useRef, useEffect} from 'react';

const E1 = () => {
    const canvasRef = useRef(); 

    useEffect(() => {
        const canvas = d3.select(canvasRef.cerrent);
        const svg = canvas.append('svg').attr('width',500).attr('height',500).attr('style','background: gray');

        svg.append('rect').attr('x',0).attr('y',0).attr('width',60).attr('height',40).attr('fill','red');

        svg.append('circle').attr('cx',250).attr('cy',150).attr('r',50);
    }, []);

    return (
        <div></div>
    );
}

export default E1;