'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function Home() {
  const [showDemo, setShowDemo] = useState(false)

  return (
    <main style={{ 
      minHeight: '100vh',
      background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
      color: 'white',
      fontFamily: 'system-ui, -apple-system, sans-serif'
    }}>
      {/* Hero Section */}
      <section style={{ 
        padding: '4rem 2rem',
        textAlign: 'center',
        maxWidth: '1200px',
        margin: '0 auto'
      }}>
        <div style={{ fontSize: '4rem', marginBottom: '1rem' }}>🎯</div>
        <h1 style={{ 
          fontSize: '3.5rem', 
          fontWeight: 'bold',
          marginBottom: '1rem',
          textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
        }}>
          ยินดีต้อนรับสู่ MeeChain
        </h1>
        <p style={{ 
          fontSize: '1.5rem',
          marginBottom: '2rem',
          opacity: 0.95
        }}>
          แพลตฟอร์มจัดการเป้าหมายและภารกิจที่มี MeeBot เป็นเพื่อนร่วมทาง
        </p>
        <p style={{ 
          fontSize: '1.2rem',
          marginBottom: '3rem',
          maxWidth: '800px',
          margin: '0 auto 3rem',
          lineHeight: '1.8'
        }}>
          เปลี่ยนทุกงานให้เป็นความก้าวหน้า 📈 รับรางวัลจริง 🏆 
          พร้อม AI ที่ให้กำลังใจคุณทุกก้าว 💙
        </p>

        <div style={{ 
          display: 'flex', 
          gap: '1rem', 
          justifyContent: 'center',
          flexWrap: 'wrap',
          marginBottom: '4rem'
        }}>
          <Link href="/dashboard" style={{
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            backgroundColor: '#4CAF50',
            color: 'white',
            border: 'none',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            textDecoration: 'none',
            display: 'inline-block',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
            transition: 'transform 0.2s',
          }}
          onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
          onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
          >
            🚀 เริ่มต้นใช้งานเลย
          </Link>
          <button onClick={() => setShowDemo(!showDemo)} style={{
            padding: '1rem 2.5rem',
            fontSize: '1.2rem',
            backgroundColor: 'transparent',
            color: 'white',
            border: '2px solid white',
            borderRadius: '50px',
            cursor: 'pointer',
            fontWeight: 'bold',
            boxShadow: '0 4px 15px rgba(0,0,0,0.2)',
          }}>
            📺 ดูวิธีใช้งาน
          </button>
        </div>

        {showDemo && (
          <div style={{
            backgroundColor: 'rgba(255,255,255,0.1)',
            backdropFilter: 'blur(10px)',
            borderRadius: '20px',
            padding: '2rem',
            marginTop: '2rem',
            textAlign: 'left'
          }}>
            <h3 style={{ marginBottom: '1rem', fontSize: '1.5rem' }}>🎬 วิธีใช้งาน MeeChain</h3>
            <ol style={{ lineHeight: '2', fontSize: '1.1rem' }}>
              <li>📝 สร้าง Board สำหรับเป้าหมายของคุณ (เช่น "เรียนรู้ Web3", "Fitness Journey")</li>
              <li>✅ เพิ่ม Tasks ที่ต้องทำเพื่อให้ถึงเป้าหมาย</li>
              <li>🎯 ทำงานให้เสร็จ และรับ MEE Tokens + Badges</li>
              <li>🤖 MeeBot จะคอยให้กำลังใจและคำแนะนำตลอดทาง</li>
              <li>🏆 แข่งขันกับเพื่อนๆ ใน Leaderboard</li>
            </ol>
          </div>
        )}
      </section>

      {/* Features Section */}
      <section style={{ 
        backgroundColor: 'rgba(255,255,255,0.1)',
        backdropFilter: 'blur(10px)',
        padding: '4rem 2rem'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            textAlign: 'center', 
            marginBottom: '3rem',
            fontWeight: 'bold'
          }}>
            ✨ คุณสมบัติเด่น
          </h2>
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
            gap: '2rem'
          }}>
            <FeatureCard 
              emoji="🤖"
              title="MeeBot AI Companion"
              description="เพื่อน AI ที่ให้กำลังใจ แนะนำ และช่วยคุณไปสู่เป้าหมาย"
            />
            <FeatureCard 
              emoji="🏅"
              title="NFT Badges & Rewards"
              description="รับ badges เป็น NFT และ MEE tokens เมื่อทำภารกิจสำเร็จ"
            />
            <FeatureCard 
              emoji="📊"
              title="Progress Tracking"
              description="ติดตามความก้าวหน้าแบบ Real-time พร้อมกราฟสวยงาม"
            />
            <FeatureCard 
              emoji="🔗"
              title="Web3 Integration"
              description="เชื่อมต่อ wallet และใช้งาน blockchain อย่างปลอดภัย"
            />
            <FeatureCard 
              emoji="🎓"
              title="MeeChain Academy"
              description="เรียนรู้ทักษะใหม่ๆ ผ่าน quests และ lessons"
            />
            <FeatureCard 
              emoji="👥"
              title="Community & Leaderboard"
              description="แข่งขันและร่วมสร้างกับเพื่อนๆ ในชุมชน"
            />
          </div>
        </div>
      </section>

      {/* How It Works */}
      <section style={{ 
        padding: '4rem 2rem',
        textAlign: 'center'
      }}>
        <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
          <h2 style={{ 
            fontSize: '2.5rem', 
            marginBottom: '3rem',
            fontWeight: 'bold'
          }}>
            🎯 ทำงานอย่างไรใน 3 ขั้นตอน
          </h2>
          <div style={{ 
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))',
            gap: '2rem',
            textAlign: 'center'
          }}>
            <StepCard 
              number="1"
              title="สร้างเป้าหมาย"
              description="กำหนด Board และ Tasks ที่คุณต้องการทำ"
            />
            <StepCard 
              number="2"
              title="ทำงานให้สำเร็จ"
              description="ทำ tasks ให้เสร็จ พร้อมคำกำลังใจจาก MeeBot"
            />
            <StepCard 
              number="3"
              title="รับรางวัล"
              description="ได้รับ Tokens, Badges และความภูมิใจ!"
            />
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section style={{ 
        padding: '4rem 2rem',
        textAlign: 'center',
        backgroundColor: 'rgba(0,0,0,0.2)'
      }}>
        <h2 style={{ fontSize: '2.5rem', marginBottom: '1.5rem', fontWeight: 'bold' }}>
          พร้อมที่จะเริ่มต้นแล้วหรือยัง?
        </h2>
        <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>
          เข้าร่วมกับผู้ใช้หลายพันคนที่กำลังบรรลุเป้าหมายของพวกเขา
        </p>
        <Link href="/dashboard" style={{
          padding: '1.2rem 3rem',
          fontSize: '1.3rem',
          backgroundColor: '#4CAF50',
          color: 'white',
          border: 'none',
          borderRadius: '50px',
          cursor: 'pointer',
          fontWeight: 'bold',
          textDecoration: 'none',
          display: 'inline-block',
          boxShadow: '0 6px 20px rgba(0,0,0,0.3)',
        }}>
          🎯 เริ่มต้นฟรีวันนี้
        </Link>
      </section>

      {/* Footer */}
      <footer style={{ 
        padding: '2rem',
        textAlign: 'center',
        borderTop: '1px solid rgba(255,255,255,0.2)',
        fontSize: '0.9rem',
        opacity: 0.8
      }}>
        <p>Made with ❤️ by MeeChain Community | © 2024 All rights reserved</p>
        <div style={{ marginTop: '1rem' }}>
          <a href="#" style={{ margin: '0 1rem', color: 'white' }}>About</a>
          <a href="#" style={{ margin: '0 1rem', color: 'white' }}>Docs</a>
          <a href="#" style={{ margin: '0 1rem', color: 'white' }}>GitHub</a>
        </div>
      </footer>
    </main>
  )
}

function FeatureCard({ emoji, title, description }: { emoji: string, title: string, description: string }) {
  return (
    <div style={{
      backgroundColor: 'rgba(255,255,255,0.15)',
      backdropFilter: 'blur(10px)',
      borderRadius: '20px',
      padding: '2rem',
      textAlign: 'center',
      transition: 'transform 0.3s',
      cursor: 'pointer',
      border: '1px solid rgba(255,255,255,0.2)'
    }}
    onMouseEnter={(e) => e.currentTarget.style.transform = 'translateY(-10px)'}
    onMouseLeave={(e) => e.currentTarget.style.transform = 'translateY(0)'}
    >
      <div style={{ fontSize: '3rem', marginBottom: '1rem' }}>{emoji}</div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{title}</h3>
      <p style={{ opacity: 0.9, lineHeight: '1.6' }}>{description}</p>
    </div>
  )
}

function StepCard({ number, title, description }: { number: string, title: string, description: string }) {
  return (
    <div style={{ padding: '1.5rem' }}>
      <div style={{
        width: '80px',
        height: '80px',
        borderRadius: '50%',
        backgroundColor: '#4CAF50',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '2.5rem',
        fontWeight: 'bold',
        margin: '0 auto 1rem',
        boxShadow: '0 4px 15px rgba(0,0,0,0.3)'
      }}>
        {number}
      </div>
      <h3 style={{ fontSize: '1.5rem', marginBottom: '0.5rem', fontWeight: 'bold' }}>{title}</h3>
      <p style={{ opacity: 0.9, lineHeight: '1.6' }}>{description}</p>
    </div>
  )
}
