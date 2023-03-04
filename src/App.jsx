
import { createBrowserRouter, RouterProvider, Route, createRoutesFromElements } from 'react-router-dom'
import RootLayout from './layouts/RootLayout'
import HomeScreen from './pages/HomeScreen'
import SetupScreen from './pages/SetupScreen'
import HistoryScreen from './pages/HistoryScreen'

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<RootLayout />}>
      <Route index element={<HomeScreen />} />
      <Route path='settings' element={<SetupScreen />} />
      <Route path='history' element={<HistoryScreen />} />

    </Route>
  )
)

function App() {


  return (
    <RouterProvider router={router}  />
  )
}

export default App
