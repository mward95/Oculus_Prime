// async function consolidated()
var idx2n = [], idx2y = [], idx2ym=[], idx2yd=[]
var spqxn=[], spqxy=[], spqxym =[], spqxyd=[]
var idx2all =[]
var dipx2n =[], dipx2y=[], dipx2ym =[], dipx2yd =[]

var myopx2n =[]
var trace2 = []
var layout =[]

// path = "data\json-fixer.json"

// C:\BC_Classes\Homeworks\project_4\repo_etc\data\myopia.json
// C:\BC_Classes\Homeworks\project_4\repo_etc\static\js\plot_myopia_data.js
d3.json("./static/data1/json-fixer.json").then(function(data){
    data.forEach((list) => {
        // console.log(list)
        
        let myopx2 = list.MYOPIC
        let idx2 = list.ID
        let spqx = list.SPHEQ
        let dipx2 = list.DIOPTERHR
        let dadmx2 = list.DADMY
        let mommx2 = list.MOMMY
        if (myopx2 == 0){
            spqxn.push(spqx)
            idx2n.push(idx2)
            dipx2n.push(dipx2/1.75)
        }
        if(myopx2 == 1){
            if (mommx2 == 1 && dadmx2 == 1){
                spqxy.push(spqx)
                idx2y.push(idx2)
                dipx2y.push(dipx2/1.75)
            }
        }
        if(myopx2 == 1){
            if (mommx2 == 1 && dadmx2 == 0){
                spqxym.push(spqx)
                idx2ym.push(idx2)
                dipx2ym.push(dipx2/1.75)
            }
        }
        if(myopx2 == 1){
            if (mommx2 == 0 && dadmx2 == 1){
                spqxyd.push(spqx)
                idx2yd.push(idx2)
                dipx2yd.push(dipx2/1.75)

            }
        }
        // idx2all.push(idx2)
        // myopx2n.push(myopx2)
    });
    let t1c = {
        x: idx2n,
        y: spqxn,
        mode: 'markers',
        name: 'SPHEQ kids without Myopia',
        marker:{
            size: dipx2n, 
            color: '#a5a996',
        }
    }
    trace2.push(t1c)

    let t2c = {
        x: idx2y,
        y: spqxy,
        mode: 'markers',
        name: 'SPHEQ kids with Myopia -(Mom & Dad Miopic)',
        marker:{
            size: dipx2y, 
            color: '#e30022',
        }
    }
    trace2.push(t2c)

    let t3c = {
        x: idx2ym,
        y: spqxym,
        mode: 'markers',
        name: 'SPHEQ kids with Myopia - (Mom Miopic)',
        marker:{
            size: dipx2ym, 
            color: '#713fff',
        }
    }
    trace2.push(t3c)

    let t4c = {
        x: idx2yd,
        y: spqxyd,
        mode: 'markers',
        name: 'SPHEQ kids with Myopia - (Dad Miopic)',
        marker:{
            size: dipx2yd, 
            color: '#a6d608',
        }
    }
    trace2.push(t4c)

    // let t5b = {
    //     x: idx2all,
    //     y: myopx2n,
    //     name: 'Myopic Dad',
    //     type: 'bar', 
    //     yaxis: "y2",
    //     color: '3fd7ff'
    // }
    // trace1.push(t5b)
 

    var layout = {
        xaxis: {
            // type: 'date',
            autotick: false,
            ticks: 'outside', 
            dtick: 20,
            title: 'Pateint ID',
            xaxis: {
                range: [0, 620],
            // tickmode:'auto', 
            dtick:20
            },
        },
        
        yaxis: {
            autotick: false,
            ticks: 'outside', 
            dtick: .5,
            title: 'SPHEQ & DiopterHR', 
            // range: [19,25],
            autorange: true,
        },
        yaxis2:{
            title: "Myopic Patients ",
            anchor: 'free',
            overlaying: 'y',
            side: 'right',
            position: 1,
            range: [0, 3],
          
        },
        title:'Spherical Equivalent Refraction & Hrs of Diopter ctivities - DIOPTERHR = 3× ( READHR + STUDYHR) + 2 × COMPHR + TVHR'
    }
    console.log(trace2)
    Plotly.newPlot('plot2', trace2, layout)
    
    
});
