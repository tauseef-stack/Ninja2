let PamID = [1, 2, 2, 3, 4];
let JimID = [1, 2, 3, 4, 5, 5]
let N = PamID.length;
let M = JimID.length;
let obj1 = {};
let obj2 = {};
for(var i=0 ; i<N ; i++){
  if(obj1[PamID[i]]===undefined){
     obj1[PamID[i]]=1;
  }
  else{
     obj1[PamID[i]]+=1; 
  }
  
  if(obj2[JimID[i]]===undefined){
     obj2[JimID[i]]=1;
  }
  else{
     obj2[JimID[i]]+=1; 
  }
}
     console.log(obj1,obj2)