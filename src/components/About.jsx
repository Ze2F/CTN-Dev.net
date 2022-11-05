import './about.sass'

function About() {
    return (
        <>
            <div className='main'>
                <div className='content'>
                    <img src='/assets/image/13.jpg' alt='' width={100} height={200}/>
                    <h3>V - Image</h3>
                </div>
                
                <div className='content'>
                    <h3>Who am I?</h3>
                    <br />
                    <p>Chotinat Ngovan</p>
                    <br />
                    <p>I Study at Rajamangala University of Technology Phra Nakhon</p>
                    <br />
                    <p>Java, Javascript, Python, PHP, SQL and more.</p>
                    <br />
                    <h3>Contect Me</h3>
                    <br />
                    <p>E-Mail | Facebook | Discord</p>
                </div>
            </div>
        </>
    )

}

export default About