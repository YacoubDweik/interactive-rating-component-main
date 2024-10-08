let form = document.forms[0];
form.onsubmit = function (e) {
  e.preventDefault();
  let rateField =
    document.querySelector('input[type="radio"]:checked') ??
    false;
  if (rateField.value) {
    localStorage["rate"] = rateField.value;
    window.location.href = "./thanks.html";
  } else {
    alert("You should rate us!");
    return;
  }
};
