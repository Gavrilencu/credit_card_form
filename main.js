let number = document.querySelector('.card_number');
let numberCard = document.querySelector('.number');
if(number) {
   number.oninput = showResult;
   function showResult() {
numberCard.innerHTML = this.value
   };
};
let name = document.querySelector('.name');
let inputName = document.querySelector('.card_name');

if(inputName) {
    inputName.oninput = showName;
    function showName() {
        name.innerHTML = this.value;
    };
};
let expire = document.querySelector('.expire');
let inputExpire = document.querySelector('.data');

if(expire) {
    inputExpire.oninput = showDate;
    function showDate() {
        expire.innerHTML = this.value
    };
};
let bloccv = document.querySelector('.ccc');
let cvv = document.querySelector('.cv2');
let image1 = document.querySelector('.prime');
if(cvv) {
    cvv.addEventListener("click", () => {
      bloccv.style.visibility = "visible";
      image1.style.visibility = "hidden"
    });
};

let cv2 = document.querySelector('.card_cv2');
if(cv2) {
    cvv.oninput = showCv2;
    function showCv2() {
        cv2.innerHTML = this.value;
    }
}
