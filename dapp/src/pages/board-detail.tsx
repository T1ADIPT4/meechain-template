'use client'

import { useState } from 'react'
import Link from 'next/link'
import TaskList from '../components/TaskList'
import ProgressBar from '../components/ProgressBar'
import MeeBot from '../components/MeeBot'

interface Task {
  id: string
  title: string
  description: string
  completed: boolean
  priority: 'low' | 'medium' | 'high'
  dueDate?: string
}

interface BoardDetailProps {
  boardId?: string
}

export default function BoardDetail({ boardId = '1' }: BoardDetailProps) {
  const [board] = useState({
    id: boardId,
    title: 'เรียนรู้ Web3 Development',
    description: 'ศึกษาและพัฒนาทักษะ blockchain และ smart contracts',
    color: '#667eea'
  })

  const [tasks, setTasks] = useState<Task[]>([
    {
      id: '1',
      title: 'อ่านเอกสาร Ethereum Basics',
      description: 'ศึกษาพื้นฐาน Ethereum และ Smart Contracts',
      completed: true,
      priority: 'high'
    },
    {
      id: '2',
      title: 'ติดตั้ง MetaMask',
      description: 'ติดตั้งและตั้งค่า MetaMask wallet',
      completed: true,
      priority: 'high'
    },
    {
      id: '3',
      title: 'เรียนรู้ Solidity Basics',
      description: 'ศึกษาภาษา Solidity และไวยากรณ์พื้นฐาน',
      completed: true,
      priority: 'high'
    },
    {
      id: '4',
      title: 'ทดลองเขียน Smart Contract',
      description: 'สร้าง Simple Storage contract',
      completed: true,
      priority: 'medium'
    },
    {
      id: '5',
      title: 'Deploy Contract ไปที่ Testnet',
      description: 'Deploy contract ไปที่ Sepolia testnet',
      completed: true,
      priority: 'medium'
    },
    {
      id: '6',
      title: 'เรียนรู้ Web3.js / Ethers.js',
      description: 'ศึกษา library สำหรับเชื่อมต่อ DApp',
      completed: true,
      priority: 'medium'
    },
    {
      id: '7',
      title: 'สร้าง DApp Frontend',
      description: 'สร้าง React frontend สำหรับเชื่อมต่อ contract',
      completed: true,
      priority: 'high'
    },
    {
      id: '8',
      title: 'เรียนรู้ ERC-20 Tokens',
      description: 'ศึกษา standard และวิธีสร้าง token',
      completed: false,
      priority: 'medium'
    },
    {
      id: '9',
      title: 'เรียนรู้ NFTs (ERC-721)',
      description: 'ศึกษา NFT standard และวิธีสร้าง',
      completed: false,
      priority: 'medium'
    },
    {
      id: '10',
      title: 'สร้าง Portfolio Project',
      description: 'สร้างโปรเจกต์สมบูรณ์เพื่อเป็น portfolio',
      completed: false,
      priority: 'high'
    }
  ])

  const [showNewTaskForm, setShowNewTaskForm] = useState(false)
  const [newTask, setNewTask] = useState({
    title: '',
    description: '',
    priority: 'medium' as 'low' | 'medium' | 'high'
  })

  const completedTasks = tasks.filter(t => t.completed).length
  const totalTasks = tasks.length
  const progress = Math.round((completedTasks / totalTasks) * 100)

  const handleToggleTask = (taskId: string) => {
    setTasks(tasks.map(task => 
      task.id === taskId ? { ...task, completed: !task.completed } : task
    ))
  }

  const handleAddTask = () => {
    if (newTask.title.trim()) {
      const task: Task = {
        id: String(tasks.length + 1),
        title: newTask.title,
        description: newTask.description,
        completed: false,
        priority: newTask.priority
      }
      setTasks([...tasks, task])
      setNewTask({ title: '', description: '', priority: 'medium' })
      setShowNewTaskForm(false)
    }
  }

  const meeBotMessage = completedTasks === 0 
    ? 'เริ่มต้นกันเลยครับ! เลือก task แรกและทำให้สำเร็จ 💪'
    : completedTasks === totalTasks
    ? 'เยี่ยมมาก! คุณทำ board นี้เสร็จสมบูรณ์แล้ว! 🎉🏆'
    : `เยี่ยมเลย! ทำไปแล้ว ${completedTasks} tasks สู้ต่อครับ! 🔥`

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ marginBottom: '2rem' }}>
          <Link href="/dashboard" style={{
            display: 'inline-flex',
            alignItems: 'center',
            gap: '0.5rem',
            color: 'white',
            textDecoration: 'none',
            marginBottom: '1rem',
            opacity: 0.9
          }}>
            ← กลับไป Dashboard
          </Link>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '2rem'
        }}>
          {/* Main Content */}
          <div>
            {/* Board Header */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
                {board.title}
              </h1>
              <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem', marginBottom: '1.5rem' }}>
                {board.description}
              </p>
              <ProgressBar current={completedTasks} total={totalTasks} />
              <p style={{ color: 'white', marginTop: '1rem', opacity: 0.9 }}>
                {completedTasks} / {totalTasks} tasks เสร็จแล้ว ({progress}%)
              </p>
            </div>

            {/* Tasks Section */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ color: 'white', fontSize: '1.8rem' }}>
                  ✅ Tasks
                </h2>
                <button 
                  onClick={() => setShowNewTaskForm(!showNewTaskForm)}
                  style={{
                    padding: '0.75rem 1.5rem',
                    backgroundColor: '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}
                >
                  ➕ เพิ่ม Task
                </button>
              </div>

              {showNewTaskForm && (
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  marginBottom: '1.5rem'
                }}>
                  <input
                    type="text"
                    placeholder="ชื่อ Task"
                    value={newTask.title}
                    onChange={(e) => setNewTask({ ...newTask, title: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      marginBottom: '1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      fontSize: '1rem'
                    }}
                  />
                  <textarea
                    placeholder="คำอธิบาย (ไม่บังคับ)"
                    value={newTask.description}
                    onChange={(e) => setNewTask({ ...newTask, description: e.target.value })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      marginBottom: '1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      fontSize: '1rem',
                      minHeight: '80px',
                      fontFamily: 'inherit',
                      resize: 'vertical'
                    }}
                  />
                  <select
                    value={newTask.priority}
                    onChange={(e) => setNewTask({ ...newTask, priority: e.target.value as any })}
                    style={{
                      width: '100%',
                      padding: '0.75rem',
                      marginBottom: '1rem',
                      borderRadius: '10px',
                      border: '1px solid rgba(255,255,255,0.3)',
                      backgroundColor: 'rgba(255,255,255,0.9)',
                      fontSize: '1rem'
                    }}
                  >
                    <option value="low">ความสำคัญต่ำ</option>
                    <option value="medium">ความสำคัญปานกลาง</option>
                    <option value="high">ความสำคัญสูง</option>
                  </select>
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      onClick={handleAddTask}
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: '#4CAF50',
                        color: 'white',
                        border: 'none',
                        borderRadius: '10px',
                        cursor: 'pointer',
                        fontWeight: 'bold'
                      }}
                    >
                      ✓ เพิ่ม
                    </button>
                    <button
                      onClick={() => {
                        setShowNewTaskForm(false)
                        setNewTask({ title: '', description: '', priority: 'medium' })
                      }}
                      style={{
                        padding: '0.75rem 1.5rem',
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        color: 'white',
                        border: '1px solid rgba(255,255,255,0.3)',
                        borderRadius: '10px',
                        cursor: 'pointer'
                      }}
                    >
                      ✕ ยกเลิก
                    </button>
                  </div>
                </div>
              )}

              <TaskList tasks={tasks} onToggleTask={handleToggleTask} />
            </div>
          </div>

          {/* Sidebar */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* MeeBot */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <MeeBot 
                emotion={completedTasks === totalTasks ? 'celebrating' : 'encouraging'} 
                message={meeBotMessage} 
              />
            </div>

            {/* Stats */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.3rem' }}>
                📊 สถิติ Board นี้
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <StatItem label="Tasks ทั้งหมด" value={totalTasks} />
                <StatItem label="เสร็จแล้ว" value={completedTasks} />
                <StatItem label="ค้างอยู่" value={totalTasks - completedTasks} />
                <StatItem label="ความสำเร็จ" value={`${progress}%`} />
              </div>
            </div>

            {/* Tips */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.3rem' }}>
                💡 เคล็ดลับ
              </h3>
              <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '1.5rem', lineHeight: '1.8' }}>
                <li>แบ่ง tasks ใหญ่เป็นส่วนเล็กๆ</li>
                <li>ทำ tasks ที่สำคัญก่อน</li>
                <li>ตั้งเป้าทำทีละ task</li>
                <li>เฉลิมฉลองเมื่อทำสำเร็จ!</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatItem({ label, value }: { label: string, value: string | number }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.75rem',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '10px'
    }}>
      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>{label}</span>
      <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.95rem' }}>{value}</span>
    </div>
  )
}

