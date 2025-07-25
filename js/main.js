const navs = document.querySelectorAll('.nav-list li');
const cube = document.querySelector('.box');
const sections = document.querySelectorAll('.section');
const resList = document.querySelectorAll('.resume-list');
const resBox = document.querySelectorAll('.resume-box');
const portList = document.querySelectorAll('.portfolio-list');
const potBox = document.querySelectorAll('.portfolio-box');

//navigation codes
navs.forEach((nav,ind) =>{
    nav.addEventListener('click', ()=>{
        //code to indicate the active tab
        document.querySelector('.nav-list li.active').classList.remove('active')
        nav.classList.add('active')
       
        //now we have to manage the cube when a nav item is clicked
        //for it to display the correct page to be displayed


        //we use the index for degrees and we  multiply the num of ind by -90deg
        cube.style.transform = `rotateY(${ind * -90}deg)`


        document.querySelector('.section.active').classList.remove('active');
        sections[ind].classList.add('active')

        const array =Array.from(sections)
        const arrSection = array.slice(1,-1);
        arrSection.forEach(arrSec=>{
            if(arrSec.classList.contains('active')){
                sections[4].classList.add('action-contact');
            }
        })
        if(sections[0].classList.contains('active')){
            sections[4].classList.remove('action-contact') 

        }
    })
})


//code for resume tab section
resList.forEach((list,ind) =>{
    list.addEventListener('click', ()=>{
        //code to indicate the active tab
        document.querySelector('.resume-list.active').classList.remove('active')
        list.classList.add('active')
       
       //code to make the content of the active tab to appear
        document.querySelector('.resume-box.active').classList.remove('active')
        resBox[ind].classList.add('active')
    })
})

//code for portfolio tab section

portList.forEach((list,ind) => {
    list.addEventListener('click',()=>{
        document.querySelector('.portfolio-list.active').classList.remove('active')
        list.classList.add('active');

        document.querySelector('.portfolio-box.active').classList.remove('active');
        potBox[ind].classList.add('active')

    })

})

//code for typed effect

const typingText  = "Highly motivated and detail oriented security engineer with [3] years of experience in designing and implementing secure systems.";
const typingElement = document.querySelector('.typed');
let index = 0;
let isTyping = true;

function type(){
    if(isTyping){
        if(index < typingText.length){
            typingElement.textContent += typingText[index]
            index++
            setTimeout(type,50)
        }else{
            isTyping = false
            setTimeout(type,1000)//pause before deleteng
        }
    }else{
        if(index > 0){
            typingElement.textContent = typingText.substring(0,index - 1)
            index--
            setTimeout(type,50)
        }else{
            isTyping = true;
            setTimeout(type,500)//pause before try again
        }
    }
}

type()