import './Homepage.css'
import bake1 from '../img/bake1.jpg'
import image2 from '../img/IMG_4297.jpg'
export default function Homepage() {
  return (
    <div>
       <header className="header">
        <h1>Welcome to</h1>
        <h2>Baking Delight!</h2>
      </header>
      <main>
        <section className="about-us">
          <h2>About Us</h2>
          <p>Baking Delight is a start up by 19 year-old created for satisfying your taste needs. 
            Run by Karissa Sanghvi it is now been selling the best of bakery since 2020.</p>
        </section>
        <section className="gallery">
          <h2>Gallery</h2>
          {/* Placeholder for images */}
          <div className="image-container">
            <img src={bake1} alt="Bakery Image 1" />
            <img src={image2} alt="Bakery Image 2" />
            {/* Add more images as needed */}
          </div>
        </section>
      </main>
      <footer className="footer">
        <p>Contact us to place an order!</p>
        <a href="/contact" className="button">Contact Us!</a>
      </footer>
    </div>
  )
}
