import "./Styles/Banner.css";
import banner from "../assets/banner.png";




function Banner({ hideBanner }) {
  return (
    <section id="home"
        className={`banner ${hideBanner ? "hidden" : ""}`}
        style={{ backgroundImage: `url(${banner})` }}>


      <div className="banner-content">
        <div className="text">
          <h1 className="banner-title">CLÉA MORALES</h1>
          <p className="banner-text">Aspiring Software Engineer</p>
        </div>
      </div>
    </section>


  );
}


export default Banner;
