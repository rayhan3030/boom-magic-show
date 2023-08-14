
// // Hide and Show 

$(document).ready(function(){
    $("#hide").click(function(){
        $(".cool").hide()
    });
    $("#show").click(function(){
        $(".cool").show()
    })
});

// // Double Click

$(document).ready(function(){
    $("#fiti").dblclick(function(){
        $(this).hide();
    })
});



// // Alert on mouse enter

$(document).ready(function(){
    $("#fitboom").mouseenter(function(){
        alert("ঈয়া ঢিশুম। বাড়ি ফিরে যাও।  ওকে? ")
    })
});

// // Alert on Mouse LEave

$(document).ready(function(){
    $("#fitcool").mouseleave(function(){
        alert("ছুঁয়ে বসে থাকেন নতুবা , বাড়ি চলে যান।   ওকে ? ")
    })
})


// on mouse hide on mouse leave

$(document).ready(function(){
    $("#fithide").mouseleave(function(){
        $(this).hide();
    })
})

// hide and show element set timing

$(document).ready(function(){
    $("#hidee").click(function(){
        $("#fiths").hide(4000);
    })
    $("#showw").click(function(){
        $("#fiths").show(3000);
    })
})


// ==================
// Javascript experiment

const tabButtons = document.querySelectorAll('.tab-button');
const tabContents = document.querySelectorAll('.tab-content');

tabButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove 'active' class from all buttons and contents
    tabButtons.forEach(btn => btn.classList.remove('active'));
    tabContents.forEach(content => content.style.display = 'none');
    
    // Add 'active' class to clicked button and show related content
    const tabId = button.getAttribute('data-tab');
    const tabContent = document.getElementById(tabId);
    
    button.classList.add('active');
    tabContent.style.display = 'block';
  });
});


// ==================

// Typewritter effect js 
const introText = "BOOM ম্যাজিক শো তে আপনাকে স্বাগতম";
const introElement = document.getElementById("intro");
const interval = 180; // Adjust the interval to control typing speed

function typeWriterEffect(text, element) {
  let charIndex = 0;

  function type() {
    if (charIndex < text.length) {
      element.innerHTML += text.charAt(charIndex);
      charIndex++;
      setTimeout(type, interval);
    } else {
      element.innerHTML += `<span class="typewriter-cursor"></span>`;
      setTimeout(reset, interval * 2); // Wait for cursor to blink, then reset
    }
  }

  function reset() {
    element.innerHTML = "";
    charIndex = 0;
    type();
  }

  type();
}

typeWriterEffect(introText, introElement);


// Typewritter effect js 



