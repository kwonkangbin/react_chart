import { csvFormat, utcFormat } from "d3";

const SnowManBody = () =>{
    return(
        <svg>
            <circle cx={250} cy={300} r={120} stroke='black' fill='white' strokeWidth={14}></circle>
            <circle cx={250} cy={150} r={80} stroke='black' fill="write" strokeWidth={14}></circle> 
        </svg>
    );
}

const SnowManEyes = () => {
    return(
        <>
        </>
    );
} 

const Arms = () =>{
    return(
        <>
            <line x1={100} y1={180} x2={220} y2={300}></line>
        </>
    );
}

// const SnowMan = styled.svg`
//     .left-eye{
//         animation-duration : 0.5s;
//         animation-name: blink;
//         animation-iteration : infinite;
//     }

//     @keyframes blink{
//         to{
//             transform:scaleY(0.1);
//         }
//     }
// `;

const SVG = () => {
    return (
        <svg width={500} height={500} style={{backgroundColor:'gray'}}>
            <SnowManBody></SnowManBody>
            <Arms></Arms>
            <SnowManEyes></SnowManEyes>
        </svg>
    );
}
 
export default SVG;