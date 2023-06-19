let living=document.querySelector("#living");
let Dining= document.querySelector('#dining');
let Bath= document.querySelector('#bath');
let Kitchen= document.querySelector('#kitchen');
let ProductHideLiving =document.querySelector('#f1');
let ProductHideDining=document.querySelector('#f2');
let ProductHideBath=document.querySelector('#f3');
let ProductHideKitchen=document.querySelector('#f4');
let Like=document.querySelector('#like');
let MenuIcon=document.querySelector('.menuicon');
let MenuBar=document.querySelector('.menubar');
let LikeCount=document.querySelector('likecount');

ProductHideDining.classList.add('disabled');
ProductHideBath.classList.add('disabled');
ProductHideKitchen.classList.add('disabled');
MenuIcon.onclick =()=>{
  MenuBar.classList.toggle('active');
}
MenuBar.onclick =()=>{
  MenuBar.classList.remove('active');
}
Like.onclick =() =>{
  Like.classList.toggle('liked');
  // saveData();
  // Dining.classList.remove('disabled');
}
living.onclick =() =>{
    ProductHideLiving.classList.remove('disabled');
    ProductHideDining.classList.add('disabled');
    ProductHideBath.classList.add('disabled');
    ProductHideKitchen.classList.add('disabled');
    // Dining.classList.remove('disabled');
}
Dining.onclick=()=>{
    ProductHideDining.classList.remove('disabled');
    ProductHideLiving.classList.add('disabled');
    ProductHideBath.classList.add('disabled');
    ProductHideKitchen.classList.add('disabled');
}
Bath.onclick=()=>{
  ProductHideDining.classList.add('disabled');
  ProductHideLiving.classList.add('disabled');
  ProductHideBath.classList.remove('disabled');
  ProductHideKitchen.classList.add('disabled');
}
Kitchen.onclick=()=>{
  ProductHideKitchen.classList.remove('disabled');
  ProductHideLiving.classList.add('disabled');
  ProductHideDining.classList.add('disabled');
  ProductHideBath.classList.add('disabled');
}


// swipper
  var swiper = new Swiper(".mySwiper", {
    slidesPerView: 3,
    spaceBetween: 30,
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    navigation: {
        nextEl: ".swiper-button-next",
        prevEl: ".swiper-button-prev",
      },
  });
  // showTask();
  let LivingRoomProducts=[
    {
      id:1,
      image:"Images/livingRoom1.jpg",
      content:"White House",
      LikeCount:0,
    },
    {
      id:2,
      image:"Images/livingRoom3.jpg",
      content:"Apartment",
      LikeCount:0,
    },
    {
      id:3,
      image:"Images/livingRoom4.jpg",
      content:"Apartment",
      LikeCount:0,
    },
    {
      id:4,
      image:"Images/livingRoom5.jpg",
      content:"Apartment",
      LikeCount:0,
    },
    {
      id:5,
      image:"Images/livingRoom6.jpg",
      content:"Apartment",
      LikeCount:0,
    },
  ];
  // let productitems=[];
  // let ProductsLiving = document.getElementById('f1');
const Living = document.querySelector('.livingroom');
LivingRoomProducts.forEach((val)=>
  {
    let ProductDiv=`
    <div class="box">
    <div class="icons">
                <a  class="fas fa-save"></a>
                <a  class="fas fa-heart" id="like"></a>
    </div>
    <div class="image">
    <img src="${val.image}">
    </div>
    <div class="content">
        <h3>${val.content}</h3>
    </div>
    </div> `; 
    Living.innerHTML += ProductDiv;
  })

  // let DiningRoomProducts=[
  //   {
  //     id:1,
  //     image:"Images/Images/DiningRoom1.jpg",
  //     content:"White House",
  //     LikeCount:0,
  //   },
  //   {
  //     id:2,
  //     image:"Images/Images/DiningRoom2.jpg",
  //     content:"White House",
  //     LikeCount:0,
  //   },
  //   {
  //     id:3,
  //     image:"Images/Images/DiningRoom3.jpg",
  //     content:"White House",
  //     LikeCount:0,
  //   },
  //   {
  //     id:4,
  //     image:"Images/Images/DiningRoom4.jpg",
  //     content:"White House",
  //     LikeCount:0,
  //   },
  //   {
  //     id:5,
  //     image:"Images/Images/DiningRoom5.jpg",
  //     content:"White House",
  //     LikeCount:0,
  //   },
  //   {
  //     id:6,
  //     image:"Images/Images/DiningRoom6.jpg",
  //     content:"White House",
  //     LikeCount:0,
  //   },
  // ];
  // const Dining = document.querySelector('.DiningRoom');
  // LivingRoomProducts.forEach((val)=>
  //   {
  //     let ProductDivs=`
  //     <div class="box">
  //     <div class="icons">
  //                 <a  class="fas fa-save"></a>
  //                 <a  class="fas fa-heart" id="like"></a>
  //     </div>
  //     <div class="image">
  //     <img src="${val.image}">
  //     </div>
  //     <div class="content">
  //         <h3>${val.content}</h3>
  //     </div>
  //     </div> `; 
  //     Dining.innerHTML += ProductDiv;
  //   })

  
   
 
  
  
  


  

  




