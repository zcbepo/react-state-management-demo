import { BrowserRouter, Link, Navigate, Route, Routes } from 'react-router-dom'
import MobxPage from './pages/mobx_page'
import RecoilPage from './pages/recoil_page'
import ReduxPage from './pages/redux_page'

function App() {
  return <BrowserRouter>
    <Link className='link' to='/redux'>Redux Todo List</Link>
    <Link className='link' to='/recoil'>Recoil Todo List</Link>
    <Link className='link' to='/mobx'>Mobx Todo List</Link>
    <div style={{ marginTop: 32, marginLeft: 16 }}>
      <Routes>
        <Route path='/'>
          <Route index element={<Navigate to="/redux" />}></Route>
          <Route path='redux' element={<ReduxPage />}></Route>
          <Route path='recoil' element={<RecoilPage />}></Route>
          <Route path='mobx' element={<MobxPage />}></Route>
        </Route>
      </Routes>
    </div>
  </BrowserRouter>
}

export default App
