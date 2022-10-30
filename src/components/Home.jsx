import { useState, useEffect } from 'react'
import './home.css'
import React from 'react'

const raw = [
    "get https://ctn-gc.web.app",
    "Home About Gallery Page Discord",
    "get Discord",
    "https://discord.gg/nk55jjg",
    '',
]

const speed = 50

const caltext = (limit) => {
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
                setLine(prevState => ([...prevState, element]))
                element.split("").forEach((c,i) => {
                    setTimeout(()=>{
                        document.getElementById(index).innerHTML !== raw[index]?
                        document.getElementById(index).innerHTML += c:
                        document.getElementById(index).innerHTML = raw[index]
                    },speed*i)
                })
            },index?((caltext(index))*speed+1000):10)
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