window.generateCourseList = function() {
  const courses = JSON.parse(localStorage.getItem("courses")) || [];
  const courseListElement = document.getElementById("courseList");

  if (!courseListElement) {
    console.error("courseListElement does not exist on this page.");
    return;
  }

  courseListElement.innerHTML = ""; // Clear previous content before appending new list items.

  courses.forEach((course) => {
    const li = document.createElement("li");
    li.textContent = `${course.name} - ${course.teacher} | `; // Add a space after the text

    const viewBtn = document.createElement("button");
    viewBtn.textContent = "View";
    viewBtn.onclick = () => viewCourse(course.id);
    viewBtn.style.marginRight = "10px"; // Add some margin to the right of the button
    viewBtn.style.borderRadius = "5px"; // Make the button a little rounded
    li.appendChild(viewBtn);

    const editBtn = document.createElement("button");
    editBtn.textContent = "Edit";
    editBtn.onclick = () => editCourse(course.id);
    editBtn.style.marginRight = "10px"; // Add some margin to the right of the button
    editBtn.style.borderRadius = "5px"; // Make the button a little rounded
    li.appendChild(editBtn);

    const deleteBtn = document.createElement("button");
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteCourse(course.id);
    deleteBtn.style.marginRight = "10px"; // Add some margin to the right of the button
    deleteBtn.style.borderRadius = "5px"; // Make the button a little rounded
    li.appendChild(deleteBtn);

    courseListElement.appendChild(li);
  });
};

function deleteCourse(courseId) {
  // Get the courses from local storage
  const courses = JSON.parse(localStorage.getItem('courses')) || [];
  // Filter out the course with the matching ID
  const updatedCourses = courses.filter(course => course.id !== courseId);
  // Save the updated courses array to local storage
  localStorage.setItem('courses', JSON.stringify(updatedCourses));
  // Refresh the course list
  window.generateCourseList();
}

function editCourse(courseId) {
  window.location.href = `edit_course.html?id=${courseId}`;
}
  
  function viewCourse(courseId) {
    window.location.href = `view_course.html?id=${courseId}`;
  }
  
  // Ensuring generateCourseList is called when window is loaded or when navigating back to the page
  if(document.readyState === 'loading') {
      document.addEventListener('DOMContentLoaded', window.generateCourseList);
  } else {
      window.generateCourseList(); // If document is already ready, we call the function directly
  }
  