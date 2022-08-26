// async function consolidated()
var idxn = []
var idxy = []
var alxn = [] 
var idxall =[]
var dipxn =[]
var dipxy=[]
var myopxn =[]
var alxy =[]
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
        
        let myopx = list.MYOPIC
        let idx = list.ID
        let alx = list.AL
        let dipx = list.DIOPTERHR
        if (myopx == 0){
            alxn.push(alx)
            idxn.push(idx)
            dipxn.push(dipx/1.75)
        }
        else{
            alxy.push(alx)
            idxy.push(idx)
            dipxy.push(dipx/1.75)
        }
        
        idxall.push(idx)
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
        name: 'AL of kids without Myopia',
        marker:{
            size: dipxn, 
            color: '#a5a996',
        }
    }
    trace.push(t1)

    let t1a = {
        x: idxy,
        y: alxy,
        mode: 'markers',
        name: 'AL of kids with Myopia',
        marker:{
            size: dipxy, 
            color: '#e30022',
        }
    }
    trace.push(t1a)

    // let t2 = {
    //     x: idxall,
    //     y: myopxn,
    //     name: 'Myopic Pateint',
    //     type: 'bar', 
    //     yaxis: "y2",
    //     color: 'rgb(255,0,0)'
    // }
    // trace.push(t2)
    
    // let t3 = {
    //     x: idxall,
    //     y: dadmxn,
    //     name: 'Myopic Dad',
    //     type: 'bar', 
    //     yaxis: "y2",
    //     color: '3fd7ff'
    // }
    // trace.push(t3)

    // let t4 = {
    //     x: idxall,
    //     y: mommxn,
    //     name: 'Myopic Mom',
    //     type: 'bar', 
    //     yaxis: "y2",
    //     color: '#ff3fae'
    // }
    // trace.push(t4)

    var layout = {
        xaxis: {
            // type: 'date',
            autotick: false,
            ticks: 'outside', 
            tick0: 0,
            dtick: 20,
            title: 'Pateint ID',
            xaxis: {
                range: [0, 620],
            // tickmode:'auto', 
            
            },
        },
        
        yaxis: {
            autotick: false,
            ticks: 'outside', 
            dtick: .5,
            title: 'AL & DiopterHR', 
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
        title:'Axial Lenght (AL) & Time spent with Diopter activities for all pateints - DIOPTERHR = 3× ( READHR + STUDYHR) + 2 × COMPHR + TVHR'
    }
    console.log(trace)
    Plotly.newPlot('plot', trace, layout)
    console.log(data)
    
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