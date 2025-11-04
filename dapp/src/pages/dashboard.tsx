'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'
import MeeBot from '../components/MeeBot'
import ProgressBar from '../components/ProgressBar'

interface Board {
  id: string
  title: string
  description: string
  tasksCompleted: number
  tasksTotal: number
  color: string
}

interface UserStats {
  totalBoards: number
  completedTasks: number
  totalTasks: number
  meeTokens: number
  badges: number
  streak: number
}

export default function Dashboard() {
  const [boards, setBoards] = useState<Board[]>([
    {
      id: '1',
      title: 'เรียนรู้ Web3 Development',
      description: 'ศึกษาและพัฒนาทักษะ blockchain และ smart contracts',
      tasksCompleted: 7,
      tasksTotal: 10,
      color: '#667eea'
    },
    {
      id: '2',
      title: 'Fitness Journey 2024',
      description: 'ออกกำลังกายและดูแลสุขภาพอย่างสม่ำเสมอ',
      tasksCompleted: 15,
      tasksTotal: 30,
      color: '#f093fb'
    },
    {
      id: '3',
      title: 'สร้าง Side Project',
      description: 'พัฒนาโปรเจกต์ส่วนตัวให้สำเร็จ',
      tasksCompleted: 3,
      tasksTotal: 8,
      color: '#4facfe'
    }
  ])

  const [stats, setStats] = useState<UserStats>({
    totalBoards: 3,
    completedTasks: 25,
    totalTasks: 48,
    meeTokens: 1250,
    badges: 8,
    streak: 12
  })

  const [showNewBoardForm, setShowNewBoardForm] = useState(false)
  const [newBoard, setNewBoard] = useState({ title: '', description: '' })
  const [meeBotMessage, setMeeBotMessage] = useState('สวัสดีครับ! วันนี้พร้อมที่จะทำอะไรให้สำเร็จบ้างครับ? 💪')

  const handleCreateBoard = () => {
    if (newBoard.title.trim()) {
      const colors = ['#667eea', '#f093fb', '#4facfe', '#43e97b', '#fa709a']
      const randomColor = colors[Math.floor(Math.random() * colors.length)]
      
      const board: Board = {
        id: String(boards.length + 1),
        title: newBoard.title,
        description: newBoard.description,
        tasksCompleted: 0,
        tasksTotal: 0,
        color: randomColor
      }
      
      setBoards([...boards, board])
      setStats(prev => ({ ...prev, totalBoards: prev.totalBoards + 1 }))
      setNewBoard({ title: '', description: '' })
      setShowNewBoardForm(false)
      setMeeBotMessage(`เยี่ยมเลยครับ! สร้าง Board "${newBoard.title}" สำเร็จแล้ว 🎉 มาเพิ่ม tasks กันเถอะ!`)
    }
  }

  const overallProgress = stats.totalTasks > 0 
    ? Math.round((stats.completedTasks / stats.totalTasks) * 100) 
    : 0

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ 
          display: 'flex', 
          justifyContent: 'space-between', 
          alignItems: 'center',
          marginBottom: '2rem',
          flexWrap: 'wrap',
          gap: '1rem'
        }}>
          <div>
            <h1 style={{ color: 'white', fontSize: '2.5rem', marginBottom: '0.5rem' }}>
              📊 Dashboard
            </h1>
            <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
              ติดตามความก้าวหน้าของคุณ
            </p>
          </div>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <Link href="/" style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              🏠 หน้าแรก
            </Link>
            <Link href="/profile" style={{
              padding: '0.75rem 1.5rem',
              backgroundColor: 'rgba(255,255,255,0.2)',
              color: 'white',
              borderRadius: '10px',
              textDecoration: 'none',
              fontWeight: '500'
            }}>
              👤 โปรไฟล์
            </Link>
          </div>
        </div>

        {/* Stats Overview */}
        <div style={{ 
          display: 'grid',
          gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
          gap: '1rem',
          marginBottom: '2rem'
        }}>
          <StatCard icon="📋" label="Boards" value={stats.totalBoards} />
          <StatCard icon="✅" label="Tasks เสร็จแล้ว" value={stats.completedTasks} />
          <StatCard icon="💎" label="MEE Tokens" value={stats.meeTokens} />
          <StatCard icon="🏅" label="Badges" value={stats.badges} />
          <StatCard icon="🔥" label="Streak" value={`${stats.streak} วัน`} />
          <StatCard icon="📈" label="ความสำเร็จ" value={`${overallProgress}%`} />
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 400px',
          gap: '2rem'
        }}>
          {/* Main Content */}
          <div>
            {/* Overall Progress */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h2 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.5rem' }}>
                🎯 ความก้าวหน้ารวม
              </h2>
              <ProgressBar current={stats.completedTasks} total={stats.totalTasks} />
              <p style={{ color: 'white', marginTop: '1rem', opacity: 0.9 }}>
                คุณทำ {stats.completedTasks} จาก {stats.totalTasks} tasks เสร็จแล้ว!
              </p>
            </div>

            {/* Boards */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '1.5rem' }}>
                <h2 style={{ color: 'white', fontSize: '1.5rem' }}>
                  📋 Boards ของฉัน
                </h2>
                <button 
                  onClick={() => setShowNewBoardForm(!showNewBoardForm)}
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
                  ➕ สร้าง Board ใหม่
                </button>
              </div>

              {showNewBoardForm && (
                <div style={{
                  backgroundColor: 'rgba(255,255,255,0.1)',
                  padding: '1.5rem',
                  borderRadius: '15px',
                  marginBottom: '1.5rem'
                }}>
                  <input
                    type="text"
                    placeholder="ชื่อ Board (เช่น เรียนรู้ React)"
                    value={newBoard.title}
                    onChange={(e) => setNewBoard({ ...newBoard, title: e.target.value })}
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
                    value={newBoard.description}
                    onChange={(e) => setNewBoard({ ...newBoard, description: e.target.value })}
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
                  <div style={{ display: 'flex', gap: '1rem' }}>
                    <button
                      onClick={handleCreateBoard}
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
                      ✓ สร้าง
                    </button>
                    <button
                      onClick={() => {
                        setShowNewBoardForm(false)
                        setNewBoard({ title: '', description: '' })
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

              <div style={{ display: 'grid', gap: '1rem' }}>
                {boards.map(board => (
                  <Link 
                    key={board.id} 
                    href={`/board/${board.id}`}
                    style={{
                      background: `linear-gradient(135deg, ${board.color} 0%, ${board.color}dd 100%)`,
                      padding: '1.5rem',
                      borderRadius: '15px',
                      textDecoration: 'none',
                      color: 'white',
                      cursor: 'pointer',
                      transition: 'transform 0.2s',
                      border: '1px solid rgba(255,255,255,0.2)',
                      display: 'block'
                    }}
                  >
                    <h3 style={{ fontSize: '1.3rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>
                      {board.title}
                    </h3>
                    <p style={{ opacity: 0.9, marginBottom: '1rem', fontSize: '0.95rem' }}>
                      {board.description}
                    </p>
                    <ProgressBar current={board.tasksCompleted} total={board.tasksTotal} />
                    <div style={{ marginTop: '0.5rem', fontSize: '0.9rem', opacity: 0.9 }}>
                      {board.tasksCompleted} / {board.tasksTotal} tasks
                    </div>
                  </Link>
                ))}
              </div>

              {boards.length === 0 && (
                <div style={{ textAlign: 'center', padding: '3rem', color: 'white', opacity: 0.8 }}>
                  <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>📋</div>
                  <p>ยังไม่มี Board</p>
                  <p>กดปุ่ม "สร้าง Board ใหม่" เพื่อเริ่มต้น!</p>
                </div>
              )}
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
              <MeeBot emotion="happy" message={meeBotMessage} />
            </div>

            {/* Quick Actions */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.3rem' }}>
                ⚡ Quick Actions
              </h3>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
                <QuickActionButton icon="🎓" label="Academy" />
                <QuickActionButton icon="🏆" label="Leaderboard" />
                <QuickActionButton icon="🎯" label="Quests" />
                <QuickActionButton icon="💼" label="External Modules" />
              </div>
            </div>

            {/* Recent Achievements */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '1.5rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h3 style={{ color: 'white', marginBottom: '1rem', fontSize: '1.3rem' }}>
                🏅 Badges ล่าสุด
              </h3>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '0.75rem' }}>
                <BadgeCard emoji="🏆" name="First Board" />
                <BadgeCard emoji="🔥" name="Week Warrior" />
                <BadgeCard emoji="💎" name="Task Master" />
                <BadgeCard emoji="🎯" name="Goal Getter" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatCard({ icon, label, value }: { icon: string, label: string, value: string | number }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.15)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '1.5rem',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.2)'
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{icon}</div>
      <div style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
        {value}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
        {label}
      </div>
    </div>
  )
}

function QuickActionButton({ icon, label }: { icon: string, label: string }) {
  return (
    <button style={{
      display: 'flex',
      alignItems: 'center',
      gap: '0.75rem',
      padding: '0.75rem',
      backgroundColor: 'rgba(255,255,255,0.1)',
      border: '1px solid rgba(255,255,255,0.2)',
      borderRadius: '10px',
      color: 'white',
      cursor: 'pointer',
      fontSize: '1rem',
      transition: 'background-color 0.2s',
      width: '100%',
      textAlign: 'left'
    }}>
      <span style={{ fontSize: '1.5rem' }}>{icon}</span>
      <span>{label}</span>
    </button>
  )
}

function BadgeCard({ emoji, name }: { emoji: string, name: string }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '10px',
      padding: '1rem',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.2)'
    }}>
      <div style={{ fontSize: '2rem', marginBottom: '0.5rem' }}>{emoji}</div>
      <div style={{ color: 'white', fontSize: '0.85rem', fontWeight: '500' }}>{name}</div>
    </div>
  )
}
