function makeDiv (param) {
    let div = document.createElement('div')
    div.setAttribute('id',`${param.owns}`)
    div.innerHTML=`${param.borrowed}`
    div.setAttribute('cat',`${param.meows}`)
    return div
    }

export default makeDiv