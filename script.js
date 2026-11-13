
// Select HTML elements
const studentForm = document.getElementById("studentForm");
const studentList = document.getElementById("studentList");
const statusMessage = document.getElementById("status");

// Student counter
let studentCounter = 103;

// View existing and new student profiles
studentList.addEventListener("click", function(event) {

    if (event.target.classList.contains("view-btn")) {

        const card = event.target.closest(".student-card");

        // Remove previous selection
        document.querySelectorAll(".student-card").forEach(function(item) {
            item.classList.remove("selected");
        });

        // Select current student
        card.classList.add("selected");

        // Read custom data attributes
        const studentId = card.dataset.id;
        const studentName = card.dataset.name;
        const department = card.dataset.department;

        statusMessage.textContent =
            `Selected: ${studentName}, ID: ${studentId}, Department: ${department}`;
    }
});

// Add new student
studentForm.addEventListener("submit", function(event) {

    event.preventDefault();

    // Get form values
    const name = document.getElementById("studentName").value.trim();
    const id = document.getElementById("studentId").value.trim();
    const department = document.getElementById("department").value;

    if (!name || !id || !department) {
        statusMessage.textContent = "Please complete all fields.";
        return;
    }

    // Create student card
    const card = document.createElement("article");

    card.className = "student-card";
    card.id = `student-${studentCounter}`;

    // Store custom data
    card.dataset.id = studentCounter;
    card.dataset.name = name;
    card.dataset.department = department;

    // Create student heading
    const heading = document.createElement("h3");

    heading.className = "student-name";
    heading.contentEditable = "true";
    heading.textContent = name;

    // Create student information
    const idParagraph = document.createElement("p");
    idParagraph.textContent = `Student ID: ${id}`;

    const departmentParagraph = document.createElement("p");
    departmentParagraph.textContent = `Department: ${department}`;

    // Create view button
    const button = document.createElement("button");

    button.type = "button";
    button.className = "btn view-btn";
    button.textContent = "View Profile";

    // Add elements to card
    card.append(
        heading,
        idParagraph,
        departmentParagraph,
        button
    );

    // Add card to page
    studentList.appendChild(card);

    statusMessage.textContent = `${name} was added successfully!`;

    // Increase counter
    studentCounter++;

    // Reset form
    studentForm.reset();
});
