// async function consolidated()
var idx1n = []
var idx1y = []
var alx1n = [] 
var idx1all =[]
var dipx1n =[]
var dipx1y=[]
var myopx1n =[]
var alx1y =[]
var dadmx1n =[]
var mommx1n =[]
var trace1 = []
var layout =[]
var alx1ym =[], idx1ym=[], dipx1ym =[]
var alx1yd =[], idx1yd=[], dipx1yd =[]
// path = "data\json-fixer.json"

// C:\BC_Classes\Homeworks\project_4\repo_etc\data\myopia.json
// C:\BC_Classes\Homeworks\project_4\repo_etc\static\js\plot_myopia_data.js
d3.json("./static/data1/json-fixer.json").then(function(data){
    data.forEach((list) => {
        // console.log(list)
        
        let myopx1 = list.MYOPIC
        let idx1 = list.ID
        let alx1 = list.AL
        let dipx1 = list.DIOPTERHR
        let dadmx1 = list.DADMY
        let mommx1 = list.MOMMY
        if (myopx1 == 0){
            alx1n.push(alx1)
            idx1n.push(idx1)
            dipx1n.push(dipx1/1.75)
        }
        
        
        if(myopx1 == 1){
            if (mommx1 == 1 && dadmx1 == 1){
               
                    alx1y.push(alx1)
                    idx1y.push(idx1)
                    dipx1y.push(dipx1/1.75)
            }
        }

        if(myopx1 == 1){
            if (mommx1 == 1 && dadmx1 == 0){
                    alx1ym.push(alx1)
                    idx1ym.push(idx1)
                    dipx1ym.push(dipx1/1.75)
            }
        }
        if(myopx1 == 1){
            if (mommx1 == 0 && dadmx1 == 1){
                    alx1yd.push(alx1)
                    idx1yd.push(idx1)
                    dipx1yd.push(dipx1/1.75)

            }
        }
        idx1all.push(idx1)
        myopx1n.push(myopx1)
                
                     
    });
    let t1b = {
        x: idx1n,
        y: alx1n,
        mode: 'markers',
        name: 'AL of kids without Myopia',
        marker:{
            size: dipx1n, 
            color: '#a5a996',
        }
    }
    trace1.push(t1b)

    let t2b = {
        x: idx1y,
        y: alx1y,
        mode: 'markers',
        name: 'AL - kids with Myopia - (Mom & Dad Miopic)',
        marker:{
            size: dipx1y, 
            color: '#e30022',
        }
    }
    trace1.push(t2b)

    let t3b = {
        x: idx1ym,
        y: alx1ym,
        mode: 'markers',
        name: 'AL - kids with Myopia (Mom Miopic)',
        marker:{
            size: dipx1ym, 
            color: '#713fff',
        }
    }
    trace1.push(t3b)

    let t4b = {
        x: idx1yd,
        y: alx1yd,
        mode: 'markers',
        name: 'AL -  kids with Myopia (Dad Miopic)',
        marker:{
            size: dipx1yd, 
            color: '#a6d608',
        }
    }
    trace1.push(t4b)

    // let t5b = {
    //     x: idx1all,
    //     y: myopx1n,
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
            dtick: .5,
            title: 'AL & DopterHR', 
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
        title:'<b>Children with/without Myopia & Parents with/without Myopia vs.Axial Lenght (AL) <br> Bubble Size = [DIOPTERHR = 3× ( READHR + STUDYHR) + 2 × COMPHR + TVHR]</b>'
    }
    console.log(trace1)
    Plotly.newPlot('plot1', trace1, layout)
    
    
});
