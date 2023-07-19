let myLead = [];
// 1.turn the myLead string into array
// myLead = JSON.parse(myLead);
// //2.push a new value into the array
// myLead.push("www.aaaa.com");
// //3.turn the array into string again
// myLead = JSON.stringify(myLead);
// //4.console..log the string using typeof too verify that it`s a string
// console.log(typeof myLead);

const inputEl = document.getElementById("input-el");
const inputbtn = document.getElementById("input-btn");
const ulel = document.getElementById("ul-el");
const deletebtn = document.getElementById("delete-btn");
const tabbtn = document.getElementById("tab-btn");
tabbtn.addEventListener("click", function () {
  const tab = [{ url: "https://www.youtube.com/" }];
  // console.log(tab[0].url);
  myLead.push(tab[0].url);
});

deletebtn.addEventListener("dblclick", function () {
  console.log("hey world");
  // deletebtn.style.backgroundColor = "yellow";
  myLead = [];
  renderLeads();
});
// for (let i = 0; i < myLead.length; i++) {
//   ulel.innerHTML += "<li>" + myLead[i] + "</li>";
// }
// ulel.innerHTML = "<button onClick='buy()'>Buy!!</button>";

// function buy() {
//   ulel.addEventListener("click", function () {
//     ulel.innerHTML += "<p>Thank you for buying!</p>";
//   });
// }
// buy();
// inputbtn.addEventListener("click", function () {
//   myLead.push("www.awesomelead.com");
//   //   console.log(myLead);
// });

inputbtn.addEventListener("click", function () {
  myLead.push(inputEl.value);

  // **line 26 code will clear the input field for the next input, & line 27 code will re-easstablished the cursor to the input field.
  inputEl.value = " ";
  inputEl.focus();
  renderLeads();
  //   console.log(myLead);
});

function renderLeads() {
  let listItems = " ";
  for (let i = 0; i < myLead.length; i++) {
    // listItems += "<li><a href='#' target='_blank'  >" + myLead[i] + "</a></li>";
    listItems += `<li><a href='#' target='_blank'  >${myLead[i]}  </a></li>`;
  }
  ulel.innerHTML = listItems;
}
