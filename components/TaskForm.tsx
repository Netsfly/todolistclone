<<<<<<< HEAD
"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Plus } from "lucide-react";

interface TaskFormProps {
  addTask: (text: string) => void;
}

export default function TaskForm({ addTask }: TaskFormProps) {
=======
import { useState } from "react";
import { Plus } from "lucide-react";
import { Input } from "./ui/input";
import { Button } from "./ui/button";

interface TaskFormProps {
  onAddTask: (text: string) => void;
}

export default function TaskForm({ onAddTask }: TaskFormProps) {
>>>>>>> 5ff5fdb (signin)
  const [newTask, setNewTask] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (newTask.trim()) {
<<<<<<< HEAD
      addTask(newTask.trim());
=======
      onAddTask(newTask.trim());
>>>>>>> 5ff5fdb (signin)
      setNewTask("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex mb-4">
      <Input
        type="text"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
        className="flex-grow mr-2"
      />
      <Button type="submit" className="flex items-center">
        <Plus className="w-4 h-4 mr-2" />
        Add
      </Button>
    </form>
  );
}
