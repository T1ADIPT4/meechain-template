'use client'

import { useState } from 'react'
import Link from 'next/link'

interface Badge {
  id: string
  name: string
  emoji: string
  description: string
  earnedDate: string
  points: number
}

interface Achievement {
  id: string
  title: string
  description: string
  progress: number
  total: number
  reward: string
}

export default function Profile() {
  const [user] = useState({
    name: 'MeeChain User',
    email: 'user@meechain.io',
    joined: '2024-01-15',
    avatar: '👤',
    level: 12,
    xp: 3450,
    xpToNextLevel: 4000,
    totalPoints: 15200
  })

  const [badges] = useState<Badge[]>([
    {
      id: '1',
      name: 'First Board',
      emoji: '🏆',
      description: 'สร้าง Board แรกสำเร็จ',
      earnedDate: '2024-01-15',
      points: 100
    },
    {
      id: '2',
      name: 'Week Warrior',
      emoji: '🔥',
      description: 'ทำงานติดต่อกัน 7 วัน',
      earnedDate: '2024-01-22',
      points: 500
    },
    {
      id: '3',
      name: 'Task Master',
      emoji: '💎',
      description: 'ทำงานครบ 100 tasks',
      earnedDate: '2024-02-10',
      points: 1000
    },
    {
      id: '4',
      name: 'Goal Getter',
      emoji: '🎯',
      description: 'บรรลุเป้าหมายครบ 5 boards',
      earnedDate: '2024-02-28',
      points: 750
    },
    {
      id: '5',
      name: 'Community Star',
      emoji: '⭐',
      description: 'ช่วยเหลือเพื่อนๆ ในชุมชน',
      earnedDate: '2024-03-05',
      points: 300
    },
    {
      id: '6',
      name: 'Module Creator',
      emoji: '🔧',
      description: 'สร้าง external module แรก',
      earnedDate: '2024-03-12',
      points: 2000
    },
    {
      id: '7',
      name: 'Quest Hunter',
      emoji: '🗡️',
      description: 'ทำ quest สำเร็จ 10 quests',
      earnedDate: '2024-03-20',
      points: 1500
    },
    {
      id: '8',
      name: 'Early Adopter',
      emoji: '🚀',
      description: 'เป็นผู้ใช้งานตั้งแต่เริ่มต้น',
      earnedDate: '2024-01-15',
      points: 500
    }
  ])

  const [achievements] = useState<Achievement[]>([
    {
      id: '1',
      title: 'Master of Tasks',
      description: 'ทำงานให้สำเร็จ 500 tasks',
      progress: 257,
      total: 500,
      reward: '5000 MEE + Legendary Badge'
    },
    {
      id: '2',
      title: 'Consistency King',
      description: 'ทำงานติดต่อกัน 30 วัน',
      progress: 12,
      total: 30,
      reward: '3000 MEE + Diamond Badge'
    },
    {
      id: '3',
      title: 'Board Champion',
      description: 'ทำ boards ให้สำเร็จ 20 boards',
      progress: 8,
      total: 20,
      reward: '2500 MEE + Champion Badge'
    }
  ])

  const levelProgress = Math.round((user.xp / user.xpToNextLevel) * 100)

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
          <h1 style={{ color: 'white', fontSize: '2.5rem', marginTop: '1rem' }}>
            👤 โปรไฟล์ของฉัน
          </h1>
        </div>

        <div style={{ 
          display: 'grid',
          gridTemplateColumns: '1fr 2fr',
          gap: '2rem'
        }}>
          {/* Sidebar - User Info */}
          <div>
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.2)',
              textAlign: 'center'
            }}>
              <div style={{ fontSize: '5rem', marginBottom: '1rem' }}>{user.avatar}</div>
              <h2 style={{ color: 'white', fontSize: '1.5rem', marginBottom: '0.5rem' }}>
                {user.name}
              </h2>
              <p style={{ color: 'rgba(255,255,255,0.8)', marginBottom: '1.5rem' }}>
                {user.email}
              </p>

              {/* Level */}
              <div style={{ 
                backgroundColor: 'rgba(255,255,255,0.1)',
                borderRadius: '15px',
                padding: '1.5rem',
                marginBottom: '1.5rem'
              }}>
                <div style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                  Level {user.level}
                </div>
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
                    width: `${levelProgress}%`,
                    transition: 'width 0.3s'
                  }} />
                </div>
                <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
                  {user.xp} / {user.xpToNextLevel} XP
                </div>
              </div>

              {/* Stats */}
              <div style={{ 
                display: 'grid',
                gap: '1rem',
                marginBottom: '1.5rem'
              }}>
                <StatRow label="Total Points" value={user.totalPoints.toLocaleString()} />
                <StatRow label="Badges" value={badges.length} />
                <StatRow label="Member Since" value={new Date(user.joined).toLocaleDateString('th-TH')} />
              </div>

              <button style={{
                width: '100%',
                padding: '0.75rem',
                backgroundColor: '#4CAF50',
                color: 'white',
                border: 'none',
                borderRadius: '10px',
                cursor: 'pointer',
                fontWeight: 'bold',
                fontSize: '1rem'
              }}>
                ✏️ แก้ไขโปรไฟล์
              </button>
            </div>
          </div>

          {/* Main Content */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '2rem' }}>
            {/* Badges Section */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                🏅 Badges ({badges.length})
              </h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fill, minmax(250px, 1fr))',
                gap: '1rem'
              }}>
                {badges.map(badge => (
                  <div key={badge.id} style={{
                    backgroundColor: 'rgba(255,255,255,0.1)',
                    borderRadius: '15px',
                    padding: '1.5rem',
                    border: '1px solid rgba(255,255,255,0.2)',
                    transition: 'transform 0.2s',
                    cursor: 'pointer'
                  }}>
                    <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
                      {badge.emoji}
                    </div>
                    <h3 style={{ color: 'white', fontSize: '1.2rem', marginBottom: '0.5rem' }}>
                      {badge.name}
                    </h3>
                    <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem', marginBottom: '0.75rem' }}>
                      {badge.description}
                    </p>
                    <div style={{ 
                      display: 'flex',
                      justifyContent: 'space-between',
                      fontSize: '0.85rem',
                      color: 'rgba(255,255,255,0.7)'
                    }}>
                      <span>💎 {badge.points} points</span>
                      <span>{new Date(badge.earnedDate).toLocaleDateString('th-TH', { month: 'short', day: 'numeric' })}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Achievements in Progress */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                🎯 Achievements กำลังทำ
              </h2>
              <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                {achievements.map(achievement => {
                  const progress = Math.round((achievement.progress / achievement.total) * 100)
                  return (
                    <div key={achievement.id} style={{
                      backgroundColor: 'rgba(255,255,255,0.1)',
                      borderRadius: '15px',
                      padding: '1.5rem',
                      border: '1px solid rgba(255,255,255,0.2)'
                    }}>
                      <div style={{ marginBottom: '1rem' }}>
                        <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '0.5rem' }}>
                          {achievement.title}
                        </h3>
                        <p style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.95rem' }}>
                          {achievement.description}
                        </p>
                      </div>
                      
                      <div style={{ 
                        backgroundColor: 'rgba(255,255,255,0.2)',
                        borderRadius: '10px',
                        height: '12px',
                        overflow: 'hidden',
                        marginBottom: '0.75rem'
                      }}>
                        <div style={{
                          backgroundColor: '#4CAF50',
                          height: '100%',
                          width: `${progress}%`,
                          transition: 'width 0.3s'
                        }} />
                      </div>

                      <div style={{ 
                        display: 'flex',
                        justifyContent: 'space-between',
                        color: 'rgba(255,255,255,0.9)',
                        fontSize: '0.95rem'
                      }}>
                        <span>{achievement.progress} / {achievement.total} ({progress}%)</span>
                        <span>🎁 {achievement.reward}</span>
                      </div>
                    </div>
                  )
                })}
              </div>
            </div>

            {/* Activity Stats */}
            <div style={{
              backgroundColor: 'rgba(255,255,255,0.15)',
              backdropFilter: 'blur(10px)',
              borderRadius: '20px',
              padding: '2rem',
              border: '1px solid rgba(255,255,255,0.2)'
            }}>
              <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
                📊 สถิติกิจกรรม
              </h2>
              <div style={{ 
                display: 'grid',
                gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
                gap: '1rem'
              }}>
                <ActivityStat icon="📋" label="Boards" value="8" />
                <ActivityStat icon="✅" label="Tasks Done" value="257" />
                <ActivityStat icon="🔥" label="Current Streak" value="12 days" />
                <ActivityStat icon="⏱️" label="Avg. Daily" value="5.2 tasks" />
                <ActivityStat icon="💎" label="MEE Earned" value="15,200" />
                <ActivityStat icon="🏆" label="Rank" value="#142" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

function StatRow({ label, value }: { label: string, value: string | number }) {
  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      padding: '0.75rem',
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '10px'
    }}>
      <span style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>{label}</span>
      <span style={{ color: 'white', fontWeight: 'bold', fontSize: '0.9rem' }}>{value}</span>
    </div>
  )
}

function ActivityStat({ icon, label, value }: { icon: string, label: string, value: string }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.1)',
      borderRadius: '15px',
      padding: '1.5rem',
      textAlign: 'center',
      border: '1px solid rgba(255,255,255,0.2)'
    }}>
      <div style={{ fontSize: '2.5rem', marginBottom: '0.5rem' }}>{icon}</div>
      <div style={{ color: 'white', fontSize: '1.5rem', fontWeight: 'bold', marginBottom: '0.25rem' }}>
        {value}
      </div>
      <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.85rem' }}>
        {label}
      </div>
    </div>
  )
}
