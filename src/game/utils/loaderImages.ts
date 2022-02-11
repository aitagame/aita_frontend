
export default function loaderImages(load: HTMLImageElement[], callback: Function, ...params: any){
  let counter = 0;
  console.dir(load);
  function updateConuter(){
    counter++;
    if(counter == load.length){
      callback(...params);
    }
  }
  load.forEach((el: HTMLImageElement)=>{
    el.onload = updateConuter;
  });
}