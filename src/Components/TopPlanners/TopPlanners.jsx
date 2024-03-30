import './TopPlanners.css'
import { Link } from 'react-router-dom'
import womanPlanner from '../../assets/womanPlannerImage (1).png'
import ratingStar from '../../assets/ratingStar.svg'
import location_icon from '../../assets/location.svg'
import arrow_icon from '../../assets/arrowdown2.svg'
import Slider from 'react-slick'
// import "slick-carousel/slick/slick.css"
// import "slick-carousel/slick/slick-theme.css"

const TopPlanners = () => {

    const settings = {
        dots: true,
        infinte: true,
        speed: 300,
        slidesToShow: 3,
        slidesToScrool: 3
    }
  return (
    <section className='top-planners'>
        <div className='top-planners-wrapper'>
            <div className="sub-heading-wrapper">
                <h2>Our Top Party Planners</h2>
                <Link to="/">See more <img src={arrow_icon} style={{transform: 'rotate(-90deg)', fill: '#fff'}} /></Link>
            </div>

            <div className="slick-list">
                <div className="card">
                    <div className='image-cont'>
                        <img src={womanPlanner} />

                        <div className='image-location'>
                            <img src={location_icon} />
                            <p>Ikoyi, Lagos Island</p>
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Elegant Events By Sarah</span> <span id='layers'><img src={ratingStar} /> 4.5</span></p>
                        <p className='desc'>Creating Memorable Moments for Special Occasions</p>
                        <div className="tags-wrapper">
                            <p>Weddings</p>
                            <p>Cooperate</p>
                            <p>Social gatherings</p>
                            <p>Birthdays</p>
                            <p>Conference</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className='image-cont'>
                        <img src={womanPlanner} />

                        <div className='image-location'>
                            <img src={location_icon} />
                            <p>Ikoyi, Lagos Island</p>
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Elegant Events By Sarah</span> <span id='layers'><img src={ratingStar} /> 4.5</span></p>
                        <p className='desc'>Creating Memorable Moments for Special Occasions</p>
                        <div className="tags-wrapper">
                            <p>Weddings</p>
                            <p>Cooperate</p>
                            <p>Social gatherings</p>
                            <p>Birthdays</p>
                            <p>Conference</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className='image-cont'>
                        <img src={womanPlanner} />

                        <div className='image-location'>
                            <img src={location_icon} />
                            <p>Ikoyi, Lagos Island</p>
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Elegant Events By Sarah</span> <span id='layers'><img src={ratingStar} /> 4.5</span></p>
                        <p className='desc'>Creating Memorable Moments for Special Occasions</p>
                        <div className="tags-wrapper">
                            <p>Weddings</p>
                            <p>Cooperate</p>
                            <p>Social gatherings</p>
                            <p>Birthdays</p>
                            <p>Conference</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className='image-cont'>
                        <img src={womanPlanner} />

                        <div className='image-location'>
                            <img src={location_icon} />
                            <p>Ikoyi, Lagos Island</p>
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Elegant Events By Sarah</span> <span id='layers'><img src={ratingStar} /> 4.5</span></p>
                        <p className='desc'>Creating Memorable Moments for Special Occasions</p>
                        <div className="tags-wrapper">
                            <p>Weddings</p>
                            <p>Cooperate</p>
                            <p>Social gatherings</p>
                            <p>Birthdays</p>
                            <p>Conference</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className='image-cont'>
                        <img src={womanPlanner} />

                        <div className='image-location'>
                            <img src={location_icon} />
                            <p>Ikoyi, Lagos Island</p>
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Elegant Events By Sarah</span> <span id='layers'><img src={ratingStar} /> 4.5</span></p>
                        <p className='desc'>Creating Memorable Moments for Special Occasions</p>
                        <div className="tags-wrapper">
                            <p>Weddings</p>
                            <p>Cooperate</p>
                            <p>Social gatherings</p>
                            <p>Birthdays</p>
                            <p>Conference</p>
                        </div>
                    </div>
                </div>

                <div className="card">
                    <div className='image-cont'>
                        <img src={womanPlanner} />

                        <div className='image-location'>
                            <img src={location_icon} />
                            <p>Ikoyi, Lagos Island</p>
                        </div>
                    </div>

                    <div className="text-wrapper">
                        <p className='caption'><span>Elegant Events By Sarah</span> <span id='layers'><img src={ratingStar} /> 4.5</span></p>
                        <p className='desc'>Creating Memorable Moments for Special Occasions</p>
                        <div className="tags-wrapper">
                            <p>Weddings</p>
                            <p>Cooperate</p>
                            <p>Social gatherings</p>
                            <p>Birthdays</p>
                            <p>Conference</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
  )
}

export default TopPlanners