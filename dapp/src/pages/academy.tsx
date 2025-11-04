'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Course {
  id: string
  title: string
  description: string
  icon: string
  difficulty: 'beginner' | 'intermediate' | 'advanced'
  lessons: number
  duration: string
  points: number
  enrolled: boolean
  progress?: number
}

interface Quest {
  id: string
  title: string
  description: string
  icon: string
  reward: string
  progress: number
  total: number
  completed: boolean
}

export default function Academy() {
  const [activeTab, setActiveTab] = useState<'courses' | 'quests'>('courses')

  const [courses] = useState<Course[]>([
    {
      id: '1',
      title: 'Web3 Fundamentals',
      description: 'เรียนรู้พื้นฐาน blockchain, wallets และ Web3',
      icon: '🌐',
      difficulty: 'beginner',
      lessons: 8,
      duration: '2 ชั่วโมง',
      points: 500,
      enrolled: true,
      progress: 75
    },
    {
      id: '2',
      title: 'Smart Contract Development',
      description: 'เขียน smart contracts ด้วย Solidity',
      icon: '📜',
      difficulty: 'intermediate',
      lessons: 12,
      duration: '4 ชั่วโมง',
      points: 1000,
      enrolled: true,
      progress: 33
    },
    {
      id: '3',
      title: 'DApp Development with React',
      description: 'สร้าง decentralized applications',
      icon: '⚛️',
      difficulty: 'intermediate',
      lessons: 10,
      duration: '3 ชั่วโมง',
      points: 800,
      enrolled: false
    },
    {
      id: '4',
      title: 'NFT Creation & Trading',
      description: 'สร้างและซื้อขาย NFTs',
      icon: '🖼️',
      difficulty: 'beginner',
      lessons: 6,
      duration: '1.5 ชั่วโมง',
      points: 400,
      enrolled: false
    },
    {
      id: '5',
      title: 'DeFi Protocols',
      description: 'ทำความเข้าใจ Decentralized Finance',
      icon: '💰',
      difficulty: 'advanced',
      lessons: 15,
      duration: '5 ชั่วโมง',
      points: 1500,
      enrolled: false
    },
    {
      id: '6',
      title: 'DAO Governance',
      description: 'เรียนรู้การบริหารองค์กรแบบ DAO',
      icon: '🏛️',
      difficulty: 'advanced',
      lessons: 8,
      duration: '3 ชั่วโมง',
      points: 1200,
      enrolled: false
    }
  ])

  const [quests] = useState<Quest[]>([
    {
      id: '1',
      title: 'First Board Quest',
      description: 'สร้าง board แรกและเพิ่ม 5 tasks',
      icon: '🎯',
      reward: '100 MEE + First Board Badge',
      progress: 5,
      total: 5,
      completed: true
    },
    {
      id: '2',
      title: 'Task Master',
      description: 'ทำ tasks ให้สำเร็จ 50 tasks',
      icon: '✅',
      reward: '500 MEE + Task Master Badge',
      progress: 25,
      total: 50,
      completed: false
    },
    {
      id: '3',
      title: 'Week Warrior',
      description: 'ทำงานติดต่อกัน 7 วัน',
      icon: '🔥',
      reward: '300 MEE + Week Warrior Badge',
      progress: 5,
      total: 7,
      completed: false
    },
    {
      id: '4',
      title: 'Module Creator',
      description: 'สร้าง external module แรก',
      icon: '🔧',
      reward: '2000 MEE + Module Creator Badge',
      progress: 0,
      total: 1,
      completed: false
    },
    {
      id: '5',
      title: 'Smart Contract Deployer',
      description: 'Deploy smart contract ไป testnet',
      icon: '📜',
      reward: '1000 MEE + Deployer Badge',
      progress: 0,
      total: 1,
      completed: false
    },
    {
      id: '6',
      title: 'Community Helper',
      description: 'ช่วยเหลือผู้ใช้คนอื่น 10 ครั้ง',
      icon: '🤝',
      reward: '750 MEE + Helper Badge',
      progress: 3,
      total: 10,
      completed: false
    }
  ])

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return '#4CAF50'
      case 'intermediate': return '#FF9800'
      case 'advanced': return '#F44336'
      default: return '#9E9E9E'
    }
  }

  const getDifficultyLabel = (difficulty: string) => {
    switch (difficulty) {
      case 'beginner': return 'เริ่มต้น'
      case 'intermediate': return 'ปานกลาง'
      case 'advanced': return 'สูง'
      default: return ''
    }
  }

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
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
          <h1 style={{ color: 'white', fontSize: '2.5rem', marginTop: '1rem', marginBottom: '0.5rem' }}>
            🎓 MeeChain Academy
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
            เรียนรู้ทักษะใหม่และรับรางวัล
          </p>
        </div>

        {/* Tabs */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '0.5rem',
          marginBottom: '2rem',
          border: '1px solid rgba(255,255,255,0.2)',
          display: 'flex',
          gap: '0.5rem'
        }}>
          <TabButton 
            label="📚 หลักสูตร" 
            active={activeTab === 'courses'}
            onClick={() => setActiveTab('courses')}
          />
          <TabButton 
            label="🎯 Quests" 
            active={activeTab === 'quests'}
            onClick={() => setActiveTab('quests')}
          />
        </div>

        {/* Courses Tab */}
        {activeTab === 'courses' && (
          <div>
            {/* Stats */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                <AcademyStat icon="📚" label="หลักสูตรทั้งหมด" value={courses.length} />
                <AcademyStat icon="📖" label="กำลังเรียน" value={courses.filter(c => c.enrolled).length} />
                <AcademyStat icon="✅" label="เสร็จแล้ว" value="1" />
                <AcademyStat icon="💎" label="Points ที่ได้" value="500" />
              </div>
            </div>

            {/* Courses Grid */}
            <div style={{ 
              display: 'grid',
              gridTemplateColumns: 'repeat(auto-fill, minmax(350px, 1fr))',
              gap: '1.5rem'
            }}>
              {courses.map(course => (
                <div 
                  key={course.id}
                  style={{
                    backgroundColor: 'rgba(255,255,255,0.15)',
                    backdropFilter: 'blur(10px)',
                    borderRadius: '20px',
                    padding: '2rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-5px)'}
                  onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
                >
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'start', marginBottom: '1rem' }}>
                    <div style={{ fontSize: '3rem' }}>{course.icon}</div>
                    <div style={{
                      padding: '0.4rem 0.8rem',
                      borderRadius: '20px',
                      backgroundColor: getDifficultyColor(course.difficulty),
                      color: 'white',
                      fontSize: '0.8rem',
                      fontWeight: 'bold'
                    }}>
                      {getDifficultyLabel(course.difficulty)}
                    </div>
                  </div>

                  <h3 style={{ color: 'white', fontSize: '1.4rem', marginBottom: '0.5rem' }}>
                    {course.title}
                  </h3>
                  <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem', lineHeight: '1.6' }}>
                    {course.description}
                  </p>

                  <div style={{ 
                    display: 'flex',
                    gap: '1rem',
                    marginBottom: '1rem',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.9)'
                  }}>
                    <span>📖 {course.lessons} บทเรียน</span>
                    <span>⏱️ {course.duration}</span>
                    <span>💎 {course.points} pts</span>
                  </div>

                  {course.enrolled && course.progress !== undefined && (
                    <div style={{ marginBottom: '1rem' }}>
                      <div style={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '10px',
                        height: '8px',
                        overflow: 'hidden',
                        marginBottom: '0.5rem'
                      }}>
                        <div style={{
                          backgroundColor: '#4CAF50',
                          height: '100%',
                          width: `${course.progress}%`,
                          transition: 'width 0.3s'
                        }} />
                      </div>
                      <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.85rem' }}>
                        ความคืบหน้า: {course.progress}%
                      </div>
                    </div>
                  )}

                  <button style={{
                    width: '100%',
                    padding: '0.75rem',
                    backgroundColor: course.enrolled ? 'rgba(76, 175, 80, 0.8)' : '#4CAF50',
                    color: 'white',
                    border: 'none',
                    borderRadius: '10px',
                    cursor: 'pointer',
                    fontWeight: 'bold',
                    fontSize: '1rem'
                  }}>
                    {course.enrolled ? '📖 เรียนต่อ' : '🚀 เริ่มเรียน'}
                  </button>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Quests Tab */}
        {activeTab === 'quests' && (
          <div>
            {/* Quest Stats */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              marginBottom: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))', gap: '1.5rem' }}>
                <AcademyStat icon="🎯" label="Quests ทั้งหมด" value={quests.length} />
                <AcademyStat icon="✅" label="เสร็จแล้ว" value={quests.filter(q => q.completed).length} />
                <AcademyStat icon="🔄" label="กำลังทำ" value={quests.filter(q => !q.completed && q.progress > 0).length} />
                <AcademyStat icon="💰" label="รางวัลรวม" value="4650 MEE" />
              </div>
            </div>

            {/* Quests List */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              {quests.map(quest => {
                const progress = Math.round((quest.progress / quest.total) * 100)
                return (
                  <div 
                    key={quest.id}
                    style={{
                      backgroundColor: quest.completed 
                        ? 'rgba(76, 175, 80, 0.2)' 
                        : 'rgba(255,255,255,0.15)',
                      backdropFilter: 'blur(10px)',
                      borderRadius: '20px',
                      padding: '2rem',
                      border: quest.completed 
                        ? '2px solid #4CAF50' 
                        : '1px solid rgba(255,255,255,0.2)',
                      transition: 'transform 0.2s',
                      cursor: 'pointer'
                    }}
                    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
                  >
                    <div style={{ display: 'grid', gridTemplateColumns: '80px 1fr auto', gap: '2rem', alignItems: 'center' }}>
                      <div style={{ textAlign: 'center' }}>
                        <div style={{ fontSize: '4rem' }}>{quest.icon}</div>
                      </div>

                      <div>
                        <h3 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                          {quest.title}
                          {quest.completed && <span style={{ marginLeft: '0.5rem' }}>✓</span>}
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1rem' }}>
                          {quest.description}
                        </p>

                        {!quest.completed && (
                          <div style={{ marginBottom: '0.75rem' }}>
                            <div style={{ 
                              backgroundColor: 'rgba(255,255,255,0.2)',
                              borderRadius: '10px',
                              height: '10px',
                              overflow: 'hidden',
                              marginBottom: '0.5rem'
                            }}>
                              <div style={{
                                backgroundColor: '#4CAF50',
                                height: '100%',
                                width: `${progress}%`,
                                transition: 'width 0.3s'
                              }} />
                            </div>
                            <div style={{ color: 'rgba(255,255,255,0.9)', fontSize: '0.9rem' }}>
                              {quest.progress} / {quest.total} ({progress}%)
                            </div>
                          </div>
                        )}

                        <div style={{ 
                          color: '#FFD700',
                          fontSize: '0.95rem',
                          fontWeight: 'bold'
                        }}>
                          🎁 {quest.reward}
                        </div>
                      </div>

                      <div>
                        {quest.completed ? (
                          <div style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#4CAF50',
                            color: 'white',
                            borderRadius: '10px',
                            fontWeight: 'bold'
                          }}>
                            ✓ สำเร็จ
                          </div>
                        ) : progress > 0 ? (
                          <div style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: '#FF9800',
                            color: 'white',
                            borderRadius: '10px',
                            fontWeight: 'bold'
                          }}>
                            🔄 กำลังทำ
                          </div>
                        ) : (
                          <button style={{
                            padding: '0.75rem 1.5rem',
                            backgroundColor: 'rgba(255,255,255,0.2)',
                            color: 'white',
                            border: '1px solid rgba(255,255,255,0.3)',
                            borderRadius: '10px',
                            cursor: 'pointer',
                            fontWeight: 'bold'
                          }}>
                            เริ่มทำ
                          </button>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}

function TabButton({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        flex: 1,
        padding: '1rem 2rem',
        backgroundColor: active ? 'rgba(255,255,255,0.25)' : 'transparent',
        color: 'white',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer',
        fontWeight: active ? 'bold' : 'normal',
        fontSize: '1.1rem',
        transition: 'all 0.2s'
      }}
    >
      {label}
    </button>
  )
}

function AcademyStat({ icon, label, value }: { icon: string, label: string, value: string | number }) {
  return (
    <div style={{ textAlign: 'center' }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div>
      <div style={{ color: 'white', fontSize: '2rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
        {value}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
        {label}
      </div>
    </div>
  )
}
