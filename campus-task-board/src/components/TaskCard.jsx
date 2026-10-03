
function TaskCard({ title, category, index }) {
  return (
    <div className={`task-card cat-${category.toLowerCase()}`}>
      <span className="task-number">#{index + 1}</span>
      <h3 className="task-title">{title}</h3>
      <span className="task-category">{category}</span>
    </div>
  );
}

export default TaskCard;
