import BannerBackground from "../../assets/home-banner-background.png";
import './styles.scss'

const BackgroundBanner = () => {
  return (
    <div className='home-banner-container'>
        <div className='home-bannerImage-container'>
            <img src={BannerBackground} alt=""/>
        
        <div className='home-text-section'>
        <h1 className='primary-heading'>The community for mothers</h1>
        <p>
        <h2 className='primary-subheading'>Make being a mother fun again!</h2> 
        </p>
        <p>
        <h2 className='primary-subheading'>Learn, practice and have fun</h2>
        </p>
        <p>
        <h2 className='primary-subheading'>We build a community, you wanna be part of</h2> 
        </p>
        <button className="subscribeButton">Subscribe</button>
        <button className="aboutButton">Learn More</button>
        </div>
        </div>
      
    </div>
  )
}

export default BackgroundBanner
