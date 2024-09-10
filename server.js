    const input = document.getElementById('input-box');
    const list = document.getElementById('taskList');
    let chk=true;
    function addTask() {
        if (input.value.trim() === '') alert("Please Enter a Task before adding!");
        else {
            const task = input.value;
            const li = document.createElement('li');
            li.textContent = task;
            const buttonsContainer=document.createElement('div');
            buttonsContainer.classList.add('buttons');

            const button1 = document.createElement('button');
            button1.innerHTML = "&#128221;";
            const button2 = document.createElement('button');
            button2.innerHTML = '\u00d7';
            
            buttonsContainer.appendChild(button1);
            buttonsContainer.appendChild(button2);
            li.appendChild(buttonsContainer);
            list.appendChild(li);
        }
        input.value = "";
        saveTask();
    }

    list.addEventListener('click', (e) => {
        if (e.target.tagName === "LI") {
            e.target.classList.toggle("checked");
            chk=chk===true?false:true;
            saveTask();
        }
        else if (e.target.textContent === "📝" && chk=== true && window.confirm("Are you sure you want to edit this Do?")) {
            const taskText = e.target.parentElement.childNodes[0].textContent; 
            input.value = taskText;
            e.target.parentElement.remove(); 
            saveTask();
            alert('Please Edit it from the input field!');
        }
        else if(e.target.textContent === "📝" && chk=== false) alert("You can't edit a task which is completed");
        else if (e.target.textContent === "\u00d7" && window.confirm("Are you sure you want to delete this Do?")) {
            e.target.parentElement.remove();
            saveTask(); 
            alert("Do successfully Deleted");
        }
    })

    //Local Storage :-
    document.addEventListener("DOMContentLoaded", () => showTasks());
    function saveTask() {
        localStorage.setItem("data", list.innerHTML);
    }

    function showTasks() {
        list.innerHTML = localStorage.getItem("data");
    }
