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
var trace1 = []
var layout =[]
var alxym =[], idxym=[], dipxym =[]
var alxyd =[], idxyd=[], dipxyd =[]
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
        let dadmx = list.DADMY
        let mommx = list.MOMMY
        if (myopx == 0){
            alxn.push(alx)
            idxn.push(idx)
            dipxn.push(dipx/1.75)
        }
        
        
        if(myopx == 1){
            if (mommx == 1 && dadmx == 1){
               
                    alxy.push(alx)
                    idxy.push(idx)
                    dipxy.push(dipx/1.75)
            }
        }

        if(myopx == 1){
            if (mommx == 1 && dadmx == 0){
                    alxym.push(alx)
                    idxym.push(idx)
                    dipxym.push(dipx/1.75)
            }
        }
        if(myopx == 1){
            if (mommx == 0 && dadmx == 1){
                    alxyd.push(alx)
                    idxyd.push(idx)
                    dipxyd.push(dipx/1.75)

            }
        }
        idxall.push(idx)
        myopxn.push(myopx)
                
                     
    });
    let t1b = {
        x: idxn,
        y: alxn,
        mode: 'markers',
        name: 'Ax Lngth of kids without Myopia - Size DIOPTERHR',
        marker:{
            size: dipxn, 
            colorscale: 'Earth',
        }
    }
    trace1.push(t1b)

    let t2b = {
        x: idxy,
        y: alxy,
        mode: 'markers',
        name: 'Ax Lngth of kids with Myopia - Size DIOPTERHR (Mom & Dad Miopic)',
        marker:{
            size: dipxy, 
            color: '#e30022',
        }
    }
    trace1.push(t2b)

    let t3b = {
        x: idxym,
        y: alxym,
        mode: 'markers',
        name: 'Ax Lngth of kids with Myopia - Size DIOPTERHR (Mom Miopic)',
        marker:{
            size: dipxym, 
            color: '#713fff',
        }
    }
    trace1.push(t3b)

    let t4b = {
        x: idxyd,
        y: alxyd,
        mode: 'markers',
        name: 'Ax Lngth of kids with Myopia - Size DIOPTERHR (Dad Miopic)',
        marker:{
            size: dipxyd, 
            color: '#a6d608',
        }
    }
    trace1.push(t4b)

    // let t5b = {
    //     x: idxall,
    //     y: myopxn,
    //     name: 'Myopic Dad',
    //     type: 'bar', 
    //     yaxis: "y2",
    //     color: '3fd7ff'
    // }
    // trace1.push(t5b)

    
    
    

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
    console.log(trace1)
    Plotly.newPlot('plot1', trace1, layout)
    console.log(data)
    
});
