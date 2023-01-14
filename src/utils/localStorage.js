export const loadLocalStorage =()=>{
  try{
    const localStore = localStorage.getItem("store")
    if(localStore === null){
      return undefined
    }
    return JSON.parse(localStore)
  } catch (err){
    return undefined
  }
}

export const saveLocalStorage = (store) =>{
  try {
    const localStore = JSON.stringify(store)
    localStorage.setItem("store", localStore)
  } catch (err){
    console.log(`localstorage save failed. \nStore : ${store}`)
    return;
  }
}