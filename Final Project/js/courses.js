// Sample array of courses (replace this with your actual data)
let courses = [
    { id: 1, name: "Introduction to JavaScript", teacher: "John Doe" },
    { id: 2, name: "Web Development", teacher: "Jane Smith" },
    { id: 3, name: "Accounting", teacher: "Sarah Kimberly" },
    { id: 4, name: "Software Development", teacher: "Jack Russel" },
    { id: 5, name: "Visual Communications", teacher: "Jacob William" },
    { id: 6, name: "Informatics", teacher: "Cheryl Lee" },
    { id: 7, name: "Criminal Justice", teacher: "Tony Phillip" },
    // Add more courses as needed
];

// Function to generate the course list and append it to the page
function generateCourseList() {
    const courseListElement = document.getElementById('courseList');
    courseListElement.innerHTML = ''; // Clear previous content

    courses.forEach(course => {
        const li = document.createElement('li');
        li.textContent = `${course.name} - ${course.teacher}`;
        const viewBtn = document.createElement('button');
        viewBtn.textContent = "View";
        viewBtn.onclick = () => viewCourse(course.id);
        li.appendChild(viewBtn);
        courseListElement.appendChild(li);
    });
}

// Function to view a specific course
function viewCourse(courseId) {
    // Redirect to view_course.html with courseId as query parameter
    window.location.href = `Javascript.html?id=${1}`;
    window.location.href = `Web Development.html?id=${2}`;
    window.location.href = `Accounting.html?id=${3}`;
    window.location.href = `Software Development.html?id=${4}`;
    window.location.href = `Visual Communications.html?id=${5}`;
    window.location.href = `Informatics.html?id=${6}`;
    window.location.href = `Criminal Justice.html?id=${7}`;
}

// Call the function when the page loads
window.onload = generateCourseList;
