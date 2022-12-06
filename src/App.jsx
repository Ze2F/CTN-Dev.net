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
            <img className='discord' src='https://assets-global.website-files.com/6257adef93867e50d84d30e2/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png' alt='Discord' onClick={redirect}/>
            <main>
            <header>
                <nav>
                    <Link className={(url==='/'?'nav-active ':'')} to='/'>Home</Link>
                    <Link className={(url==='/about'?'nav-active ':'')} to='/about'>About</Link>
                    <Link className={(url==='/gallery'?'nav-active ':'')} to='/gallery'>Gallery</Link>
                    <Link className={(url==='/project'?'nav-active ':'')} to='/project'>Project</Link>
                </nav>
            </header>
            <div className="container">
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/gallery' element={<Gallery />}/>
                    <Route path='/project' element={<Project />}/>
                </Routes>
            </div>
            </main>
        </>
    )
}
export default App