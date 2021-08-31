let txtUse = "coming soon . under propagation . "

function circularText(txt, radius, classIndex) {
  txt = txt.split(""),
    classIndex = document.getElementsByClassName("circTxt")[classIndex];

  var deg = 360 / txt.length,
    origin = 0;

  txt.forEach((ea) => {
    ea = `<p style='height:${radius}px;position:absolute;transform:rotate(${origin}deg);transform-origin:0 100%'>${ea}</p>`;
    classIndex.innerHTML += ea;
    origin += deg;
  });
}

circularText(txtUse, 160, 0);

if (window.screen.width < 768) {
  circularText(txtUse, 160, 0);
}
// if (window.screen.width >= 768) {
//   circularText("coming soon . under propagation . ", 200, 0);
// }