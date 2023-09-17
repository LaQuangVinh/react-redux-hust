import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import { publicRoutes } from './routes/routes'
import { ExoticComponent, Fragment, ReactNode } from 'react'

function App() {
  return (
    <Router>
      <div style={{ height: 1000 }} className='App'>
        <Routes>
          {publicRoutes.map((route, index) => {
            const Page = route.component

            let Layout:
              | null
              | string
              | ExoticComponent<{
                  children?: ReactNode | undefined
                }> = Fragment

            if (route.layout) {
              Layout = route.layout
            } else if (route.layout === null) {
              Layout = Fragment
            }

            return <Route key={index} path={route.path} element={<Page />} />
          })}
        </Routes>
      </div>
    </Router>
  )
}

export default App
