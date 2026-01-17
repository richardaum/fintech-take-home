import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HomePage, ProfilePage, ChatPage } from '@/pages'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
