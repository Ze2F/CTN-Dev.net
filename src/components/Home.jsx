import { useState, useEffect } from 'react'
import './home.sass'
import React from 'react'

const raw = [
    'get https://ctn-gc.web.app',
    'Home About Gallery Page Discord',
    'get Discord',
    'https://discord.gg/nk55jjg',
    'hello',
    'Hello Back',
    ''
]

const speed = 50

const text_time = (limit) => {
    let len = 0
    for (let i = 0; i < limit; i++) {
        len += raw[i].length
    }
    return len
}

function Home() {

    const [ line, setLine ] = useState([])

    useEffect(() => {
        raw.forEach((element,index) => {
            setTimeout(()=>{
                document.getElementById('element')?console.log():setLine(prevState => ([...prevState, element]))
                element.split('').forEach((c,i) => {
                    setTimeout(()=>{
                        let doc = document.getElementById(index.toString())
                        doc?doc.innerHTML !== raw[index]?doc.innerHTML += c:console.log():console.log()
                    },speed*i)
                })
            },index?((text_time(index))*speed+1000):10)
        })
    },[])

    return (
        <>
            <div className='home'>
                {line.map((element,index) => {
                    return (
                        <p key={index} id={index}></p>
                    )
                })}
            </div>
        </>
    )
}

export default Home