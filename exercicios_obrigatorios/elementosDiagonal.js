let MI = [];

for(let i = 0; i <7;i++){
  MI.push([]);
  for(let j = 0; j< 7; j++){
    if(i === j){
      MI[i].push(1);
    }else{
      MI[i].push(0);
    }
  }
}
for(let i = 0; i < MI.length; i++){
  console.log(MI[i].join(" "));
}
