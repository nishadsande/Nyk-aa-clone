let popupCloseButton = document.querySelector("#popupClose");
popupCloseButton.addEventListener("click", () => {
    document.querySelector("#coupon-header").style.display = "none";
});



/*Light & dark mode*/
const clormode=()=>{
    let mybody =document.body;
   mybody.classList.toggle('mydark')
}
