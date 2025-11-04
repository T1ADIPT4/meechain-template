# 🎯 MeeChain User App - คู่มือสำหรับผู้ใช้ทั่วไป

## 🌟 ภาพรวม

MeeChain เป็นแอปพลิเคชันจัดการเป้าหมายและภารกิจที่มี **MeeBot AI** เป็นเพื่อนร่วมทาง ช่วยให้คุณ:

- 📋 **สร้าง Boards** สำหรับเป้าหมายต่างๆ ของคุณ
- ✅ **จัดการ Tasks** และติดตามความก้าวหน้า
- 💎 **รับ MEE Tokens** และ **NFT Badges** เมื่อทำงานสำเร็จ
- 🤖 **ได้รับกำลังใจ** จาก MeeBot ตลอดเส้นทาง
- 🏆 **แข่งขันกับเพื่อนๆ** ใน Leaderboard
- 🎓 **เรียนรู้ทักษะใหม่** ผ่าน Academy และ Quests

---

## 🚀 เริ่มต้นใช้งาน

### 1. เปิดแอปพลิเคชัน
เข้าไปที่หน้าแรก ที่ `http://localhost:3000`

คุณจะเห็น:
- ข้อความต้อนรับและคำอธิบายแอป
- ปุ่ม "เริ่มต้นใช้งานเลย" เพื่อไปยัง Dashboard
- คุณสมบัติเด่นของแอป
- วิธีใช้งานทีละขั้นตอน

### 2. ไปที่ Dashboard
กดปุ่ม "🚀 เริ่มต้นใช้งานเลย" หรือไปที่ `/dashboard`

ใน Dashboard คุณจะพบ:
- **สถิติส่วนตัว**: Boards, Tasks, MEE Tokens, Badges, Streak
- **Boards ทั้งหมด**: รายการ boards ที่คุณสร้างไว้
- **MeeBot**: ผู้ช่วยที่ให้กำลังใจ
- **Quick Actions**: ทางลัดไปยังหน้าต่างๆ
- **Badges ล่าสุด**: รางวัลที่คุณได้รับ

### 3. สร้าง Board แรก
1. กดปุ่ม "➕ สร้าง Board ใหม่"
2. ใส่ชื่อ Board (เช่น "เรียนรู้ Web3")
3. ใส่คำอธิบาย (ไม่บังคับ)
4. กดปุ่ม "✓ สร้าง"
5. MeeBot จะแสดงข้อความแสดงความยินดี! 🎉

### 4. เพิ่ม Tasks
1. คลิกที่ Board ที่สร้างไว้
2. กดปุ่ม "➕ เพิ่ม Task"
3. ใส่ชื่อ Task (เช่น "อ่านเอกสาร Ethereum")
4. ใส่คำอธิบาย (ไม่บังคับ)
5. เลือกความสำคัญ: ต่ำ / ปานกลาง / สูง
6. กดปุ่ม "✓ เพิ่ม"

### 5. ทำ Tasks ให้สำเร็จ
1. คลิกที่ checkbox หน้า Task
2. Task จะถูกทำเครื่องหมายว่าเสร็จแล้ว ✓
3. ความก้าวหน้าของ Board จะอัปเดตทันที
4. MeeBot จะให้กำลังใจคุณ! 💪

### 6. รับรางวัล
เมื่อทำ Tasks หรือ Boards สำเร็จ คุณจะได้รับ:
- 💎 **MEE Tokens** - ใช้ในระบบ MeeChain
- 🏅 **NFT Badges** - แสดงความสำเร็จของคุณ
- 📈 **XP และ Level** - เพิ่มระดับของคุณ

---

## 📱 หน้าต่างๆ ในแอป

### 🏠 หน้าแรก (Home)
- ต้อนรับผู้ใช้
- แสดงคุณสมบัติเด่น
- วิธีใช้งานแบบง่าย
- CTA เพื่อเริ่มต้นใช้งาน

**เข้าถึงผ่าน**: `/` หรือ http://localhost:3000

### 📊 Dashboard
- สถิติโดยรวม (Boards, Tasks, Tokens, Badges, Streak)
- รายการ Boards ทั้งหมด
- สร้าง Board ใหม่
- MeeBot ผู้ช่วย
- Quick Actions และ Badges ล่าสุด

**เข้าถึงผ่าน**: `/dashboard`

### 📋 Board Detail
- ดูรายละเอียด Board
- รายการ Tasks ทั้งหมด
- เพิ่ม/ทำเครื่องหมาย Tasks
- ความก้าวหน้าของ Board
- MeeBot ให้คำแนะนำเฉพาะ Board

**เข้าถึงผ่าน**: `/board/{board-id}` (คลิกจาก Dashboard)

### 👤 โปรไฟล์ (Profile)
- ข้อมูลผู้ใช้และสถิติ
- Level และ XP
- Badges ทั้งหมดที่ได้รับ
- Achievements กำลังทำ
- สถิติกิจกรรม

**เข้าถึงผ่าน**: `/profile` (จากปุ่มบน Dashboard)

### 🏆 Leaderboard
- อันดับผู้ใช้ทั้งหมด
- Top 3 Podium
- กรองตาม: สัปดาห์ / เดือน / ตลอดกาล
- ดูตำแหน่งของคุณ
- วิธีรับคะแนน

**เข้าถึงผ่าน**: `/leaderboard` (จาก Quick Actions)

### 🎓 Academy
- หลักสูตรเรียน Web3, Blockchain, DApp
- Quests ที่ให้รางวัล
- ติดตามความคืบหน้าการเรียน
- แบ่งตามระดับความยาก: เริ่มต้น / ปานกลาง / สูง

**เข้าถึงผ่าน**: `/academy` (จาก Quick Actions)

---

## 🎮 ฟีเจอร์หลัก

### 📋 Board Management
- สร้าง Board ได้ไม่จำกัด
- แต่ละ Board มีสีเฉพาะ
- ติดตามความก้าวหน้าแบบ real-time
- จัดการ Tasks ภายใน Board

### ✅ Task Management
- เพิ่ม/แก้ไข/ลบ Tasks
- กำหนดระดับความสำคัญ (สูง/ปานกลาง/ต่ำ)
- ทำเครื่องหมายสำเร็จได้ทันที
- เห็นความก้าวหน้าแบบ visual

### 🤖 MeeBot AI Companion
- ให้กำลังใจตามสถานการณ์
- แสดง emotion ที่เหมาะสม (happy, encouraging, celebrating)
- ปรับข้อความตามความก้าวหน้า
- อยู่เคียงข้าคุณในทุกหน้า

### 🏅 Badges & Rewards
- NFT Badges สำหรับความสำเร็จ
- MEE Tokens ที่มีคุณค่าจริง
- XP และ Level system
- Achievements ที่ท้าทาย

### 📊 Progress Tracking
- Visual progress bars
- สถิติโดยละเอียด
- Streak tracking
- Activity stats

### 🏆 Leaderboard & Competition
- แข่งขันกับผู้ใช้คนอื่น
- Top 3 Podium
- อันดับแบบ real-time
- รางวัลสำหรับอันดับสูง

### 🎓 Learning & Quests
- หลักสูตรเรียนฟรี
- Quests ที่ให้รางวัล
- เรียนรู้ Web3 ได้เลย
- รับ badge เมื่อจบหลักสูตร

---

## 🎯 วิธีรับรางวัล

### MEE Tokens
- ✅ ทำ Task ให้สำเร็จ: **10-50 MEE**
- 📋 ทำ Board ให้สำเร็จ: **100-500 MEE**
- 🔥 รักษา Streak: **20 MEE/วัน**
- 🏅 รับ Badge ใหม่: **100-2000 MEE**
- 🎓 จบหลักสูตร: **400-1500 MEE**
- 🔧 สร้าง Module: **1000+ MEE**

### NFT Badges
- 🏆 **First Board** - สร้าง board แรก
- 🔥 **Week Warrior** - Streak 7 วัน
- 💎 **Task Master** - ทำ 100 tasks
- 🎯 **Goal Getter** - บรรลุ 5 boards
- ⭐ **Community Star** - ช่วยเหลือเพื่อนๆ
- 🔧 **Module Creator** - สร้าง module แรก
- 🗡️ **Quest Hunter** - ทำ 10 quests
- 🚀 **Early Adopter** - ผู้ใช้เริ่มแรก

### XP & Level
- เพิ่ม XP ทุกครั้งที่ทำกิจกรรม
- Level Up เมื่อ XP ครบ
- Unlock features ใหม่ในแต่ละ level

---

## 💡 เคล็ดลับการใช้งาน

### เพิ่มประสิทธิภาพ
1. **แบ่ง Tasks เป็นส่วนเล็ก** - ทำให้ง่ายต่อการทำและติดตาม
2. **ตั้งเป้าที่ชัดเจน** - Board ควรมีเป้าหมายที่เฉพาะเจาะจง
3. **ทำทุกวัน** - รักษา Streak เพื่อรับ bonus
4. **ใช้ Priority** - ทำ tasks สำคัญก่อน
5. **เฉลิมฉลอง** - ดีใจเมื่อทำสำเร็จ!

### รับรางวัลเร็วขึ้น
1. **ทำ Quests** - รางวัลมากกว่า tasks ปกติ
2. **เรียน Academy** - ได้ทั้งความรู้และ rewards
3. **แข่งขัน Leaderboard** - Top rankers ได้รางวัลพิเศษ
4. **สร้าง Modules** - รางวัลสูงสุด!
5. **ช่วยเหลือชุมชน** - ได้ badge และ points

---

## 🎨 UI/UX Features

### สีสันและธีม
- **Gradient Background** - สวยงามและทันสมัย
- **Glass Morphism** - ดูโปร่งแสงและนุ่มนวล
- **Responsive Design** - ใช้งานได้ทุกหน้าจอ
- **Smooth Animations** - เคลื่อนไหวลื่นไหล
- **Color-coded Priority** - แยกความสำคัญด้วยสี

### การโต้ตอบ
- **Hover Effects** - ให้ feedback เมื่อเลื่อนเมาส์
- **Click Feedback** - รู้สึกถึงการกด
- **Real-time Updates** - อัปเดตทันทีที่ทำงาน
- **Visual Progress** - เห็นความคืบหน้าชัดเจน

---

## 🔮 Features ที่กำลังจะมา

- 🔗 **Web3 Wallet Integration** - เชื่อมต่อ MetaMask
- 🔔 **Notifications** - แจ้งเตือนเมื่อถึงกำหนด
- 👥 **Social Features** - แชร์กับเพื่อน
- 📱 **Mobile App** - แอปบนมือถือ
- 🎮 **Gamification** - เพิ่มเกม elements
- 🌐 **Multi-language** - รองรับหลายภาษา
- 🔊 **MeeBot Voice** - พูดคุยด้วยเสียง
- 📈 **Analytics** - วิเคราะห์ประสิทธิภาพ

---

## ❓ คำถามที่พบบ่อย

### Q: ฉันจะเริ่มต้นอย่างไร?
**A:** เพียงแค่กดปุ่ม "เริ่มต้นใช้งานเลย" บนหน้าแรก สร้าง Board แรก แล้วเพิ่ม Tasks!

### Q: MEE Tokens ใช้ทำอะไรได้บ้าง?
**A:** ใช้ซื้อ items พิเศษ, unlock features, และแลกของรางวัล (coming soon)

### Q: Badges เป็น NFT จริงหรือ?
**A:** ใช่! Badges จะถูก mint เป็น NFT บน blockchain (ต้องเชื่อม wallet)

### Q: MeeBot ช่วยอะไรได้บ้าง?
**A:** MeeBot ให้กำลังใจ, คำแนะนำ, และช่วยเตือนคุณเกี่ยวกับ tasks

### Q: ฉันจะขึ้น Leaderboard ได้อย่างไร?
**A:** ทำ tasks, รักษา streak, รับ badges, และมีส่วนร่วมในชุมชน!

---

## 📞 ติดต่อและช่วยเหลือ

- 📧 **Email**: support@meechain.io
- 💬 **Discord**: [Coming Soon]
- 🐦 **Twitter**: [Coming Soon]
- 📖 **Docs**: [docs/](../docs/)

---

## 🎉 สนุกกับการใช้งาน MeeChain!

เริ่มต้นเส้นทางสู่ความสำเร็จของคุณวันนี้ พร้อมกับ MeeBot ที่จะอยู่เคียงข้าคุณทุกก้าว! 💙

**Made with ❤️ by MeeChain Community**
