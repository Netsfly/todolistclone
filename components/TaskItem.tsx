<<<<<<< HEAD
"use client";

import { Check, Trash2 } from "lucide-react";
import { Button } from "@/components/ui/button";

interface TaskItemProps {
  task: {
    id: number;
    text: string;
    completed: boolean;
  };
  toggleTask: (id: number) => void;
  deleteTask: (id: number) => void;
=======
import { useState } from "react";
import { Trash2, Check, Edit } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface Task {
  id: number;
  text: string;
  completed: boolean;
  isEditing: boolean;
}

interface TaskItemProps {
  task: Task;
  onToggleTask: (id: number) => void;
  onDeleteTask: (id: number) => void;
  onEditTask: (id: number, newText: string) => void;
  onStartEditing: (id: number) => void;
  onCancelEditing: (id: number) => void;
>>>>>>> 5ff5fdb (signin)
}

export default function TaskItem({
  task,
<<<<<<< HEAD
  toggleTask,
  deleteTask,
}: TaskItemProps) {
=======
  onToggleTask,
  onDeleteTask,
  onEditTask,
  onStartEditing,
  onCancelEditing,
}: TaskItemProps) {
  const [localText, setLocalText] = useState(task.text); // Local state for editing text

  const handleSave = () => {
    if (localText.trim()) {
      onEditTask(task.id, localText);
    }
  };

>>>>>>> 5ff5fdb (signin)
  return (
    <li
      className={`flex items-center justify-between p-2 rounded ${
        task.completed ? "bg-green-100" : "bg-gray-100"
      }`}
    >
<<<<<<< HEAD
      <span
        className={
          task.completed ? "line-through text-gray-500" : "text-gray-800"
        }
      >
        {task.text}
      </span>
      <div>
        <Button
          onClick={() => toggleTask(task.id)}
          className="mr-2"
          variant="outline"
          size="icon"
          aria-label={
            task.completed ? "Mark as incomplete" : "Mark as complete"
          }
        >
          <Check
            className={`w-4 h-4 ${
              task.completed ? "text-green-500" : "text-gray-500"
            }`}
          />
        </Button>
        <Button
          onClick={() => deleteTask(task.id)}
          variant="outline"
          size="icon"
          aria-label="Delete task"
        >
          <Trash2 className="w-4 h-4 text-red-500" />
        </Button>
      </div>
=======
      {task.isEditing ? (
        <div className="flex items-center">
          <Input
            type="text"
            value={localText}
            onChange={(e) => setLocalText(e.target.value)}
            className="mr-2"
          />
          <Button
            onClick={handleSave}
            variant="outline"
            size="icon"
            aria-label="Save changes"
          >
            <Check className="w-4 h-4 text-green-500" />
          </Button>
          <Button
            onClick={() => onCancelEditing(task.id)}
            variant="outline"
            size="icon"
            aria-label="Cancel editing"
          >
            <Trash2 className="w-4 h-4 text-gray-500" />
          </Button>
        </div>
      ) : (
        <>
          <span
            className={
              task.completed ? "line-through text-gray-500" : "text-gray-800"
            }
          >
            {task.text}
          </span>
          <div>
            <Button
              onClick={() => onToggleTask(task.id)}
              className="mr-2"
              variant="outline"
              size="icon"
              aria-label={
                task.completed ? "Mark as incomplete" : "Mark as complete"
              }
            >
              <Check
                className={`w-4 h-4 ${
                  task.completed ? "text-green-500" : "text-gray-500"
                }`}
              />
            </Button>
            <Button
              onClick={() => onStartEditing(task.id)} // Start editing mode
              variant="outline"
              size="icon"
              aria-label="Edit task"
            >
              <Edit className="w-4 h-4 text-blue-500" />
            </Button>
            <Button
              onClick={() => onDeleteTask(task.id)} // Delete task
              variant="outline"
              size="icon"
              aria-label="Delete task"
            >
              <Trash2 className="w-4 h-4 text-red-500" />
            </Button>
          </div>
        </>
      )}
>>>>>>> 5ff5fdb (signin)
    </li>
  );
}
