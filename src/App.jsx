import { Routes, Route, Link, useLocation } from 'react-router-dom'
import { useEffect, useState } from 'react'
import About from './components/About'
import Gallery from './components/Gallery'
import Project from './components/Project'
import Home from './components/Home'
import './app.sass'
import './global.sass'
function App() {

    const location = useLocation()

    const [url, setUrl] = useState(null)
    useEffect(() => {
      setUrl(location.pathname)
    }, [location])

    const redirect = () => {
        window.location.href = ('/discord.html')
    }

    return (
        <>
            <h1 className='title'>CTN-GC</h1>
            <h2 className='welcome'>WELCOME</h2>
            <nav>
                <Link className={(url==='/'?'nav-active ':'')+'nav-link'} to='/'>Home</Link>
                <Link className={(url==='/about'?'nav-active ':'')+'nav-link'} to='/about'>About</Link>
                <Link className={(url==='/gallery'?'nav-active ':'')+'nav-link'} to='/gallery'>Gallery</Link>
                <Link className={(url==='/project'?'nav-active ':'')+'nav-link'} to='/project'>Project</Link>
            </nav>
            <main>
            <Routes>
                <Route path='/' element={<Home />}/>
                <Route path='/about' element={<About />}/>
                <Route path='/gallery' element={<Gallery />}/>
                <Route path='/project' element={<Project />}/>
            </Routes>
            </main>
            <footer>
                <h3 className='discord-join'>เข้าสู่ดิสคอร์ด</h3>
                <img className='discord-logo' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png' alt='Discord' onClick={redirect} width={106} height={120}/>
            </footer>
        </>
    )
}
export default App