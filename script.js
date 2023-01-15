let stars = document.getElementById('stars')
let moon = document.getElementById('moon')
let mountains3 = document.getElementById('mountains3')
let mountains4 = document.getElementById('mountains4')
let river = document.getElementById('river')
let boat = document.getElementById('boat')
let mountains7 = document.getElementById('mountains7')
let bmoon = document.getElementById('bmoon')


onscroll = function () {
    stars.style.left = this.scrollY*0.8 + 'px'
    stars.style.bottom = this.scrollY*0.8 + 'px'
    moon.style.top = this.scrollY*3 + 'px'
    mountains3.style.top = this.scrollY*1.1 + 'px'
    mountains4.style.top = this.scrollY*1 + 'px'
    river.style.top = this.scrollY*0.7 + 'px'
    boat.style.top = this.scrollY*0.7 + 'px'
    boat.style.left = this.scrollY*3 + 'px'
    if (scrollY>=11) {
        bmoon.style.fontSize = this.scrollY*1.2 + 'px'
        if (scrollY>=70) {
            bmoon.style.fontSize = 70*1.2 +'px'
        }
        bmoon.style.position ="fixed"
        if (scrollY>=501) {
            bmoon.style.display ="none"
        }else {
            bmoon.style.display ="block"
        }
        if(scrollY>=131){
            let main = this.document.querySelector('.main')
            main.style.background='linear-gradient(rgb(41, 2, 63),rgb(1, 101, 148))'
        }else{
            let main = this.document.querySelector('.main')
            main.style.background='linear-gradient(rgb(41, 2, 63),rgb(71, 3, 110))'
        }
    }
    if (scrollY>=663) {
        document.querySelector('header').style.position='absolute'
    }else{
        document.querySelector('header').style.position='fixed'
    }
    
    if (scrollY>=675) {
        this.document.getElementById('back').style.display='flex'
    }else{
        this.document.getElementById('back').style.display='none'
    }
    if (scrollY>=152) {
        h1.style.transform='translateX(0px)'
        h1.style.transition='0.5s'

    } else{
        h1.style.transform='translateX(-600px)'
        h1.style.transition='0.5s'
    }
    if (scrollY>=152) {
        para1.style.transform='translateX(0px)'
        para1.style.transition='0.5s'

    } else{
        para1.style.transform='translateX(-1300px)'
        para1.style.transition='0.5s'
    }
    if (scrollY>=379) {
        h2.style.transform='translateX(0px)'
        h2.style.transition='0.5s'
    } else{
        h2.style.transform='translateX(-600px)'
        h2.style.transition='0.5s'
    }
    if (scrollY>=379) {
        para2.style.transform='translateX(0px)'
        para2.style.transition='0.5s'
    } else{
        para2.style.transform='translateX(-1300px)'
        para2.style.transition='0.5s'
    }
    if (scrollY>=505) {
        h3.style.transform='translateX(0px)'
        h3.style.transition='0.5s'
    } else{
        h3.style.transform='translateX(-600px)'
        h3.style.transition='0.5s'
    }
    if (scrollY>=505) {
        para3.style.transform='translateX(0px)'
        para3.style.transition='0.5s'
    } else{
        para3.style.transform='translateX(-1300px)'
        para3.style.transition='0.5s'
    }
    if (scrollY>=983) {
        h4.style.transform='translateX(0px)'
        h4.style.transition='0.5s'
    } else{
        h4.style.transform='translateX(-600px)'
        h4.style.transition='0.5s'
    }
    if (scrollY>=983) {
        para4.style.transform='translateX(0px)'
        para4.style.transition='0.5s'
    } else{
        para4.style.transform='translateX(-1300px)'
        para4.style.transition='0.5s'
    }
    if (scrollY>=1056) {
        h5.style.transform='translateX(0px)'
        h5.style.transition='0.5s'
    } else{
        h5.style.transform='translateX(-600px)'
        h5.style.transition='0.5s'
    }
    if (scrollY>=1056) {
        para5.style.transform='translateX(0px)'
        para5.style.transition='0.5s'
    } else{
        para5.style.transform='translateX(-1300px)'
        para5.style.transition='0.5s'
    }
}
function back() {
    scroll({
        top:0,
        behavior:"smooth"
    })
}

let h1=document.getElementById('h1')
let h2=document.getElementById('h2')
let h3=document.getElementById('h3')
let h4=document.getElementById('h4')
let h5=document.getElementById('h5')
let para1=document.getElementById('para1')
let para2=document.getElementById('para2')
let para3=document.getElementById('para3')
let para4=document.getElementById('para4')
let para5=document.getElementById('para5')

