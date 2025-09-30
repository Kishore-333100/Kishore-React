export default function TodoList() {
  const tasks = ["Buy milk", "Study React", "Exercise"]; // try [] to test "no tasks"

  return (
    <div>
      <h2>My Tasks</h2>
    

      {/* Conditional rendering */}
      {tasks.length === 0 ? (
        <p>No tasks for today 🎉</p>
      ) : (
        <ul>
          {/* List rendering with map and key */}
          {tasks.map((task, index) => (
            <li key={index}>{task}</li>
          ))}
        </ul>
      )}
    </div>
  );
}
