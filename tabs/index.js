// get the Python div element
const pythonDiv = document.getElementById("python");

// add a click event listener
pythonDiv.addEventListener("click", function() {
  // get the test div element
  const testDiv = document.getElementById("test");
  
  // create the new text node
  const newText = document.createTextNode("As a Python backend web developer, I have a solid understanding of web development principles and experience in developing and maintaining web applications using Python frameworks such as Django, Flask, and Pyramid. I am proficient in designing and implementing RESTful APIs, integrating with databases like MySQL, PostgreSQL, and MongoDB, and implementing server-side authentication and authorization. I am comfortable working in a team environment and have experience with version control systems like Git. I am continuously seeking to enhance my skills and stay up-to-date with the latest technologies in web development.");
  
  // replace the content of the test div with the new text
  testDiv.innerHTML = "";
  testDiv.appendChild(newText);
});

const javasDiv = document.getElementById("JavaS");

// add a click event listener
javasDiv.addEventListener("click", function() {
  // get the test div element
  const testDiv = document.getElementById("test");
  
  // create the new text node
  const newText = document.createTextNode("As a JavaScript developer, I have a strong understanding of web development principles and experience in developing and maintaining web applications using JavaScript frameworks such as React, Angular, and Vue.js. I am proficient in designing and implementing RESTful APIs, integrating with databases like MySQL, PostgreSQL, and MongoDB, and implementing client-side authentication and authorization. I have experience with front-end technologies such as HTML, CSS, and Bootstrap, and I am comfortable working in a team environment and have experience with version control systems like Git. I am passionate about building highly scalable and performant web applications and keeping up with the latest advancements in JavaScript technology.");
  
  // replace the content of the test div with the new text
  testDiv.innerHTML = "";
  testDiv.appendChild(newText);
});


const htmlcssDiv = document.getElementById("htmlcss");

// add a click event listener
htmlcssDiv.addEventListener("click", function() {
  // get the test div element
  const testDiv = document.getElementById("test");
  
  // create the new text node
  const newText = document.createTextNode("As an HTML and CSS web developer, I have a deep understanding of web development principles and experience in designing and building modern, responsive web interfaces. I am proficient in writing clean, well-organized HTML and CSS code that is optimized for performance and accessibility. I have experience with popular front-end frameworks such as Bootstrap and Materialize, as well as CSS preprocessors like Sass and Less. I am passionate about creating visually appealing and user-friendly web designs and am always looking for new ways to improve my skills and stay up-to-date with the latest trends and technologies in web development.");
  
  // replace the content of the test div with the new text
  testDiv.innerHTML = "";
  testDiv.appendChild(newText);
});

// get the image element
var image = document.getElementById("me");

// add an event listener for the scroll event
window.addEventListener("scroll", function() {
  // get the distance that the user has scrolled from the left
  var scrollLeft = window.pageXOffset;

  // set the image's left style property to the negative scroll distance, to move the image in from the left
  image.style.left = -scrollLeft + "px";
});
s

