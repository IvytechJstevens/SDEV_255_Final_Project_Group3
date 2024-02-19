window.onload = function() {
    // Function to handle click event for "Add Course" button
    function handleAddCourseButtonClick(event) {
        event.preventDefault(); // Prevent the default button click behavior

        // Trigger form submission manually
        document.getElementById('addCourseForm').submit();
    }

    // Function to handle form submission
    function addCourse(event) {
        event.preventDefault(); // Prevent the default form submission behavior
        
        // Get form values
        const courseName = document.getElementById('courseName');
        const teacher = document.getElementById('teacher');
        // Add more fields as needed
        console.log('courseName element:', courseName);
        console.log('teacher element:', teacher);
        
        // Validate form inputs (optional)
        if (!courseName.trim() || !teacher.trim()) {
            alert('Please enter both course name and teacher.');
            return;
        }
        
        // Generate a unique ID for the new course (replace with your actual logic)
        const courseId = Math.floor(Math.random() * 1000) + 1;
        
        // Create a new course object
        const newCourse = {
            id: courseId,
            name: courseName,
            teacher: teacher
            // Add more fields as needed
        };

        // Get the existing courses from local storage or initialize an empty array if there are none
        const courses = JSON.parse(localStorage.getItem('courses')) || [];
        
        // Add the new course to the array of courses
        courses.push(newCourse);

        // Save the courses array to local storage
        localStorage.setItem('courses', JSON.stringify(courses));
        
        console.log('Courses after adding new course:', courses);

        // Optionally, you can save the courses array to local storage or a backend server
        
        // Redirect back to the course index page
        window.location.href = 'index.html';
    }

    // Add event listener to the "Add Course" button
    document.getElementById('addCourseButton').addEventListener('click', handleAddCourseButtonClick);

    // Add event listener to the form submission
    document.getElementById('addCourseForm').addEventListener('submit', addCourse);
}