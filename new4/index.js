



function changeOnClick(buttonId, newInnerHTML) {
    var button = document.getElementById(buttonId);
    if (button) {
      button.addEventListener("click", function() {
        var element = document.getElementById('second');
        if (element) {
          element.innerHTML = newInnerHTML;
        } else {
          console.log("Element not found.");
        }
      });
    } else {
      console.log("Button not found.");
    }
  }
  
  // Call the function with the button ID and the new text

  



  
  
  
  changeOnClick("title3", "Python is a versatile and powerful programming language, and as a proficient Python developer, I am well-versed in its object-oriented programming methods and can easily manipulate strings, lists, and other data types using built-in functions and modules. My skill set extends to creating custom functions and classes that enable complex tasks and add functionality to programs, as well as working with popular Python libraries and frameworks such as NumPy, Pandas, and Django. I also possess extensive experience in using Python for data analysis, machine learning, and web development. standard libraries for file input/output, regular expressions, and networking, and I can write efficient and scalable Python code using concepts such as generators, list comprehensions, and decorators. Whether working in a command-line or graphical user interface (GUI) environment, I am comfortable with Python and always looking to expand my knowledge and stay up-to-date with the latest advancements and best practices in Python development. As a result, I am confident in my ability to provide top-quality solutions and deliverables for any project.");
  changeOnClick("title2", "As a skilled React developer, I have extensive experience in creating and managing both stateful and stateless React components. I am proficient in using React hooks to manage component state and perform side effects, and familiar with React Router for client-side routing in single-page applications.In addition, I have experience using Redux for state management in complex React applications and am comfortable using React with other libraries and frameworks such as GraphQL and Material-UI. I am knowledgeable in writing efficient and reusable React code using best practices and design patterns, and proficient in using React Developer Tools for debugging and performance optimization.Furthermore, I have experience testing React components using Jest and Enzyme, and am continuously learning and staying up-to-date with the latest advancements and best practices in React development. I am confident in my ability to contribute to the success of any React-based project.");
  changeOnClick("title", "JavaScript is a powerful and versatile programming language that is widely used for web development, server-side programming, and mobile app development. As a seasoned developer, I have honed my skills in using popular JavaScript libraries and frameworks such as jQuery, React, and Angular to streamline development and improve performance. I'm also proficient in advanced techniques such as object destructuring and arrow functions, which can help make code more concise and readable. Furthermore, I'm knowledgeable in synchronous and asynchronous error handling, which is essential for identifying and resolving issues in complex programs. But I don't stop there. I'm continuously learning and staying up-to-date with the latest advancements and best practices in JavaScript development, so I can always deliver high-quality and innovative solutions for any project. Whether it's creating dynamic user interfaces, building scalable backend services, or developing cross-platform mobile apps, I'm always ready to tackle new challenges and push the boundaries of what's possible with JavaScript.");


  var slideIndex = 1;
showSlide(slideIndex);

function prevSlide() {
  showSlide(slideIndex -= 1);
}

function nextSlide() {
  showSlide(slideIndex += 1);
}

function showSlide(n) {
  var slides = document.getElementsByClassName("slide");
  
  if (n > slides.length) {
    slideIndex = 1;
  }
  if (n < 1) {
    slideIndex = slides.length;
  }
  for (var i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slides[slideIndex - 1].style.display = "block";
}







