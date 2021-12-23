import mainImage from "../../Assets/main/main.png"
import Image from "next/image"

const Main = () => {

  return (
    <section className="main" id="home">
      <div className="container">
        <div className="main__head">
          <div className="main__text">
            <h1 className="main__title">Title of page</h1>
            <p className="main__description">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit.
              Lorem Ipsum is simply dummy text of the printing and typesetting industry. 
              Lorem Ipsum has been the industry's standard dummy text ever since the 1500s,
               when an unknown printer took a galley of type and scrambled it to make a type specimen book.
            </p>
            <button className="main__head-button">join us</button>
          </div>
          <Image
            src={mainImage}
            alt="img" className="main__img"
            height={500}
            width={600}
          />
        </div>
      </div>
    </section>
  )
}

export default Main