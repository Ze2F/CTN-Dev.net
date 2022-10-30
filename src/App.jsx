import { Routes, Route, Link } from 'react-router-dom'
import About from './components/About'
import Gallery from './components/Gallery'
import Project from './components/Project'
import Home from './components/Home'
import './app.css'

function App() {

    const redirect = () =>
        window.location.href = ('/discord.html')
      

    return (
        <>
            <div className='main'>
                <div className='Header'>
                    <h1 className='title'>CTN-GC</h1>
                    <h2 className='welcome'>WELCOME</h2>
                </div>
                <div className='nav'>
                    <Link className='nav-link' to='/'>Home</Link>
                    <Link className='nav-link' to='/about'>About</Link>
                    <Link className='nav-link' to='/gallery'>Gallery</Link>
                    <Link className='nav-link' to='/project'>Project</Link>
                </div>
                <div className='content'>
                <Routes>
                    <Route path='/' element={<Home />}/>
                    <Route path='/about' element={<About />}/>
                    <Route path='/gallery' element={<Gallery />}/>
                    <Route path='/project' element={<Project />}/>
                </Routes>
                </div>
                <div className='discord'>
                    <h3 className='discord-join'>เข้าสู่ดิสคอร์ด</h3>
                    <img className='discord-logo' src="https://assets-global.website-files.com/6257adef93867e50d84d30e2/625e5fcef7ab80b8c1fe559e_Discord-Logo-Color.png" alt="Discord" onClick={redirect}/>
                </div>
                
            </div>
        </>
    )
}
export default App