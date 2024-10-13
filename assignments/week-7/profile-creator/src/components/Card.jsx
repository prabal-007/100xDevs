import '../App.css'

const Card = () => {
    return (
        <div className='main'>
            <div className='upper'></div >
            <div className='circle'></div>
            <div className='selfData'>
                <span style={{display: "flex"}}><h5 style={{marginInline: "4px"}}> Stark </h5> 23</span>
                <p style={{ padding: "4px", margin: "0" }}>India</p>
            </div>
            <div className='lower'>
                <div className='lData'>
                    <h5>80K</h5>
                    <p>Followser</p>
                </div>
                <div className='lData'>
                    <h5>803K</h5>
                    <p>Likes</p>
                </div>
                <div className='lData'>
                    <h5>1.4K</h5>
                    <p>Phots</p>
                </div>
            </div>
        </div >
    )
}

export default Card
