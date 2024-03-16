import MobileMenu from "../common/header/MobileMenu";
import AgentsTeam from "./AgentsTeam";
import FeaturedProperties from "./FeaturedProperties";
// import FindProperties from "./FindProperties";
import FindProperties from "../home-3/FindProperties";
import Header from "./Header";
import HotProperties from "../home-7/HotProperties";
import LookingItem from "./LookingItem";
import Blogs from "../common/Blogs";
import Partners from "../common/Partners";
import BestProperties from "../home-3/BestProperties";
import Footer from "../common/footer/Footer";
import CopyrightFooter from "../common/footer/CopyrightFooter";
import PopupSignInUp from "../common/PopupSignInUp";
import Hero from "./Hero";

const index = () => {
  return (
    <>
      {/* <!-- Main Header Nav --> */}
      <Header />

      {/* <!--  Mobile Menu --> */}
      <MobileMenu />

      {/* <!-- Modal --> */}
      <PopupSignInUp />

      {/* <!-- 6th Home Design --> */}
      <Hero />

      {/* <!-- Feature Properties --> */}
      <section id="feature-property" className="feature-property-home6">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title mb40">
                <h2>Featured Properties</h2>
                <p>
                  Handpicked properties by our team.{" "}
                  <a className="float-end" href="#">
                    View All <span className="flaticon-next"></span>
                  </a>
                </p>
              </div>
            </div>
            {/* End .col */}
          </div>
          {/* End .row */}
        </div>
        {/* End .container */}

        <div className="feature_property_home6_slider ">
          <div className="container ml--xxl-0">
            <div className="gutter-x15">
              <FeaturedProperties />
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Whatare you looking for --> */}
      <section className="you-looking-for">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center mb30">
                <h2>What are you looking for?</h2>
                <p>We provide full service at every step.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* <!-- Property Cities --> */}
      <section id="property-city" className="property-city pb30">
        <div className="container">
          <div className="row features_row">
            <LookingItem />
          </div>

          {/* <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Find Properties in These Cities</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div> */}


          {/* <div className="row">
            <FindProperties />
          </div> */}
 
        </div>
      </section>
            {/* <section id="property-city" className="property-city pt0 pb30">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title">
              <h2>Find Properties in These Cities</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <FindProperties />
        </div>
      </section> */}

      {/* <!-- Modern Apertment --> */}
      {/* <section className="modern-apertment pt100 pb90">
        <div className="container">
          <div className="row">
            <div className="col-lg-6">
              <div className="modern_apertment mt30">
                <h2 className="title">Modern Apartment</h2>
                <h4 className="subtitle">$79 at night</h4>
                <p>
                  I am text block. Click edit button to change this text. Lorem
                  ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <a className="btn booking_btn btn-thm" href="#">
                  Book Now
                </a>
              </div>
            </div>
          </div>
        </div>
      </section> */}
            {/* <!-- Our Hot Offier --> */}

            <section className="our-hot-offer parallax">
        <div className="container">
          <div className="row mt40">
            <div className="col-md-6 col-lg-4">
              <div className="our_hotoffer">
                <h2>Hot This Month</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
                <button className="btn ht_offer" onClick={() => navigate("/listing-list-v1")}>View All</button>
              </div>
            </div>
            {/* End .col */}
            <HotProperties />
          </div>
        </div>
      </section>
            {/* <!-- Property Search --> */}
            <section id="property-search" className="property-search bg-img4">
        <div className="row">
          <div className="col-lg-6 offset-lg-3">
            <div className="search_smart_property text-center">
              <h2>Find Smarter, From Anywhere</h2>
              <p>
                Power your search with our Resideo real estate platform, for
                timely listings and a seamless experience.
              </p>
              <button className="btn ssp_btn">Find Now</button>
            </div>
          </div>
        </div>
      </section>
      <section id="best-property" className="best-property pt100 pb0">
        <div className="row">
          <div className="col-lg-12">
            <div className="main-title">
              <h2>Best Property Value</h2>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                <a className="float-end" href="#">
                  View All <span className="flaticon-next"></span>
                </a>
              </p>
            </div>
          </div>
        </div>
        <div className="row">
          <BestProperties />
        </div>
      </section>

      {/* <!-- Our Agents --> */}
      {/* <section id="our-agents" className="our-agents pt40 pb15">
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="main-title">
                <h2>Our Agents</h2>
                <p>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
                  <a className="float-end" href="#">
                    View All <span className="flaticon-next"></span>
                  </a>
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="our_agents_home6_slider ">
          <div className="container ml--xxl-0">
            <div className="gutter-x15">
              <AgentsTeam />
            </div>
          </div>
        </div>
      </section> */}

      {/* <!-- Our Blog --> */}
      {/* <section className="our-blog bb1 pb30">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Articles & Tips</h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit.</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Blogs />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Partners --> */}
      {/* <section id="our-partners" className="our-partners">
        <div className="container">
          <div className="row">
            <div className="col-lg-6 offset-lg-3">
              <div className="main-title text-center">
                <h2>Our Partners</h2>
                <p>We only work with the best companies around the globe</p>
              </div>
            </div>
          </div>
          <div className="row">
            <Partners />
          </div>
        </div>
      </section> */}

      {/* <!-- Our Footer --> */}
      <section className="footer_one home6 bgc-f7">
        <div className="container">
          <div className="row">
            <Footer />
          </div>
        </div>
      </section>

      {/* <!-- Our Footer Bottom Area --> */}
      <section className="footer_middle_area home6 pt30 pb30">
        <div className="container">
          <CopyrightFooter />
        </div>
      </section>
    </>
  );
};

export default index;
