import './about.css'

function About() {
    return (
        <>
        <div className="about">
            <div className='about-image'>
                {/* <img src="https://drive.google.com/uc?export=view&id=12FDZ-vn4HCNR-pGwONO2LhUGsJ63AT7F" alt="" /> */}
                <img src="/assets/image/13.jpg" alt="" />
                <h3>V - Image</h3>
            </div>
            
            <div className='about-content'>
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