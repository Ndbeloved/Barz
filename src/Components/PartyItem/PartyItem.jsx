import './PartyItem.css'
import { Link } from 'react-router-dom'
import plannerImage_1 from '../../assets/plannerImage.png'
import plannerImage_2 from '../../assets/plannerImage (1).png'
import plannerImage_3 from '../../assets/plannerImage (2).png'
import arrow_icon from '../../assets/arrowdown2.svg'

const PartyItem = () => {
  return (
    <section className='party-item'>
        <div className='wrapper'>
            <div className="sub-heading-wrapper">
                <h2>Our Top Party Items</h2>
                <Link to="/">See more <img src={arrow_icon} style={{transform: 'rotate(-90deg)', fill: '#fff'}} /></Link>
            </div>

            <div className="slider-wrapper">
                <div className="card">
                    <div className='image-cont'>
                        <img src={plannerImage_1} />

                        <div className='image-classification cakes'>
                            Cakes
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Cake by House of Cavinchi</span> <span id='layers'>10layers</span></p>
                        <p className='price'>N80,000</p>
                        <p className="discount">N100,000 <span id='discounted'>-20%</span></p>
                    </div>
                </div>

                <div className="card">
                    <div className='image-cont'>
                        <img src={plannerImage_2} />

                        <div className='image-classification cakes'>
                            Cakes
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Cake by House of Cavinchi</span> <span id='layers'>10layers</span></p>
                        <p className='price'>N80,000</p>
                        <p className="discount">N100,000 <span id='discounted'>-20%</span></p>
                    </div>
                </div>

                <div className="card">
                    <div className='image-cont'>
                        <img src={plannerImage_3} />

                        <div className='image-classification drinks'>
                            Drinks
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Chamdor Non-alcoholic wine</span> <span id='layers'>10layers</span></p>
                        <p className='price'>N8,000</p>
                        <p className="discount">N10,000 <span id='discounted'>-20%</span></p>
                    </div>
                </div>

                <div className="card">
                    <div className='image-cont'>
                        <img src={plannerImage_1} />

                        <div className='image-classification cakes'>
                            Cakes
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Cake by House of Cavinchi</span> <span id='layers'>10layers</span></p>
                        <p className='price'>N80,000</p>
                        <p className="discount">N100,000 <span id='discounted'>-20%</span></p>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default PartyItem