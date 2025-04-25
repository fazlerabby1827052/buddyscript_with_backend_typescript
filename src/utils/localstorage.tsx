export const setToLocalStorage=(key:string,value:string)=>{
    localStorage.setItem(key,JSON.stringify(value));
}

export const getFromLocalStorage=(key:string)=>{
    
    const value=localStorage.getItem(key);
    if(value){
        return JSON.parse(value);
    }
    return [];
}

export const getFromLocalStoragetwo=(key:string)=>{
    
    const value=localStorage.getItem(key);
    if(value){
        return JSON.parse(value);
    }
    return null;
}


export const AlluserFetch=()=>{
    const user=getFromLocalStorage("user");
    if(user){
        return user;
    }
    return [];
}

export const getTimeAgo = (postTime: string): string => {
    const postTimestamp = new Date(postTime).getTime();
    const seconds = Math.floor((Date.now() - postTimestamp) / 1000);
  
    if (seconds < 60) {
      return seconds <= 1 ? "1 second ago" : `${seconds} seconds ago`;
    }
  
    const minutes = Math.floor(seconds / 60);
    if (minutes < 60) {
      return minutes <= 1 ? "1 minute ago" : `${minutes} minutes ago`;
    }
  
    const hours = Math.floor(minutes / 60);
    if (hours < 24) {
      return hours <= 1 ? "1 hour ago" : `${hours} hours ago`;
    }
  
    const days = Math.floor(hours / 24);
    return days <= 1 ? "1 day ago" : `${days} days ago`;
  };


