let sto = [7,2,6,1,8,9]
let temp = []
let min = sto[0];
let max = sto[0];

for(i=0;i<sto.length;i++){
    if(sto[i]>max){
        max=sto[i]
    }
        if(sto[i]<min){
        min=sto[i]
    }
}

let index_min = sto.indexOf(min)
let index_max = sto.indexOf(max)

if(index_min>index_max){
    console.log(0)
}
else{
    for(i=0;i<sto.length;i++){
 for(j=i+1;j<sto.length;j++){
    temp.push((sto[i]-sto[j]))
    temp.push((sto[j]-sto[i]))
}
}
temp.sort()
console.log(temp[temp.length-1])   
}





// -------------------------------



let sto = [7,6,4,3,1];
let min = 0;
let profit = []

    for(i=0;i<sto.length;i++){
        let temp = []
 for(j=i+1;j<sto.length;j++){
     
      temp.push(sto[j]-sto[i]);
}
temp.sort((a,b)=>b-a)
profit.push(temp[0])
}

profit.sort((a,b)=>b-a)
if(profit[0]>=0){
    return profit[0];
}
else{
    return 0;
}