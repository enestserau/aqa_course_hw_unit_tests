async function createTodo(todoBody) {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/todos', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(todoBody),
    });

    if (response.status !== 201) {
      throw new Error(`Fetch failed with status: ${response.status}`);
    }

    const todoObject = await response.json();

    if (todoObject.id !== 201) {
      throw new Error(`Unexpected id : ${todoObject.id}, expected 201`);
    }

    return todoObject;
  } catch (error) {
    console.error('Error while creating to do item:', error.message);
    throw error;
  } finally {
    console.log('To do function is finished');
  }
}

const newTodo = {
  userId: 14554343,
  title: 'Make chip tunnig for BMW engine',
  completed: false,
};

// Usage example
(async () => {
  try {
    const result = await createTodo(newTodo);
    console.log('New toDo has been created:', result);
  } catch (error) {
    console.error('Error while creating todo:', error.message);
  }
})();
