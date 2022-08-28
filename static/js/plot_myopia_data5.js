// async function consolidated()
var idx5n = []
var idx5y = []
var ltx = [] 
var idx5all =[]
var dipx5n =[]
var dipx5y=[]
var myopx5n =[]
var trace5 = []
var layout =[]
var idx5ym=[], dipx5ym =[]
var idx5yd=[], dipx5yd =[]
var ltxn=[], ltxy=[], ltxym =[], ltxyd=[]
// path = "data\json-fixer.json"

// C:\BC_Classes\Homeworks\project_4\repo_etc\data\myopia.json
// C:\BC_Classes\Homeworks\project_4\repo_etc\static\js\plot_myopia_data.js
d3.json("./static/data1/json-fixer.json").then(function(data){
    data.forEach((list) => {
        // console.log(list)
        
        let myopx5 = list.MYOPIC
        let idx5 = list.ID
        let ltx = list.LT
        let dipx5 = list.DIOPTERHR
        let dadmx5 = list.DADMY
        let mommx5 = list.MOMMY
        if (myopx5 == 0){
            ltxn.push(ltx)
            idx5n.push(idx5)
            dipx5n.push(dipx5/1.75)
        }
        
        
        if(myopx5 == 1){
            if (mommx5 == 1 && dadmx5 == 1){
               
                    ltxy.push(ltx)
                    idx5y.push(idx5)
                    dipx5y.push(dipx5/1.75)
            }
        }

        if(myopx5 == 1){
            if (mommx5 == 1 && dadmx5 == 0){
                    ltxym.push(ltx)
                    idx5ym.push(idx5)
                    dipx5ym.push(dipx5/1.75)
            }
        }
        if(myopx5 == 1){
            if (mommx5 == 0 && dadmx5 == 1){
                    ltxyd.push(ltx)
                    idx5yd.push(idx5)
                    dipx5yd.push(dipx5/1.75)

            }
        }
        // idx5all.push(idx5)
        // myopx5n.push(myopx5)
                
                     
    });
    let t1f = {
        x: idx5n,
        y: ltxn,
        mode: 'markers',
        name: 'LT kids without Myopia',
        marker:{
            size: dipx5n, 
            color: '#a5a996',
        }
    }
    trace5.push(t1f)

    let t2f = {
        x: idx5y,
        y: ltxy,
        mode: 'markers',
        name: 'LT kids with Myopia - (Mom & Dad Miopic)',
        marker:{
            size: dipx5y, 
            color: '#e30022',
        }
    }
    trace5.push(t2f)

    let t3f = {
        x: idx5ym,
        y: ltxym,
        mode: 'markers',
        name: 'LT kids with Myopia - (Mom Miopic)',
        marker:{
            size: dipx5ym, 
            color: '#713fff',
        }
    }
    trace5.push(t3f)

    let t4f = {
        x: idx5yd,
        y: ltxyd,
        mode: 'markers',
        name: 'LT kids with Myopia - (Dad Miopic)',
        marker:{
            size: dipx5yd, 
            color: '#a6d608',
        }
    }
    trace5.push(t4f)

    // let t5b = {
    //     x: idx5all,
    //     y: myopx5n,
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
            title: 'LT & DiopterHR', 
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
        title:'Lens Thickness (LT) & Hrs of Diopter activities - DIOPTERHR = 3× ( READHR + STUDYHR) + 2 × COMPHR + TVHR'
    }
    console.log(trace5)
    Plotly.newPlot('plot5', trace5, layout)
    // console.log(data)
    
});
