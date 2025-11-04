interface Task {
  id: string
  title: string
  completed: boolean
  description?: string
  priority?: 'low' | 'medium' | 'high'
}

interface TaskListProps {
  tasks: Task[]
  onToggleTask?: (taskId: string) => void
}

export default function TaskList({ tasks, onToggleTask }: TaskListProps) {
  const getPriorityColor = (priority?: string) => {
    switch (priority) {
      case 'high': return '#ff5252'
      case 'medium': return '#ffa726'
      case 'low': return '#66bb6a'
      default: return '#90a4ae'
    }
  }

  const getPriorityLabel = (priority?: string) => {
    switch (priority) {
      case 'high': return '🔴 สูง'
      case 'medium': return '🟡 ปานกลาง'
      case 'low': return '🟢 ต่ำ'
      default: return ''
    }
  }

  return (
    <div>
      <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
        {tasks.map(task => (
          <li 
            key={task.id}
            style={{
              padding: '1.25rem',
              marginBottom: '0.75rem',
              backgroundColor: task.completed 
                ? 'rgba(76, 175, 80, 0.15)' 
                : 'rgba(255,255,255,0.1)',
              border: '1px solid rgba(255,255,255,0.2)',
              borderRadius: '12px',
              cursor: 'pointer',
              transition: 'all 0.2s ease',
              borderLeft: `4px solid ${getPriorityColor(task.priority)}`
            }}
            onClick={() => onToggleTask?.(task.id)}
            onMouseEnter={(e) => {
              e.currentTarget.style.backgroundColor = task.completed 
                ? 'rgba(76, 175, 80, 0.25)' 
                : 'rgba(255,255,255,0.15)'
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.backgroundColor = task.completed 
                ? 'rgba(76, 175, 80, 0.15)' 
                : 'rgba(255,255,255,0.1)'
            }}
          >
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: '1rem' }}>
              <input 
                type="checkbox" 
                checked={task.completed}
                onChange={() => {}}
                style={{ 
                  width: '22px', 
                  height: '22px',
                  marginTop: '2px',
                  cursor: 'pointer',
                  accentColor: '#4CAF50'
                }}
              />
              <div style={{ flex: 1 }}>
                <div style={{ 
                  display: 'flex',
                  alignItems: 'center',
                  gap: '0.75rem',
                  marginBottom: task.description ? '0.5rem' : 0
                }}>
                  <span style={{
                    fontWeight: '600',
                    fontSize: '1.05rem',
                    textDecoration: task.completed ? 'line-through' : 'none',
                    color: task.completed ? 'rgba(255,255,255,0.6)' : 'white'
                  }}>
                    {task.title}
                  </span>
                  {task.priority && (
                    <span style={{ 
                      fontSize: '0.8rem',
                      padding: '0.25rem 0.6rem',
                      borderRadius: '12px',
                      backgroundColor: 'rgba(255,255,255,0.15)',
                      color: 'white',
                      fontWeight: '500'
                    }}>
                      {getPriorityLabel(task.priority)}
                    </span>
                  )}
                </div>
                {task.description && (
                  <div style={{ 
                    fontSize: '0.9rem', 
                    color: 'rgba(255,255,255,0.7)',
                    lineHeight: '1.5'
                  }}>
                    {task.description}
                  </div>
                )}
              </div>
              {task.completed && (
                <span style={{ 
                  fontSize: '1.5rem',
                  lineHeight: 1
                }}>
                  ✓
                </span>
              )}
            </div>
          </li>
        ))}
      </ul>
      {tasks.length === 0 && (
        <div style={{ 
          textAlign: 'center', 
          color: 'rgba(255,255,255,0.7)',
          padding: '3rem',
          backgroundColor: 'rgba(255,255,255,0.05)',
          borderRadius: '15px',
          border: '2px dashed rgba(255,255,255,0.2)'
        }}>
          <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>📝</div>
          <p style={{ fontSize: '1.1rem' }}>ยังไม่มี tasks ในรายการ</p>
          <p style={{ fontSize: '0.95rem', opacity: 0.8 }}>กดปุ่ม "เพิ่ม Task" เพื่อเริ่มต้น!</p>
        </div>
      )}
    </div>
  )
}
