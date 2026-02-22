import { CheckCircle, Circle } from 'lucide-react';

function TaskItem({ task }) {
  return (
    <div className={`flex items-center justify-between p-4 rounded-lg border-2 ${
      task.completed
        ? 'bg-green-50 border-green-300'
        : 'bg-white border-gray-200'
    }`}>
      <div className="flex items-center space-x-3">
        {task.completed ? (
          <CheckCircle className="w-6 h-6 text-green-600" />
        ) : (
          <Circle className="w-6 h-6 text-blue-500" />
        )}
        <div>
          <p className={`font-semibold ${task.completed ? 'text-gray-600 line-through' : 'text-gray-800'}`}>
            {task.title}
          </p>
          {task.dueDate && (
            <p className="text-sm text-gray-500">Due: {task.dueDate}</p>
          )}
        </div>
      </div>

      {task.points && !task.completed && (
        <span className={`${task.pointsColor} text-white px-3 py-1 rounded-full text-sm font-semibold`}>
          {task.points}
        </span>
      )}
    </div>
  );
}

export default TaskItem;
