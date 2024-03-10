window.onload = function() {
    const urlParams = new URLSearchParams(window.location.search);
    const courseId = Number(urlParams.get('id'));
    console.log('Retrieved course ID:', courseId);

    const courses = JSON.parse(localStorage.getItem('courses')) || [];
    console.log('Retrieved courses:', courses);


    const course = courses.find(course => course.id === courseId);
    console.log('Found course:', course);

    if (!course) {
        alert('Course not found');
        return;
    }

    document.getElementById('courseName').value = course.name;
    document.getElementById('teacher').value = course.teacher;

    document.getElementById('editCourseForm').addEventListener('submit', (e) => {
        e.preventDefault();

        const courseName = document.getElementById('courseName').value;
        const teacher = document.getElementById('teacher').value;

        course.name = courseName;
        course.teacher = teacher;

        localStorage.setItem('courses', JSON.stringify(courses));

        window.location.href = 'index.html';
    });
};