import photo from "../../assets/photo-video.png"

const PhotoVideo = () => {
  return (
    <div className='card col-1-4 mb-50'>
        <div className='text'>
            <h2>Linkedin Optimisation</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. </p>
            <p>Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</p>
            <button>Schedule a free call</button>
        </div>
        <div className='img'>
            <img src={photo} alt="service-img" />
        </div>
    </div>
  )
}

export default PhotoVideo