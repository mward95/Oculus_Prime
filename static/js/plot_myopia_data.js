// async function consolidated()
var idxn = []
var alxn = [] 
var dipxn =[]
var myopxn =[]
var dadmxn =[]
var mommxn =[]
var trace = []
var layout =[]
// path = "data\json-fixer.json"

// C:\BC_Classes\Homeworks\project_4\repo_etc\data\myopia.json
// C:\BC_Classes\Homeworks\project_4\repo_etc\static\js\plot_myopia_data.js
d3.json("./static/data1/json-fixer.json").then(function(data){
    data.forEach((list) => {
        // console.log(list)
        let idx = list.ID
        idxn.push(idx)
        let alx = list.AL
        alxn.push(alx)
        let dipx = list.DIOPTERHR
        dipxn.push(dipx/1.75)
        let myopx = list.MYOPIC
        myopxn.push(myopx)
        let dadmx = list.DADMY
            if (!dadmx == 0){
                dadmxn.push(dadmx-.25)
            }
            else{
                dadmxn.push(dadmx)
            }
        
        let mommx = list.MOMMY
            if (!mommx == 0){
                mommxn.push(mommx-0.6)
            }
            else{
                mommxn.push(mommx)
            }
              
    });
    let t1 = {
        x: idxn,
        y: alxn,
        mode: 'markers',
        name: 'Axial Lenght with Size as DIOPTERHR',
        marker:{
            size: dipxn, 
            colorscale: 'Earth',
        }
    }
    trace.push(t1)
    console.log(trace)
    // console.log(alxn)
    console.log(data)

    let t2 = {
        x: idxn,
        y: myopxn,
        name: 'Myopic Pateint',
        type: 'bar', 
        yaxis: "y2",
        color: 'rgb(255,0,0)'
    }
    trace.push(t2)
    
    let t3 = {
        x: idxn,
        y: dadmxn,
        name: 'Myopic Dad',
        type: 'bar', 
        yaxis: "y2",
        color: '3fd7ff'
    }
    trace.push(t3)

    let t4 = {
        x: idxn,
        y: mommxn,
        name: 'Myopic Mom',
        type: 'bar', 
        yaxis: "y2",
        color: '#ff3fae'
    }
    trace.push(t4)

    var layout = {
        xaxis: {
            // type: 'date',
            title: 'Pateint ID',
            xaxis: {
                range: [0, 620],
            // tickmode:'auto', 
            dtick:20
            },
        },
        
        yaxis: {
            title: 'Axial Lenght & Time spent with Diopter activities', 
            range: [19,25],
            // autorange: true,
        },
        yaxis2:{
            title: "Myopic Patients ",
            anchor: 'free',
            overlaying: 'y',
            side: 'right',
            position: 1,
            range: [0, 3],
          
        },
        title:'Axial Lenght & Time spent with Diopter activities for all pateints - DIOPTERHR = 3× ( READHR + STUDYHR) + 2 × COMPHR + TVHR'
    }
    Plotly.newPlot('plot', trace, layout)
    
});
// consolidated()

// let t2 = {
//     x: Agex,
//     y: myp1x,
//     mode: 'line',
//     type: 'bar',
//     name: 'Age vs Myopia',
//     color: 'rgb(255,0,0)'

//     // 
// }  //end of t2
// traces.push(t2)
// console.log(traces)