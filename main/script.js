document.addEventListener("DOMContentLoaded", function () {
    // Predefined users for authentication (replace with actual data in a real application)
    const users = {
        "codefury": "password123",
        "phoe": "phoe2024",
    };

    // Login form validation with authentication
    const loginForm = document.querySelector("form");  // Corrected to select the form element
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const username = document.getElementById("user").value;
            const password = document.getElementById("pass").value;

            if (username === "" || password === "") {
                alert("Please fill in all fields");
            } else if (users[username] && users[username] === password) {
                alert("Login successful!");
                // Redirect to another page or perform any other desired actions
                location.href = "index.html"; // Example of redirection
            } else {
                alert("Invalid username or password");
            }
        });
    }

    // Animation effect for the login button
    const loginButton = document.querySelector(".login-button");
    if (loginButton) {
        const wrapper = document.createElement('div');
        wrapper.classList.add('button-wrapper');
        loginButton.parentNode.insertBefore(wrapper, loginButton);
        wrapper.appendChild(loginButton);

        const createLine = () => {
            const line = document.createElement('div');
            line.classList.add('line');
            wrapper.appendChild(line);
        };

        for (let i = 0; i < 4; i++) {
            createLine();
        }

        wrapper.addEventListener("mousemove", function (event) {
            const lines = wrapper.querySelectorAll('.line');
            lines.forEach((line, index) => {
                const angle = (index / lines.length) * 360;
                const offset = 20 + 5 * Math.sin((event.clientX + event.clientY) * 0.05);
                line.style.transform = `rotate(${angle}deg) translate(${offset}px)`;
            });
        });

        wrapper.addEventListener("mouseleave", function () {
            const lines = wrapper.querySelectorAll('.line');
            lines.forEach(line => {
                line.style.transform = '';
            });
        });
    }

    // Q&A form submission
    const qaForm = document.getElementById("qaForm");
    if (qaForm) {
        const qaList = document.getElementById("qa-list");

        qaForm.addEventListener("submit", function (event) {
            event.preventDefault(); // Prevent form submission

            const question = document.getElementById("question").value;
            if (question === "") {
                alert("Please enter a question");
                return;
            }

            const questionItem = document.createElement("div");
            questionItem.classList.add("qa-question");
            questionItem.textContent = question;
            qaList.appendChild(questionItem);

            // Clear the input field
            document.getElementById("question").value = "";
        });
    }
});
