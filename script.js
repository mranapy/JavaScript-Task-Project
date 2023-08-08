let form = document.querySelector("#task_form");
let taskList = document.querySelector("#tasks");
let clearBtn = document.querySelector("#clear_task");
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector("#new_task");


// Define Event listeners
form.addEventListener('submit',addTask);
taskList.addEventListener('click', removeTask);
clearBtn.addEventListener('click', clearTask);
filter.addEventListener('keyup', filterTask);
document.addEventListener('DOMContentLoaded',getTask);
//  Add task funtion
function addTask(e){
	if(taskInput.value === ''){
		alert('Write note here..');
	}
	else{
		// console.log(taskInput.value);
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(taskInput.value + " "));
		let link = document.createElement('a');
		link.setAttribute('href','#');
		link.innerHTML = 'X';
		li.appendChild(link);
		taskList.appendChild(li);

		storeTaskLocalStorage(taskInput.value);
		taskInput.value = '';

	}
	e.preventDefault();
}

// Remove single item remove function
function removeTask(e) {
	if(e.target.hasAttribute("href")){
		if(confirm(`Are you sure?`)){
			let ele = e.target.parentElement;
			ele.remove();

			removeFormLS(ele);
			// console.log(ele);
		}
		// console.log(e.target);
	}
	
}

// Clear All Task Function
function clearTask(e) {
	// if(confirm('Are you sure delete all task?')){
	// 	taskList.innerHTML = "";
	// }
	// Faster way to remove
	if(confirm('Are you sure delete all task?')){
		while(taskList.firstChild){
			taskList.removeChild(taskList.firstChild);
		}
	}
}

// Filter Task
function filterTask(e) {
	let text = e.target.value.toLowerCase();

	document.querySelectorAll('li').forEach(task => {
		let item = task.firstChild.textContent;
		if(item.toLowerCase().indexOf(text)!= -1){
			task.style.display = 'block';
		}else{
			task.style.display = 'none';
		}
	});
	// console.log(text);
}


// Local Storage
function storeTaskLocalStorage(task) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.push(task);
	localStorage.setItem('tasks',JSON.stringify(tasks));

}

//  Show From Local Storage
function getTask(argument) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	tasks.forEach(task => {
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(task + " "));
		let link = document.createElement('a');
		link.setAttribute('href','#');
		link.innerHTML = 'X';
		li.appendChild(link);
		taskList.appendChild(li);
	});
}

// Remove From Local storage
function removeFormLS(taskItem) {
	let tasks;
	if (localStorage.getItem('tasks') === null) {
		tasks = [];
	}else{
		tasks = JSON.parse(localStorage.getItem('tasks'));
	}
	let li = taskItem;
	li.removeChild(li.lastChild);

	tasks.forEach((task, index) =>{
		if (li.textContent.trim() === task) {
			tasks.splice(index, 1);
		}
	});
	localStorage.setItem('tasks',JSON.stringify(tasks));
}