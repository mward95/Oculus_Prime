// async function consolidated()
var idx4n = []
var idx4y = []
var vcdx = [] 
var idx4all =[]
var dipx4n =[]
var dipx4y=[]
var myopx4n =[]
var trace4 = []
var layout =[]
var idx4ym=[], dipx4ym =[]
var idx4yd=[], dipx4yd =[]
var vcdxn=[], vcdxy=[], vcdxym =[], vcdxyd=[]
// path = "data\json-fixer.json"

// C:\BC_Classes\Homeworks\project_4\repo_etc\data\myopia.json
// C:\BC_Classes\Homeworks\project_4\repo_etc\static\js\plot_myopia_data.js
d3.json("./static/data1/json-fixer.json").then(function(data){
    data.forEach((list) => {
        // console.log(list)
        
        let myopx4 = list.MYOPIC
        let idx4 = list.ID
        let vcdx = list.VCD
        let dipx4 = list.DIOPTERHR
        let dadmx3 = list.DADMY
        let mommx4 = list.MOMMY
        if (myopx4 == 0){
            vcdxn.push(vcdx)
            idx4n.push(idx4)
            dipx4n.push(dipx4/1.75)
        }
        
        
        if(myopx4 == 1){
            if (mommx4 == 1 && dadmx3 == 1){
               
                    vcdxy.push(vcdx)
                    idx4y.push(idx4)
                    dipx4y.push(dipx4/1.75)
            }
        }

        if(myopx4 == 1){
            if (mommx4 == 1 && dadmx3 == 0){
                    vcdxym.push(vcdx)
                    idx4ym.push(idx4)
                    dipx4ym.push(dipx4/1.75)
            }
        }
        if(myopx4 == 1){
            if (mommx4 == 0 && dadmx3 == 1){
                    vcdxyd.push(vcdx)
                    idx4yd.push(idx4)
                    dipx4yd.push(dipx4/1.75)

            }
        }
        // idx4all.push(idx4)
        // myopx4n.push(myopx4)
                
                     
    });
    let t1e = {
        x: idx4n,
        y: vcdxn,
        mode: 'markers',
        name: 'VCD kids without Myopia',
        marker:{
            size: dipx4n, 
            color: '#a5a996',
        }
    }
    trace4.push(t1e)

    let t2e = {
        x: idx4y,
        y: vcdxy,
        mode: 'markers',
        name: 'VCD kids with Myopia - (Mom & Dad Miopic)',
        marker:{
            size: dipx4y, 
            color: '#e30022',
        }
    }
    trace4.push(t2e)

    let t3e = {
        x: idx4ym,
        y: vcdxym,
        mode: 'markers',
        name: 'vcd kids with Myopia - (Mom Miopic)',
        marker:{
            size: dipx4ym, 
            color: '#713fff',
        }
    }
    trace4.push(t3e)

    let t4e = {
        x: idx4yd,
        y: vcdxyd,
        mode: 'markers',
        name: 'VCD kids with Myopia - (Dad Miopic)',
        marker:{
            size: dipx4yd, 
            color: '#a6d608',
        }
    }
    trace4.push(t4e)

    // let t5b = {
    //     x: idx4all,
    //     y: myopx4n,
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
           
            },
        },
        
        yaxis: {
            autotick: false,
            ticks: 'outside', 
            dtick: .25,
            title: 'VCD & DiopterHR', 
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
        title:'Vitreous Chamber Depth (VCD) & Hrs of Diopter activities - DIOPTERHR = 3× ( READHR + STUDYHR) + 2 × COMPHR + TVHR'
    }
    console.log(trace4)
    Plotly.newPlot('plot4', trace4, layout)
    // console.log(data)
    
});
