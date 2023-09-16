import ConstRoutes from './ConstRoutes'

// Layouts

// Pages
import Home from '../pages/Home/Home'
import { ExoticComponent, ReactNode } from 'react'

//type
interface RoutesType {
  path: string
  component: () => JSX.Element
  layout?:
    | null
    | string
    | ExoticComponent<{
        children?: ReactNode | undefined
      }>
}

// Public routes
const publicRoutes: RoutesType[] = [{ path: ConstRoutes.home, component: Home }]

// const privateRoutes = []

export { publicRoutes }
