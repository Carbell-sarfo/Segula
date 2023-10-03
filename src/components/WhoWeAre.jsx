import whoAsset from "../assets/who-we-are.png"

const WhoWeAre = () => {
  return (
    <div>
      <h1>Who We Are</h1>
      <div>
        <div>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi corporis sequi. Doloribus pariatur asperiores, delectus illo nesciunt vero numquam?</p>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi corporis sequi. Doloribus pariatur asperiores, delectus illo nesciunt vero numquam?</p>
        <button>About Us</button>
        </div>
        <div>
          <img src={whoAsset} alt="" />
        </div>
      </div>
    </div>
  )
}

export default WhoWeAre