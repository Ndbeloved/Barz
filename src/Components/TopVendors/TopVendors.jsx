import './TopVendors.css'
import Dj_image from '../../assets/djPlannerImage.png'
import ratingStar from '../../assets/ratingStar.svg'
import location_icon from '../../assets/location.svg'
import { Link } from 'react-router-dom'
import arrow_icon from '../../assets/arrowdown2.svg'

const TopVendors = () => {

    const data = [
        {
            image: Dj_image,
            location: 'Ikoyi, Lagos Island',
            vendorName: 'Dj Exclusive',
            vendorRating: 4.5,
            description: 'Creating Memorable Moments for Special Occasions'
        },
        {
            image: Dj_image,
            location: 'Ikoyi, Lagos Island',
            vendorName: 'Dj Exclusive',
            vendorRating: 4.5,
            description: 'Creating Memorable Moments for Special Occasions'
        },
        {
            image: Dj_image,
            location: 'Ikoyi, Lagos Island',
            vendorName: 'Dj Exclusive',
            vendorRating: 4.5,
            description: 'Creating Memorable Moments for Special Occasions'
        },
    ]
  return (
    <section className='top-planners'>
        <div className='top-planners-wrapper'>
            <div className="sub-heading-wrapper">
                <h2>Our Top Vendors</h2>
                <Link to="/">See more <img src={arrow_icon} style={{transform: 'rotate(-90deg)', fill: '#fff'}} /></Link>
            </div>

            <div className="slick-list">
                <div className="card">
                    <div className='image-cont'>
                        <img src={Dj_image} />

                        <div className='image-location'>
                            <img src={location_icon} />
                            <p>Ikoyi, Lagos Island</p>
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Dj Exclusive</span> <span id='layers'><img src={ratingStar} /> 4.5</span></p>
                        <p className='desc'>Creating Memorable Moments for Special Occasions</p>
                    </div>
                </div>

                {data.map((card, index)=>(
                    <div className="card" key={index}>
                        <div className='image-cont'>
                            <img src={card.image} />

                            <div className='image-location'>
                                <img src={location_icon} />
                                <p>{card.location}</p>
                            </div>
                        </div>

                        <div className="text-wrapper">
                            <p className='caption'><span>{card.vendorName}</span> <span id='layers'><img src={ratingStar} /> {card.vendorRating}</span></p>
                            <p className='desc'>{card.description}</p>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    </section>
  )
}

export default TopVendors