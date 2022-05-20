
 let buttondown1 = document.getElementsByClassName("btn-nbr2")[0];

 buttondown1.addEventListener("click", function () {
   document.getElementById("container").style.backgroundColor = "#00d800";
 });

 let buttondown2 = document.getElementsByClassName("btn-nbr3")[0];

 buttondown2.addEventListener("click", function () {
   document.getElementById("container").style.backgroundColor = "#FF8000";
 });

 let buttondown3 = document.getElementsByClassName("btn-nbr4")[0];
 buttondown3.addEventListener("click", function () {
   document.getElementById("container").style.backgroundColor = "#E7DE13";
 });

 let buttondown4 = document.getElementsByClassName("btn-nbr5")[0];
 buttondown4.addEventListener("click", function () {
   document.getElementById("container").style.backgroundColor = "#FF0000";
 });

 var cel = document.getElementById("cel");
 var fah = document.getElementById("fah");

 cel.addEventListener("input", function () {
   let c = this.value;
   let f = (c * 9 / 5) + 32;
   if (!Number.isInteger(f)) {
     f = f.toFixed(3);
   };
   fah.value = f;
 });

 fah.addEventListener("input", function () {
   let f = this.value;
   let c = (f - 32) * 5 / 9;
   if (!Number.isInteger(c)) {
     c = c.toFixed(3);
   }
   cel.value = c;
 });
 fah.addEventListener("input", function () {
   let f = this.value;
   if (f >= 96.8 && f <= 99.2) {
     document.getElementById("container").style.backgroundColor = "#00d800";
   } else if (f >= 99.3 && f <= 100.8) {
     document.getElementById("container").style.backgroundColor = "#FF8000";
   } else if (f >= 100.9 && f <= 102.6) {
     document.getElementById("container").style.backgroundColor = "#E7DE13";
   } else if (f >= 102.7) {
     document.getElementById("container").style.backgroundColor = "#FF0000";
   } else {

     document.getElementById("container").style.backgroundColor = "rgb(7, 154, 174)";
   }

 });