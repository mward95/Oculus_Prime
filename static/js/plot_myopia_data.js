async function consolidated()
var Agex = [] 
var myp1 = []
d3.json("/myopia").then(function(data){
    
    for(var i=0; i<data.lenght; i++){
        let Age1 = data[i].Age
        Agex.push(Age1)
        
        let myp1 = data[i].Myopic_yesno
        myp1x.push(myp1)
    } //end of for
    
    
    
});
consolidated()

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