//加载更多
export const loadMore = (ele,cb) =>{ //cb 是做的操作
    let timer = null
    ele.addEventListener('scroll',()=>{

        clearTimeout(timer)
        timer = setTimeout(()=>{
            let {offsetHeight ,scrollTop,scrollHeight} = ele;
        if(scrollTop+offsetHeight+20>scrollHeight){ //滚出去的高度+可视高度与整个高度相差20  就加载
            cb()
        }
        },30)
    },false)

}
export const pushMore = (ele,cb) => {
    let timer = null
    let offsetTop  = ele.offsetTop;
    let distance =  0
    ele.addEventListener('touchstart',(e)=>{
        let disY = e.touches[0].pageY
        let touchmove = function (e) {
            let moveY = e.touches[0].pageY
            if(moveY>disY){

                if(moveY-disY>50){
                    distance = 50
                    return  ele.style.top = offsetTop + 20 +'px'
                }
                 console.log('下拉')
                distance = moveY-disY
            }else{
                ele.removeEventListener('touchmove',touchmove)
                ele.removeEventListener('touchend',touchend)
            }
        }
        let touchend = function () {
            if(distance!==50){
                return ele.style.top = offsetTop  +'px'
            }
           timer =  setInterval( ()=>{
               distance --
               if(distance<=0){
                   clearTimeout(timer)
                   cb()
                   ele.style.top = offsetTop + distance +'px'
               }
           },6)
            ele.removeEventListener('touchmove',touchmove)
            ele.removeEventListener('touchend',touchend)
        }
        if(offsetTop === ele.offsetTop&&ele.scrollTop===0){
            ele.addEventListener('touchmove',touchmove)
            ele.addEventListener('touchend',touchend)
        }else{
            ele.removeEventListener('touchmove',touchmove)
            ele.removeEventListener('touchend',touchend)
        }
    },false)

}