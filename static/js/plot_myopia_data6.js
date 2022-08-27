// async function consolidated()
var idx6n = []
var idx6y = [], idx6j =[]
var alx2 = [] 
var idx6all =[]
var dipx6n =[]
var dipx6y=[], dipx6j=[]
var myopx6n =[]
var trace6 = []
var layout =[]
var idx6ym=[], dipx6ym =[]
var idx6yd=[], dipx6yd =[]
var alx2n=[], alx2y=[], alx2ym =[], alx2yd=[], alx2j =[]
// path = "data\json-fixer.json"

// C:\BC_Classes\Homeworks\project_4\repo_etc\data\myopia.json
// C:\BC_Classes\Homeworks\project_4\repo_etc\static\js\plot_myopia_data.js
d3.json("./static/data1/json-fixer.json").then(function(data){
    data.forEach((list) => {
        // console.log(list)
        
        let myopx6 = list.MYOPIC
        let idx6 = list.ID
        let alx2 = list.AL
        let dipx6 = list.DIOPTERHR
        let dadmx6 = list.DADMY
        let mommx6 = list.MOMMY
        // if (myopx6 == 0){
        //     alx2n.push(alx2)
        //     idx6n.push(idx6)
        //     dipx6n.push(dipx6/1.75)
        // }
        
        if (mommx6 == 1 && dadmx6 == 1){
            if (myopx6 == 0){               
                    alx2y.push(alx2)
                    idx6y.push(idx6)
                    dipx6y.push(dipx6/1.75)
            }
        }
        if (mommx6 == 1 && dadmx6 == 1){
            if (myopx6 == 1){               
                    alx2j.push(alx2)
                    idx6j.push(idx6)
                    dipx6j.push(dipx6/1.75)
            }
        }

               // idx6all.push(idx6)
        // myopx6n.push(myopx6)
                
                     
    });
    let t1g = {
        x: idx6y,
        y: alx2y,
        mode: 'markers',
        name: 'AL kids without Myopia (Mom & Dad Miopic)',
        marker:{
            size: dipx6y, 
            color: '#a5a996',
        }
    }
    trace6.push(t1g)

    let t2g = {
        x: idx6j,
        y: alx2j,
        mode: 'markers',
        name: 'AL kids with Myopia (Mom & Dad Miopic)',
        marker:{
            size: dipx6j, 
            color: '#e30022',
        }
    }
    trace6.push(t2g)

    // let t3f = {
    //     x: idx6ym,
    //     y: alx2ym,
    //     mode: 'markers',
    //     name: 'LT kids with Myopia - (Mom Miopic)',
    //     marker:{
    //         size: dipx6ym, 
    //         color: '#713fff',
    //     }
    // }
    // trace5.push(t3f)

    // let t4f = {
    //     x: idx6yd,
    //     y: alx2yd,
    //     mode: 'markers',
    //     name: 'LT kids with Myopia - (Dad Miopic)',
    //     marker:{
    //         size: dipx6yd, 
    //         color: '#a6d608',
    //     }
    // }
    // trace5.push(t4f)

    // let t5b = {
    //     x: idx6all,
    //     y: myopx6n,
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
        title:'With both Parents being Myopic - List of children turned out to be Miopic'
    }
    console.log(trace6)
    Plotly.newPlot('plot6', trace6, layout)
    // console.log(data)
    
});
