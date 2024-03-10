window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = Number(urlParams.get('id'));

    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    const course = courses.find(course => course.id === courseId);

    if (!course) {
        alert('Course not found');
        return;
    }

    const courseDetailsElement = document.getElementById('courseDetails');

    const courseNameElement = document.createElement('p');
    courseNameElement.textContent = `Course Name: ${course.name}`;
    courseDetailsElement.appendChild(courseNameElement);

    const teacherElement = document.createElement('p');
    teacherElement.textContent = `Teacher: ${course.teacher}`;
    courseDetailsElement.appendChild(teacherElement);

    // Add more fields as needed
};