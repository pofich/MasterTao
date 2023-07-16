$(document).ready(function(){
    $('.first-screen-slider').slick({
        dots:true,
        Infinite:true,
        appendArrows:".first-screen-slider_arrows",
        responsive: [
            {
              breakpoint: 991,
              settings: {
               arrows:false,
              }
            },
          ]
    });
  });
  const checkbox = document.querySelectorAll('[type="checkbox"]')


console.log(document.querySelectorAll('[type="checkbox"]'));

checkbox.forEach(item => {
    item.closest('.input-box').classList.add('has-checkbox')
    item.closest('.input-column').classList.add('padding')
})
document.getElementById('myfile').onchange = function() {

  //long name
  const fileName = document.getElementById('file-name');
  fileName.innerHTML = this.value;
  //short name
  // document.getElementById('file-name').innerHTML = this.files[0].name;

};