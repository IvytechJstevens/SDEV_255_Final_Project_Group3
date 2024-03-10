window.onload = function() {
    // Function to handle form submission
    function addCourse(event) {
        event.preventDefault();
      
        const courseName = document.getElementById('courseName').value;
        const teacher = document.getElementById('teacher').value;
      
        if (!courseName.trim() || !teacher.trim()) {
          alert('Please enter both course name and teacher.');
          return;
        }
      
        const courseId = Math.floor(Math.random() * 1000) + 1;
        const newCourse = { id: courseId, name: courseName, teacher: teacher };
      
        const courses = JSON.parse(localStorage.getItem('courses')) || [];
        courses.push(newCourse);
        localStorage.setItem('courses', JSON.stringify(courses));
      
        window.location.href = 'index.html';
      }

    // Add event listener to the form submission
    const formElement = document.getElementById('addCourseForm');
    if (formElement) {
        formElement.addEventListener('submit', addCourse);
    } else {
        console.error("Element with ID 'addCourseForm' was not found.");
    }
};