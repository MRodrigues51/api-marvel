import { Routes, Route } from 'react-router-dom'
import { DefaultLayout } from './layouts/DefaultLayout'
import { Comics } from './Pages/Comics'
import { Home } from './Pages/Home'
import { Send } from './Pages/Send'

export function Router() {
  return (
    <Routes>
      <Route path="/" element={<DefaultLayout />}>
        <Route path='/' element={<Home />} />
        <Route path='/comics' element={<Comics />} />
        <Route path='/send' element={<Send />} />
      </Route>
    </Routes>
  )
}
