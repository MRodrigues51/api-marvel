import { Outlet } from 'react-router-dom'
import { Footer } from '../../Components/Footer'
import { Header } from '../../Components/Header'
import { LayoutContainer } from './styles'

export function DefaultLayout() {
  return (
    <LayoutContainer>
      <Header />

      <Outlet />
      <Footer />
    </LayoutContainer>
  )
}
