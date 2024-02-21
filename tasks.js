document.addEventListener("DOMContentLoaded", function() {
    // Query for the submit button and input task field once
    var submit = document.getElementById("submit");
    var newTask = document.getElementById("task");

    // Disable the submit button by default
    submit.disabled = true;

    // Listen for input to be typed into the input field
    newTask.addEventListener('input', function() {
        // Enable/disable the submit button based on whether the input field is empty or not
        submit.disabled = newTask.value.trim() === "";
    });

    // Listen for submission of form
    submit.addEventListener('click', function() {
        // Find the task the user just submitted
        var task = newTask.value.trim();
        
        // Create a list item for the new task and add the task to it
        var listItem = document.createElement("li");
        listItem.textContent = task;
        
        // Add new element to our unordered list
        var list = document.getElementById("tasks");
        list.appendChild(listItem);
        
        // Clear input field
        newTask.value = "";

        // Prevent the default submission of the form
        return false;
    });
});
