import CanvasJSReact from './canvasjs.react';
var CanvasJSChart = CanvasJSReact.CanvasJSChart;
var CanvasJS = CanvasJSReact.CanvasJS;
export default function Pie(props){
    let options = {
        // theme: "dark2",
        animationEnabled: true,
        // exportFileName: "New Year Resolutions",
        exportEnabled: false,
        title:{
            text: props.title
        },
        // height: 260,
        // width: 260,
        data: [{
            
            type: "pie",
            showInLegend: true,
            legendText: "{label}",
            toolTipContent: "{label}: <strong>{y}%</strong>",
            indexLabel: "{y}%",
            indexLabelPlacement: "inside",
            dataPoints: 
               props.dataPoints
            
        }]
    }
    if (props.onClick !== undefined){
        options.data[0].click = props.onClick;
    }
    if (props.height !== undefined){
        options.height = props.height
    }
    if (props.width !== undefined){
        options.width = props.width
    }
    return <CanvasJSChart options = {options}
    /* onRef={ref => this.chart = ref} */
        />
}