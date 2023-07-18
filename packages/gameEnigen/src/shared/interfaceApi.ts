
export const createCanvas = () => {
  if(document){
    return document.createElement('canvas')
  }else if(window.wx){
    return window.wx.createCanvas()
  }
  return null;
}

export const addEvent = (type, callback) => {
  window.addEventListener(type, function(e){
    e.preventDefault()
    callback(e)
  })
}