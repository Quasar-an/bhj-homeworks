document.addEventListener("DOMContentLoaded", () => {
    const taskInput = document.getElementById("task__input");
    const tasksList = document.getElementById("tasks__list");
    const taskForm = document.getElementById("tasks__form");

    function createTaskElement(taskText) {
        const task = document.createElement("div");
        task.className = "task";
    
        const taskTitle = document.createElement("div");
        taskTitle.className = "task__title";
        taskTitle.textContent = taskText;
    
        const taskRemove = document.createElement("a");
        taskRemove.href = "#";
        taskRemove.className = "task__remove";
        taskRemove.innerHTML = "&times;";

        taskRemove.addEventListener("click", (event) => {
            event.preventDefault();
            task.remove();
          });
      
          task.appendChild(taskTitle);
          task.appendChild(taskRemove);
      
          return task;
        }

        taskForm.addEventListener("submit", (event) => {
            event.preventDefault();
        
            const taskText = taskInput.value.trim();
            if (taskText) {
              const taskElement = createTaskElement(taskText);
              tasksList.appendChild(taskElement);
              taskInput.value = "";
            }
        });
      });