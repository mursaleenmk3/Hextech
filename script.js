const menu=document.getElementById("menu")
const menu_btn=document.getElementById("menu-btn")
const times_btn=document.getElementById("times-btn")
menu_btn.addEventListener("click",()=>{
    menu.style.display='block'
    menu_btn.style.display='none'
    times_btn.style.display='block'
})
times_btn.addEventListener("click",()=>{
    menu.style.display='none'
    menu_btn.style.display='block'
    times_btn.style.display='none'
})

window.addEventListener('scroll', function() {
    var sections = document.querySelectorAll('section');
    var navLinks = document.querySelectorAll('.main-nav .nav-link');
  
    sections.forEach(function(section, index) {
      var rect = section.getBoundingClientRect();
      if (rect.top <= window.innerHeight / 2 && rect.bottom >= window.innerHeight / 2) {
        // Remove active class from all anchor tags
        navLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
        });
  
        // Add active class to the corresponding anchor tag
        navLinks[index].classList.add('active');
      }
    });
  });
  
  
  // Auto scrolling

const carousel=document.querySelector(".carousel")
const btns=document.querySelectorAll(".wapper i")
const firstCardWidth=carousel.querySelector(".testimonial").offsetWidth;
const carouseChildren=[...carousel.children]
 let isDragging=false,startX,startScrollLeft;
 
carouseChildren.slice()

 btns.forEach(btn=>{
  btn.addEventListener("click",()=>{
    carousel.scrollLeft +=btn.id ==="left"? -firstCardWidth:firstCardWidth;
  })
 })
const dragstart=(e)=>{
  isDragging=true;
   carousel.classList.add("dragging")
   startX=e.pageX
   startScrollLeft=carousel.scrollLeft
}
const draging=(e)=>{
   if(!isDragging) return;
  carousel.scrollLeft = startScrollLeft - (e.pageX-startX);

}
const dragstop=()=>{
  isDragging=false;
  carousel.classList.remove("dragging")
}
carousel.addEventListener("mousedown",dragstart)
carousel.addEventListener("mousemove",draging)
document.addEventListener("mouseup",dragstop)


const sentbtn=document.getElementById("send")
const sendmessage=()=>{
  let params={
    name:document.getElementById("name").value,
    email:document.getElementById("email").value,
    message:document.getElementById("message").value
  }
  const serviceId="service_wmwhaws"
  const TemplateId="template_h83djhj"
  
  emailjs
    .send(serviceId,TemplateId,params)
      .then((res)=>{
        document.getElementById("nmae").value=" "
        document.getElementById("email").value=" "
        document.getElementById("message").value=" "
        console.log(res)
        alert("your message sent succesfully")

      })
      .catch((err)=>console.log(err))

}

sentbtn.addEventListener("click",sendmessage)