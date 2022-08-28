// async function consolidated()
var idx3n = []
var idx3y = []
var acdx = [] 
var idx3all =[]
var dipx3n =[]
var dipx3y=[]
var myopx3n =[]
var trace3 = []
var layout =[]
var idx3ym=[], dipx3ym =[]
var idx3yd=[], dipx3yd =[]
var acdxn=[], acdxy=[], acdxym =[], acdxyd=[]
// path = "data\json-fixer.json"

// C:\BC_Classes\Homeworks\project_4\repo_etc\data\myopia.json
// C:\BC_Classes\Homeworks\project_4\repo_etc\static\js\plot_myopia_data.js
d3.json("./static/data1/json-fixer.json").then(function(data){
    data.forEach((list) => {
        // console.log(list)
        
        let myopx3 = list.MYOPIC
        let idx3 = list.ID
        let acdx = list.ACD
        let dipx3 = list.DIOPTERHR
        let dadmx3 = list.DADMY
        let mommx3 = list.MOMMY
        if (myopx3 == 0){
            acdxn.push(acdx)
            idx3n.push(idx3)
            dipx3n.push(dipx3/1.75)
        }
        
        
        if(myopx3 == 1){
            if (mommx3 == 1 && dadmx3 == 1){
               
                    acdxy.push(acdx)
                    idx3y.push(idx3)
                    dipx3y.push(dipx3/1.75)
            }
        }

        if(myopx3 == 1){
            if (mommx3 == 1 && dadmx3 == 0){
                    acdxym.push(acdx)
                    idx3ym.push(idx3)
                    dipx3ym.push(dipx3/1.75)
            }
        }
        if(myopx3 == 1){
            if (mommx3 == 0 && dadmx3 == 1){
                    acdxyd.push(acdx)
                    idx3yd.push(idx3)
                    dipx3yd.push(dipx3/1.75)

            }
        }
        // idx3all.push(idx3)
        // myopx3n.push(myopx3)
                
                     
    });
    let t1d = {
        x: idx3n,
        y: acdxn,
        mode: 'markers',
        name: 'ACD kids without Myopia',
        marker:{
            size: dipx3n, 
            color: '#a5a996',
        }
    }
    trace3.push(t1d)

    let t2d = {
        x: idx3y,
        y: acdxy,
        mode: 'markers',
        name: 'ACD kids with Myopia - (Mom & Dad Miopic)',
        marker:{
            size: dipx3y, 
            color: '#e30022',
        }
    }
    trace3.push(t2d)

    let t3d = {
        x: idx3ym,
        y: acdxym,
        mode: 'markers',
        name: 'ACD kids with Myopia - (Mom Miopic)',
        marker:{
            size: dipx3ym, 
            color: '#713fff',
        }
    }
    trace3.push(t3d)

    let t4d = {
        x: idx3yd,
        y: acdxyd,
        mode: 'markers',
        name: 'ACD kids with Myopia - (Dad Miopic)',
        marker:{
            size: dipx3yd, 
            color: '#a6d608',
        }
    }
    trace3.push(t4d)

    // let t5b = {
    //     x: idx3all,
    //     y: myopx3n,
    //     name: 'Myopic Dad',
    //     type: 'bar', 
    //     yaxis: "y2",
    //     color: '3fd7ff'
    // }
    // trace1.push(t5b)
 

    var layout = {
        xaxis: {
            autotick: false,
            ticks: 'outside', 
            dtick: 20,
            // type: 'date',
            title: 'Pateint ID',
            xaxis: {
                range: [0, 620],
            // tickmode:'auto', 
            
            },
        },
        
        yaxis: {
            autotick: false,
            ticks: 'outside', 
            dtick: .1,
            title: 'ACD & DiopterHR', 
            range: [2.7, 4.5],
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
        title:'<b>Children with/without Myopia vs. Anterior Chamber Depth (ACD) <br> Bubble Size = [DIOPTERHR = 3× ( READHR + STUDYHR) + 2 × COMPHR + TVHR]</b>'
        
    }
    console.log(trace3)
    Plotly.newPlot('plot3', trace3, layout)
    // console.log(data)
    
});
