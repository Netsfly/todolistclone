<<<<<<< HEAD
"use client";

=======
>>>>>>> 5ff5fdb (signin)
import TaskItem from "./TaskItem";

interface Task {
  id: number;
  text: string;
  completed: boolean;
<<<<<<< HEAD
=======
  isEditing: boolean;
>>>>>>> 5ff5fdb (signin)
}

interface TaskListProps {
  tasks: Task[];
<<<<<<< HEAD
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
=======
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (id: number, newText: string) => void;
  onStartEditing: (id: number) => void;
  onCancelEditing: (id: number) => void;
>>>>>>> 5ff5fdb (signin)
}

export default function TaskList({
  tasks,
<<<<<<< HEAD
  toggleTask,
  deleteTask,
=======
  onToggleTask,
  onDeleteTask,
  onEditTask,
  onStartEditing,
  onCancelEditing,
>>>>>>> 5ff5fdb (signin)
}: TaskListProps) {
  return (
    <ul className="space-y-2">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
<<<<<<< HEAD
          toggleTask={toggleTask}
          deleteTask={deleteTask}
=======
          onToggleTask={onToggleTask}
          onDeleteTask={onDeleteTask}
          onEditTask={onEditTask}
          onStartEditing={onStartEditing}
          onCancelEditing={onCancelEditing}
>>>>>>> 5ff5fdb (signin)
        />
      ))}
    </ul>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 5ff5fdb (signin)
