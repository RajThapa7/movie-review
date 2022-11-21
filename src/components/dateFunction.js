export const yearExtractor = (date) => {
    if(date == undefined) return ;
  const yearNum = date.split("-")[0];
  return yearNum;
};

export const dateFormatter = (date) => {
    if(date == undefined) return ;
    const yearNum = date.split("-")[0];
    const monthNum = date.split("-")[1];
  const dayNum = date.split("-")[2];
  return `${monthNum}/${dayNum}/${yearNum}`
  
};

export const runTime = (runtime)=>{
  const hour = Math.floor(runtime / 60);
  const minute = Math.floor(((runtime/60) - hour)*60);
  return `${hour}h ${minute}m`
}

