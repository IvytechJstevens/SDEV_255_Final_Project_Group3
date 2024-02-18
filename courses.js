// Sample array of courses (replace this with your actual data)
let courses = [
    { id: 1, name: "Introduction to JavaScript", teacher: "John Doe" },
    { id: 2, name: "HTML and CSS Basics", teacher: "Jane Smith" },
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
    window.location.href = `view_course.html?id=${courseId}`;
}

// Call the function when the page loads
window.onload = generateCourseList;
