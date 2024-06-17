const BASE_URL =
"https://2024-03-06.currency-api.pages.dev/v1/currencies";
let msg = document.querySelector(".msg");
const fromCurr = document.querySelector(".from select");
const toCurr = document.querySelector(".to select");

  const btn=document.querySelector("form button");
  const dropdowns = document.querySelectorAll(".dropdown select");

  const updateExchangeRate = async () => {
    let amount = document.querySelector(".amount input");
    let amtVal = amount.value;
    if (amtVal === "" || amtVal < 1) {
      amtVal = 1;
      amount.value = "1";
    }
    const URL = `${BASE_URL}/${fromCurr.value.toLowerCase()}.json`;
    console.log(URL);
    let response = await fetch(URL);
    let data = await response.json();
    // console.log(data);
    let rate_obj = data[fromCurr.value.toLowerCase()];
    rate = rate_obj[toCurr.value.toLowerCase()];
    let finalAmount = amtVal * rate;
    msg.innerText = `${amtVal} ${fromCurr.value} = ${finalAmount} ${toCurr.value}`;
  };

  for (let select of dropdowns) {
    for (let currCode in countryList){
      let newOption = document.createElement("option");
      newOption.innerText = currCode;
      newOption.value = currCode;
      if (select.name === "from" && currCode === "USD") {
        newOption.selected = "selected";
      } 
      else if (select.name === "To" && currCode === "INR") {
        newOption.selected = "selected";
      }
    select.append(newOption);
    }
}

for (let select of dropdowns) {
select.addEventListener("change", (evt) => {
    updateFlag(evt.target); // target= child by which event on parent is envoked
  });
}
function updateFlag(element){
let currencycode = element.value;
  let CountryCode = countryList[currencycode];
  let newSrc = `https://flagsapi.com/${CountryCode}/flat/64.png`;
  let img = element.parentElement.querySelector("img"); //i had to change  to only the image of select whose option is changed
  img.src = newSrc;
}
//console.log(fromCurr.value); //The select.value property in JavaScript is used to get or set the value of the currently selected option within a <select> element. This value corresponds to the value attribute of the selected <option> element. If the value attribute is not explicitly defined, the value property defaults to the text content of the selected <option>.
btn.addEventListener("click",(evt)=>{
    evt.preventDefault();
    updateExchangeRate();
});