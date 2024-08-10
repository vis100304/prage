document.addEventListener("DOMContentLoaded", function () {
    // Login form validation
    const loginForm = document.getElementById("loginForm");
    if (loginForm) {
        loginForm.addEventListener("submit", function (event) {
            const username = document.getElementById("user").value;
            const password = document.getElementById("pass").value;

            if (username === "" || password === "") {
                alert("Please fill in all fields");
                event.preventDefault(); // Prevent form submission
            } else {
                alert("Form submitted successfully!");
                // Perform actual form submission here if needed
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
                line.style.transform = "rotate(${angle}deg) translate(${offset}px)";
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