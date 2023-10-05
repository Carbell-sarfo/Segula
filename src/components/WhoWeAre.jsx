import whoAsset from "../assets/who-we-are.png"

const WhoWeAre = () => {
  return (
    <div className="section-about" id="about">
      <div className="container wrapper">
        <h1>Who We Are</h1>
        <div className="col-1-2">
          {/* about text */}
          <div>
            <h3>Lorem ipsum dolor sit amet.</h3>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi corporis sequi. Doloribus pariatur asperiores, delectus illo nesciunt vero numquam?</p>
            <br />
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita reprehenderit quia aspernatur quos nulla, voluptatem reiciendis. Quas saepe quaerat eum, commodi tempore dolor velit perferendis eos quia. Magnam ea, quos tempora accusantium ratione incidunt consectetur minima inventore doloribus itaque fugiat.</p>
            <br />
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Modi excepturi corporis sequi. Doloribus pariatur asperiores, delectus illo nesciunt vero numquam?</p>
            <button className="btn btn-primary mt-20">About Us</button>
          </div>
          {/* about image */}
          <div>
            <img src={whoAsset} alt="" />
          </div>

        </div>
      </div>
      <div>
      </div>
    </div>
  )
}

export default WhoWeAre