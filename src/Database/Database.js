let tasks = [
  {
    id: 1,
    title: 'TItulo de la tarea',
    description: 'Descripcion de la tarea',
    isCompleted: false,
    created_at: new Date().toLocaleDateString('es-AR'),
    userId: 1
  }
]

let users = [
  {
    id: 1,
    username: "Manaos",
    password: "manaos123",
  },
];


export const getTasks = () => {
  return tasks;
}

export const addTasks = (task) => {
  tasks.push(task);
}

export const editTaskById = (taskId, userId) => {
  const task = findTaskByIdAndUserId(taskId, userId);
  if (task) {
    // Do something
    console.log('Task found and edited');
  }
  else {
    console.log('Task not found with ID: ' + taskId)
  }
}

export const markAsCompleted = (taskId, userId) => {
  tasks = tasks.map((task) =>
    (task.id === taskId && task.userId === userId)  ? { ...task, isCompleted: !task.isCompleted } : task
  );
  return getTasks();

}

// Method use above
const findTaskByIdAndUserId = (taskId, userId) => {
  const foundTask = tasks.find(task => task.id === taskId && task.userId === userId);
  return foundTask;
};

// New
const findTaskByIdAndUserIdIndex = (taskId, userId) => {
  return tasks.findIndex(task => task.id === taskId && task.userId === userId);
};

export const deleteTaskById = (taskId, userId) => {
  const updatedTasks = tasks.filter(task => !(task.id === taskId && task.userId === userId));
  tasks.splice(0, tasks.length, ...updatedTasks);
}

export const findUserByUsernameAndPassword = (username, password) => {
  const searchedUser = users.find(user => user.username === username && user.password === password);
  return searchedUser || null;
}