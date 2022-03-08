//Search

$("#searchInput").SearchDrop("Chinese","Italian","Sea Food","Fast Food","Continental")
$(".chosen-select").chosen();
$(".chosen-select2").chosen();


const tabTop=[...document.querySelectorAll(".Tab-top button")]
const tabdown=[...document.querySelectorAll(".Tab-down .content")]


for(let i=0;i<tabTop.length;i++){

    tabTop[i].onclick=function(){

        for(let j=0;j<tabdown.length;j++){
            tabdown[j].classList.remove("active")
            tabTop[j].classList.remove("active")

        }
        let indexBtn=tabTop.indexOf(this)
        setTimeout(() => {
            tabdown[indexBtn].classList.add("active")
        }, 200);
       tabTop[indexBtn].classList.add("active")


    }
    console.log(tabdown)

}


//Slick Slider
$('.Slider').slick({
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
            dots: true
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

$('.Content').slick({
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay:true,
    responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 2,
            slidesToScroll: 1,
            infinite: true,
          }
        },
        {
          breakpoint: 600,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
  });

//Slider

// const images=["photo/custome-1.jpg","photo/custome-2.jpg","photo/custome-1.jpg","photo/custome-2.jpg"]

// const next=document.querySelector("#slider .next")
// const prev=document.querySelector("#slider .prev")
// var sliderLeft=document.querySelector("#slider .slider-item-left img")
// var sliderRight=document.querySelector("#slider .slider-item-right img")

// sliderLeft.src=images[0]
// sliderRight.src=images[1]
// let currentSlide=0;


// next.onclick=function(){
//     clearInterval(SliderINt)
//     NexSlider()
//     setTimeout(() => {
//         setInterval(() => {
//            NexSlider() 
//         },1000);
//     }, 3000);

// }
// prev.onclick=function(){
//     clearInterval(SliderINt)
//     NexSlider()
//     setTimeout(() => {
//         setInterval(() => {
//            NexSlider() 
//         },1000);
//     }, 3000);

// }
// var SliderINt=setInterval(function(){
//     NexSlider()
//     PrevSlider()
// },3000)


// function NexSlider(){
//     currentSlide++;
//     console.log(currentSlide,images.length)

//     if(currentSlide>=images.length){
//         currentSlide=0
//     }
//     sliderLeft.src=images[currentSlide]
//     sliderRight.src=images[currentSlide-1]
//     console.log(currentSlide)
// }
// function PrevSlider(){
//     currentSlide--;
    
//     if(currentSlide==-1){
//         currentSlide=images.length-1
//     }
//     sliderLeft.src=images[currentSlide]
//     sliderRight.src=images[currentSlide-1]
//     console.log(currentSlide)
// }



