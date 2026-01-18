import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ChatPage, HomePage, ProfilePage } from '@/pages'
import { BottomNav } from '@/shared/ui'

import { ScrollToTop } from './ScrollToTop'

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat" element={<ChatPage />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  )
}

export { App }
