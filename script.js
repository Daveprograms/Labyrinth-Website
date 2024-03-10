document.addEventListener("DOMContentLoaded", function () {
          displayWelcomeMessage();
        });
        
        function toggleAnswer(answerId) {
          var answer = document.getElementById(answerId);
          if (answer.style.display === "block") {
            answer.style.display = "none";
          } else {
            answer.style.display = "block";
          }
        }
        
        function displayWelcomeMessage() {
          const userName = localStorage.getItem("userName");
          if (userName) {
            const welcomeDiv = document.createElement("div");
            welcomeDiv.innerHTML = `<h1>Welcome to JAVA LABYRINTH EXPLORE, ${userName}</h1>`;
            document.body.insertBefore(welcomeDiv, document.body.firstChild);
          }
        }
        
        function login() {
          const email = document.getElementById("loginEmail").value;
          const password = document.getElementById("loginPassword").value;
        
          displayWelcomeMessage();
        }
        
        function signup() {
          const name = document.getElementById("signupName").value;
          const email = document.getElementById("signupEmail").value;
          const password = document.getElementById("signupPassword").value;
        
          localStorage.setItem("userName", name);
          displayWelcomeMessage();
        }
        
        function showSignup() {
          document.getElementById("loginForm").style.display = "none";
          document.getElementById("signupForm").style.display = "block";
        }
        
        function showLogin() {
          document.getElementById("signupForm").style.display = "none";
          document.getElementById("loginForm").style.display = "block";
        }
        
        document
          .getElementById("contactForm")
          .addEventListener("submit", function (event) {
            event.preventDefault();
            const email = document.getElementById("email").value;
            const phone = document.getElementById("phone").value;
            const reason = document.getElementById("reason").value;
            console.log("Contact Form Submission:", { email, phone, reason });
          });
        
        function searchQuestions() {
          var input,
            filter,
            questions,
            i,
            txtValue,
            foundMatch = false;
          input = document.getElementById("searchInput");
          filter = input.value.toUpperCase();
          questions = document.getElementsByClassName("question");
          var questionInFileMessage = document.getElementById("questionInFileMessage");
          var questionNotInFileMessage = document.getElementById(
            "questionNotInFileMessage"
          );
          var searchResultMessage = document.getElementById("searchResultMessage");
        
          document.getElementById("knowAnswerForm").style.display = "none";
          document.getElementById("researchMessage").style.display = "none";
        
          for (i = 0; i < questions.length; i++) {
            txtValue = questions[i].textContent || questions[i].innerText;
            if (txtValue.toUpperCase().includes(filter)) {
              questions[i].classList.add("highlighted-question");
              foundMatch = true;
            } else {
              questions[i].classList.remove("highlighted-question");
            }
          }
        
          searchResultMessage.style.display = filter ? "block" : "none";
        
          if (filter) {
            questionInFileMessage.style.display = foundMatch ? "block" : "none";
            questionNotInFileMessage.style.display = foundMatch ? "none" : "block";
          } else {
            searchResultMessage.style.display = "none";
          }
        }
        function knowsAnswer() {
          document.getElementById("knowAnswerForm").style.display = "block";
          document.getElementById("questionNotInFileMessage").style.display = "none";
        }
        
        function hostResearch() {
          document.getElementById("researchMessage").style.display = "block";
          document.getElementById("questionNotInFileMessage").style.display = "none";
        }
        function submitQA() {
          var userQuestion = document.getElementById("userQuestion").value;
          var userAnswer = document.getElementById("userAnswer").value;
        
          if (!userQuestion.trim() || !userAnswer.trim()) {
            alert("Please enter both a question and an answer.");
            return;
          }
        
          console.log("New Q&A submitted:", { userQuestion, userAnswer });
          alert(
            "Thank you for submitting your question and answer. We will review it shortly."
          );
        
          document.getElementById("userQuestion").value = "";
          document.getElementById("userAnswer").value = "";
        
          document.getElementById("knowAnswerForm").style.display = "none";
        }
        // This function will toggle between the sign-in and sign-up forms and messages
        // and add a little animation to the button.
        function toggleForm() {
          var signInForm = document.getElementById("signInForm");
          var signUpForm = document.getElementById("signUpForm");
          var signInMessage = document.getElementById("signInMessage");
          var signUpMessage = document.getElementById("signUpMessage");
          var buttons = document.querySelectorAll(".message-box button");
        
          buttons.forEach(function (button) {
            button.classList.add("btn-animate"); // Add the animation class to both buttons
            setTimeout(function () {
              button.classList.remove("btn-animate"); // Remove the class after the animation completes
            }, 400); // This should match the duration of the animation
          });
        
          // Toggle forms and messages
          if (signInForm.style.display === "none") {
            signInForm.style.display = "block";
            signUpForm.style.display = "none";
            signInMessage.style.display = "none";
            signUpMessage.style.display = "block";
          } else {
            signInForm.style.display = "none";
            signUpForm.style.display = "block";
            signInMessage.style.display = "block";
            signUpMessage.style.display = "none";
          }
        }
        
        // Function to display the popup
        function showPopup() {
            var modal = document.getElementById('popup');
            modal.style.display = "block";
        }
        
        // Function to close the popup
        function closePopup() {
            var modal = document.getElementById('popup');
            modal.style.display = "none";
        }
        
        // Optional: Close the modal if the user clicks anywhere outside of it
        window.onclick = function(event) {
            var modal = document.getElementById('popup');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        
        // Function to display the update popup with today's date and update info
        function showUpdatePopup() {
            var modal = document.getElementById('updatePopup');
            var updateContent = document.getElementById('todayUpdateContent');
            var today = new Date();
            var date = today.getFullYear()+'-'+(today.getMonth()+1)+'-'+today.getDate();
            
            // Customize this message to reflect what was added today
            var todayUpdates = "Today's updates include new more into the DSA with java touching the basics of java and data structures. Also, we have added a new feature to the website that allows users to submit their own questions and answers. We hope you enjoy the new content!";
        
            // Set the content of the popup with the update information and today's date
            updateContent.innerHTML = todayUpdates + " (Date: " + date + ")";
        
            modal.style.display = "block";
        }
        
        // Function to close the update popup
        function closeUpdatePopup() {
            var modal = document.getElementById('updatePopup');
            modal.style.display = "none";
        }
        
        // Optional: Close the modal if the user clicks anywhere outside of it
        window.onclick = function(event) {
            var modal = document.getElementById('updatePopup');
            if (event.target == modal) {
                modal.style.display = "none";
            }
        }
        

