'use client'

import { useState } from 'react'
import Link from 'next/link'

interface LeaderboardEntry {
  rank: number
  userId: string
  username: string
  avatar: string
  points: number
  badges: number
  tasksCompleted: number
  streak: number
}

// Helper function to get rank medal
function getRankMedal(rank: number) {
  switch (rank) {
    case 1: return '🥇'
    case 2: return '🥈'
    case 3: return '🥉'
    default: return `#${rank}`
  }
}

export default function Leaderboard() {
  const [timeframe, setTimeframe] = useState<'week' | 'month' | 'all'>('all')
  
  const [leaderboard] = useState<LeaderboardEntry[]>([
    {
      rank: 1,
      userId: '1',
      username: 'CryptoNinja',
      avatar: '🥷',
      points: 25800,
      badges: 24,
      tasksCompleted: 542,
      streak: 45
    },
    {
      rank: 2,
      userId: '2',
      username: 'WebWizard',
      avatar: '🧙',
      points: 22100,
      badges: 21,
      tasksCompleted: 478,
      streak: 38
    },
    {
      rank: 3,
      userId: '3',
      username: 'CodeMaster',
      avatar: '💻',
      points: 19750,
      badges: 19,
      tasksCompleted: 423,
      streak: 32
    },
    {
      rank: 4,
      userId: '4',
      username: 'BlockchainBoss',
      avatar: '👑',
      points: 18200,
      badges: 18,
      tasksCompleted: 395,
      streak: 28
    },
    {
      rank: 5,
      userId: '5',
      username: 'SmartContractPro',
      avatar: '📜',
      points: 16500,
      badges: 17,
      tasksCompleted: 368,
      streak: 25
    },
    {
      rank: 6,
      userId: '6',
      username: 'DAppDeveloper',
      avatar: '🚀',
      points: 15800,
      badges: 16,
      tasksCompleted: 341,
      streak: 22
    },
    {
      rank: 7,
      userId: '7',
      username: 'MeeChainUser',
      avatar: '👤',
      points: 15200,
      badges: 15,
      tasksCompleted: 325,
      streak: 20
    },
    {
      rank: 8,
      userId: '8',
      username: 'NFTCollector',
      avatar: '🖼️',
      points: 14100,
      badges: 14,
      tasksCompleted: 298,
      streak: 18
    },
    {
      rank: 9,
      userId: '9',
      username: 'TokenTrader',
      avatar: '💰',
      points: 13500,
      badges: 13,
      tasksCompleted: 276,
      streak: 16
    },
    {
      rank: 10,
      userId: '10',
      username: 'Web3Pioneer',
      avatar: '🌐',
      points: 12800,
      badges: 12,
      tasksCompleted: 254,
      streak: 14
    }
  ])

  const currentUserRank = 7

  return (
    <div style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      padding: '2rem',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      <div style={{ maxWidth: '1000px', margin: '0 auto' }}>
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
            🏆 Leaderboard
          </h1>
          <p style={{ color: 'rgba(255,255,255,0.9)', fontSize: '1.1rem' }}>
            ดูอันดับและแข่งขันกับผู้ใช้คนอื่นๆ
          </p>
        </div>

        {/* Timeframe Selector */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '1.5rem',
          marginBottom: '2rem',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{ display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
            <TimeframeButton 
              label="สัปดาห์นี้" 
              active={timeframe === 'week'}
              onClick={() => setTimeframe('week')}
            />
            <TimeframeButton 
              label="เดือนนี้" 
              active={timeframe === 'month'}
              onClick={() => setTimeframe('month')}
            />
            <TimeframeButton 
              label="ตลอดกาล" 
              active={timeframe === 'all'}
              onClick={() => setTimeframe('all')}
            />
          </div>
        </div>

        {/* Top 3 Podium */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2rem',
          marginBottom: '2rem',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <div style={{ 
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'flex-end',
            gap: '1rem',
            marginBottom: '1rem'
          }}>
            {/* 2nd Place */}
            {leaderboard[1] && (
              <PodiumCard entry={leaderboard[1]} height="200px" />
            )}
            {/* 1st Place */}
            {leaderboard[0] && (
              <PodiumCard entry={leaderboard[0]} height="250px" />
            )}
            {/* 3rd Place */}
            {leaderboard[2] && (
              <PodiumCard entry={leaderboard[2]} height="170px" />
            )}
          </div>
        </div>

        {/* Leaderboard Table */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2rem',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h2 style={{ color: 'white', fontSize: '1.8rem', marginBottom: '1.5rem' }}>
            🏅 อันดับทั้งหมด
          </h2>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
            {leaderboard.map(entry => (
              <div 
                key={entry.userId}
                style={{
                  backgroundColor: entry.rank === currentUserRank 
                    ? 'rgba(76, 175, 80, 0.2)' 
                    : 'rgba(255,255,255,0.1)',
                  border: entry.rank === currentUserRank 
                    ? '2px solid #4CAF50'
                    : '1px solid rgba(255,255,255,0.2)',
                  borderRadius: '15px',
                  padding: '1.25rem',
                  display: 'grid',
                  gridTemplateColumns: '80px 1fr auto',
                  alignItems: 'center',
                  gap: '1.5rem',
                  transition: 'transform 0.2s',
                  cursor: 'pointer'
                }}
                onMouseEnter={(e) => e.currentTarget.style.transform = 'translateX(5px)'}
                onMouseLeave={(e) => e.currentTarget.style.transform = 'translateX(0)'}
              >
                <div style={{ textAlign: 'center' }}>
                  <div style={{ fontSize: '2rem', marginBottom: '0.25rem' }}>
                    {getRankMedal(entry.rank)}
                  </div>
                  {entry.rank === currentUserRank && (
                    <div style={{ color: '#4CAF50', fontSize: '0.75rem', fontWeight: 'bold' }}>
                      คุณ
                    </div>
                  )}
                </div>

                <div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', marginBottom: '0.5rem' }}>
                    <span style={{ fontSize: '2rem' }}>{entry.avatar}</span>
                    <span style={{ color: 'white', fontSize: '1.2rem', fontWeight: 'bold' }}>
                      {entry.username}
                    </span>
                  </div>
                  <div style={{ 
                    display: 'flex',
                    gap: '1.5rem',
                    fontSize: '0.9rem',
                    color: 'rgba(255,255,255,0.8)'
                  }}>
                    <span>🏅 {entry.badges} badges</span>
                    <span>✅ {entry.tasksCompleted} tasks</span>
                    <span>🔥 {entry.streak} days</span>
                  </div>
                </div>

                <div style={{ textAlign: 'right' }}>
                  <div style={{ color: 'white', fontSize: '1.8rem', fontWeight: 'bold' }}>
                    {entry.points.toLocaleString()}
                  </div>
                  <div style={{ color: 'rgba(255,255,255,0.7)', fontSize: '0.85rem' }}>
                    points
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Info Section */}
        <div style={{
          backgroundColor: 'rgba(255,255,255,0.15)',
          backdropFilter: 'blur(10px)',
          borderRadius: '20px',
          padding: '2rem',
          marginTop: '2rem',
          border: '1px solid rgba(255,255,255,0.2)'
        }}>
          <h3 style={{ color: 'white', fontSize: '1.3rem', marginBottom: '1rem' }}>
            💡 วิธีรับคะแนน
          </h3>
          <ul style={{ color: 'rgba(255,255,255,0.9)', paddingLeft: '1.5rem', lineHeight: '2' }}>
            <li>ทำ task ให้สำเร็จ: <strong>10-50 points</strong></li>
            <li>ทำ board ให้เสร็จสมบูรณ์: <strong>100-500 points</strong></li>
            <li>รักษา streak ติดต่อกัน: <strong>20 points/วัน</strong></li>
            <li>รับ badge ใหม่: <strong>100-2000 points</strong></li>
            <li>สร้าง external module: <strong>1000+ points</strong></li>
          </ul>
        </div>
      </div>
    </div>
  )
}

function TimeframeButton({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: '0.75rem 1.5rem',
        backgroundColor: active ? '#4CAF50' : 'rgba(255,255,255,0.1)',
        color: 'white',
        border: active ? 'none' : '1px solid rgba(255,255,255,0.3)',
        borderRadius: '10px',
        cursor: 'pointer',
        fontWeight: active ? 'bold' : 'normal',
        fontSize: '1rem',
        transition: 'all 0.2s'
      }}
    >
      {label}
    </button>
  )
}

function PodiumCard({ entry, height }: { entry: LeaderboardEntry, height: string }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.2)',
      backdropFilter: 'blur(10px)',
      borderRadius: '15px',
      padding: '1.5rem',
      textAlign: 'center',
      height,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'space-between',
      border: '2px solid rgba(255,255,255,0.3)',
      minWidth: '180px'
    }}>
      <div>
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
          {getRankMedal(entry.rank)}
        </div>
        <div style={{ fontSize: '3rem', marginBottom: '0.5rem' }}>
          {entry.avatar}
        </div>
        <div style={{ color: 'white', fontWeight: 'bold', fontSize: '1.1rem', marginBottom: '0.5rem' }}>
          {entry.username}
        </div>
      </div>
      <div>
        <div style={{ color: 'white', fontSize: '1.8rem', fontWeight: 'bold' }}>
          {entry.points.toLocaleString()}
        </div>
        <div style={{ color: 'rgba(255,255,255,0.8)', fontSize: '0.9rem' }}>
          points
        </div>
      </div>
    </div>
  )
}
