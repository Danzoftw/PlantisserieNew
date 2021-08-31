// if (window.location.href.indexOf("3000") != -1) {
  let ul = document.getElementById("ul-parent");
  // console.log()
  // for(var p=0;p<=ul.childNodes.length-1;p++){
  //   ul.childNodes[p].classList.add("hello-test")
  // }
  let li = ul.getElementsByTagName('li');
  for(let i=0; i<li.length; i++){
      li[i].addEventListener("click", getTarget);
      li[i].childNodes[0].classList.add("default-btn-class");
      // li[i].childNodes[0].classList.add("slick-active");
  }

  // li.childNodes.classList.add("default-btn-class");
  console.warn(li)

  function getTarget(e){
    var i;
    // e.target.classList.add("default-btn-class");
    if(!e.target.classList.contains("slick-active-btn")){
      e.target.classList.add("slick-active-btn","btn-target","slick-active-btn-2");
      // e.target.classList.add("btn-target");
      let element = document.querySelector('.my-element')
    }
    if(!e.target.classList.contains("slick-active-btn")){
      for(i=0;i<=e.target.length;i++){
        e.target.classList.add("slick-active-btn","btn-target");
      }
    }
    // if(!e.target.classList.contains("slick-active")){
    //   for(i=1;i<=e.target.length;i++){
    //     e.target.classList.remove("slick-active");
    //   }
    // }
  }

  var j = 0;
  var k = 1;
  function AnimateBtn() {
    setTimeout(function() {
      li[j].childNodes[0].click();
      // console.warn(li[j].childNodes[0]);
      j++;
      if (j < li.length) {
        AnimateBtn();
      }
      // else if(li.length-1){
      else{
        // console.log('reached last index');
        AnimateBtn();
        insideLoop();
        j=0;
      }                   //  ..  setTimeout()
    }, 1500)
    // console.log(li);
  }

  function insideLoop(){
    // for(k=0;k<=li.length;k++){
        setTimeout(function() {
        var rmvClass = document.getElementsByClassName("slick-active-btn");
        // console.log(rmvClass)
        for(k=0;k<=rmvClass.length;k++){
          // rmvClass[0].classList.remove("btn-target");
          if(rmvClass[0]?.classList){
          rmvClass[0].classList.remove("slick-active-btn","slick-active-btn-2");
          rmvClass[0].classList.remove("slick-active-btn","slick-active-btn-2");
          }
        }
      }, 100)
    // }
  }
  window.onload = AnimateBtn()
// }



console.log(window.location.href);