document.getElementById("contact-form")?.addEventListener("submit", function (e) {
  e.preventDefault();
  var name = document.getElementById("fname").value.trim();
  var email = document.getElementById("femail").value.trim();
  var msg = document.getElementById("fmessage").value.trim();
  var subject = "Portfolio enquiry from " + name;
  var body = msg + "\n\n" + name + " (" + email + ")";
  window.location.href = "mailto:kvijayasekar11@gmail.com?subject=" + encodeURIComponent(subject) + "&body=" + encodeURIComponent(body);
});
