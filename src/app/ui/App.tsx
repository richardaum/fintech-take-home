import { BrowserRouter, Route, Routes } from 'react-router-dom'

import { ChatPage, HomePage, MessagesPage, ProfilePage } from '@/pages'
import { BottomNav } from '@/shared/ui'

import { ScrollToTop } from './ScrollToTop'

function App() {
  const basename = import.meta.env.BASE_URL

  return (
    <BrowserRouter basename={basename}>
      <ScrollToTop />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/profile" element={<ProfilePage />} />
        <Route path="/chat" element={<ChatPage />} />
        <Route path="/chat/messages" element={<MessagesPage />} />
      </Routes>
      <BottomNav />
    </BrowserRouter>
  )
}

export { App }
