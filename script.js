let form = document.querySelector("#task_form");
let taskList = document.querySelector("ul");
let clearBtn = document.querySelector("#clear_task");
let filter = document.querySelector('#task_filter');
let taskInput = document.querySelector("#new_task");

// Define Event listeners
form.addEventListener('submit',addTask);
// function addTask(e){
// 	if(taskInput.value === ''){
// 		alert('Write something...');

// 	}
// 	else{
// 		let li = document.createElement('li');
// 		li.appendChild(document.createTextNode(taskInput.value + " "));
// 		taskList.appendChild(li);
// 		taskInput.value = '';
// 	}
// }

function addTask(e){
	if(taskInput.value != ''){
		console.log(taskInput.value);
		let li = document.createElement('li');
		li.appendChild(document.createTextNode(taskInput.value + " "));
		taskList.appendChild(li);
		taskInput.value = '';
	}
	else{
		alert('Write something...');
	}
}
console.log(11111);









// form.addEventListener('keyup',keyUp);

// function keyUp(e){
// 	document.getElementById('demo').innerText = this.value;
// }
