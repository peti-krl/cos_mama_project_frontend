import { Button } from '@/components/ui/button'
import './styles.css'

const BackgroundBanner = () => {
  return (
    <>
      <div className='home-banner-container bg-no-repeat'>
        <div className='home-bannerImage-container'>
          <div className='home-text-section ml-20'>
            <h1 className='primary-heading'>The community for mothers</h1>
            <p className='primary-subheading'>Make being a mother fun again!</p>
            <p className='primary-subheading'>Learn, practice and have fun</p>
            <p className='primary-subheading'>We build a community, you wanna be part of </p>
            <Button className="mr-2 mt-2">Subscribe</Button>
            <Button variant="outline">Learn more</Button>
          </div>
        </div>

      <div className="rounded-2xl bg-indigo-800 ml-2 mr-2">
        <h1 className='pl-5 pb-3 pt-3 font-semibold text-white'>What are we?</h1>
        <p className='text-base text-white pl-5 pr-5 italic'>A community for mothers Lorem ipsum dolor sit amet, consectetur 
          adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore 
          magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco 
          laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor 
          in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur</p>
          <br></br>
      </div>
      </div>
    </>
  )
}

export default BackgroundBanner
