import React from 'react'
import './homepage.css'
import Logo from "./content/Logo.png"
import title from "./content/title.jpg"
import finance from "./content/finance.jpg"

const Homepage = (props) => {
  return (
    <div className="homepage-container">
      <div className="homepage-homepage">
        <nav className="homepage-nav-bar">
          <form enctype="text/plain" className="homepage-form">
            <input
              type="text"
              id="searchBar"
              placeholder="Materi Belajar Apa Hari Ini"
              className="homepage-textinput input"
            />
            <div>
              <div className="homepage-container2">
                
              </div>
            </div>
            <svg viewBox="0 0 1024 1024" className="homepage-search-icon">
              <path d="M406 598q80 0 136-56t56-136-56-136-136-56-136 56-56 136 56 136 136 56zM662 598l212 212-64 64-212-212v-34l-12-12q-76 66-180 66-116 0-197-80t-81-196 81-197 197-81 196 81 80 197q0 42-20 95t-46 85l12 12h34z"></path>
            </svg>
          </form>
         
       
          <img
            alt="image"
            src={Logo}
            className="homepage-image"
          />
        </nav>
        <div className="homepage-main-container">
          <img
            alt="image"
            src={title}
            className="homepage-main-image"
          />
          <div className="homepage-header-title">
            <p className="homepage-text">
              <span>
                Hello Bussiness Enthusiast
                <span
                />
              </span>
            </p>
            <h1 className="homepage-text002">
              <span>
                GROW YOUR BUSSINESS KNOWLEDGE WITH US
                <span
                />
              </span>
            </h1>
            <p className="homepage-text004">
              <span>
              Enhancing your financial business knowledge is crucial for navigating the complexities of the financial world and making informed decisions. By expanding your knowledge, you can gain a deeper understanding of financial concepts, principles, and practices, enabling you to make sound financial judgments, assess risks effectively, and identify promising investment opportunities.
              </span>
            </p>
            <a
              href="https://#"
              target="_blank"
              rel="noreferrer noopener"
              className="homepage-link button"
            >
              See all class
            </a>
            <a
              href="https://#"
              target="_blank"
              rel="noreferrer noopener"
              className="homepage-booking-now button"
            >
              Booking Now
            </a>
          </div>
        </div>


        <div className="homepage-content-container">
          <div className="homepage-catalogue-container">
            <div className="homepage-catalogue-car1">
              <div className="homepage-catalog1">
                <img alt="Car5135" src={finance} className="homepage-cat" />
                <div className="homepage-price">
                  <h4 className="homepage-text006">
                    <span>FREE</span>
                  </h4>
                </div>

                <button type="button" className="homepage-learn-now button">
                  <a href='https://www.youtube.com/embed/oKxzoDskVr4?si=anA-rAZhV0hA4dcW'>Learn Now</a>
                </button>
                <svg viewBox="0 0 1024 1024" className="homepage-icon01">
                  <path d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
                </svg>
                <h4 className="homepage-text008 BoldType@20">FINANCE 101</h4>
              </div>
            </div>

            <div className="homepage-catalogue-car2">
              <div className="homepage-catalog2">
                <div className="homepage-car-name">
                  <h4 className="homepage-text009 BoldType@20">SCALE YOUR BUSSINESS</h4>
                </div>
                <img alt="Car5135" src={finance} className="homepage-car" />
                <div className="homepage-price1">
                  <h4 className="homepage-text010">
                    <span>FREE</span>
                  </h4>
                </div>
                <svg viewBox="0 0 1024 1024" className="homepage-icon03">
                  <path d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
                </svg>
                <button type="button" className="homepage-learn-now1 button">
                  <a href='https://www.youtube.com/embed/e4oDZA8mBmg?si=wq9Qdb-A1tdhZI-_'>Learn Now</a>
                </button>
              </div>
            </div>

            
            <div className="homepage-catalogue-car3">
              <div className="homepage-catalog3">
                <div className="homepage-car-name1">
                  <h4 className="homepage-text012 BoldType@20">START TO CALCULATE</h4>
                </div>
                <img alt="Car5135" src={finance} className="homepage-car1" />
                <div className="homepage-price2">
                  <h4 className="homepage-text013">
                    <span>FREE</span>
                  </h4>
                </div>
                <svg viewBox="0 0 1024 1024" className="homepage-icon05">
                  <path d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
                </svg>
                <button type="button" className="homepage-learn-now2 button">
                  <a href='https://www.youtube.com/embed/BXUIaOMVIqc?si=A1zrj9p4KC1GD0Qx'> Learn Now</a>
                </button>
              </div>
            </div>


            <div className="homepage-catalogue-car4">
              <div className="homepage-catalog4">
                <div className="homepage-car-name2">
                  <h4 className="homepage-text015 BoldType@20">MINIMIZE THE RISKS</h4>
                </div>
                <img alt="Car5135" src={finance} className="homepage-car2" />
                <div className="homepage-price3">
                  <h4 className="homepage-text016">
                    <span>FREE</span>
                  </h4>
                </div>
                <svg viewBox="0 0 1024 1024" className="homepage-icon07">
                  <path d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
                </svg>
                <button type="button" className="homepage-learn-now3 button">
                  Learn Now
                </button>
              </div>
            </div>

            <div className="homepage-catalogue-car5">
              <div className="homepage-catalog5">
                <div className="homepage-car-name3">
                  <h4 className="homepage-text018 BoldType@20">ACKNOWLEDGE THE DOWNFALL</h4>
                </div>
                <img alt="Car5135" src={finance} className="homepage-car3" />
                <div className="homepage-price4">
                  <h4 className="homepage-text019">
                    <span>FREE</span>
                  </h4>
                </div>
                <svg viewBox="0 0 1024 1024" className="homepage-icon09">
                  <path d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
                </svg>
                <button type="button" className="homepage-learn-now4 button">
                  Learn Now
                </button>
              </div>
            </div>

            <div className="homepage-catalogue-car6">
              <div className="homepage-catalog6">
                <div className="homepage-car-name4">
                  <h4 className="homepage-text021 BoldType@20">EXAMPLE</h4>
                </div>
                <img alt="Car5135" src={finance} className="homepage-car4" />
                <div className="homepage-price5">
                  <h4 className="homepage-text022">
                    <span>FREE</span>
                  </h4>
                </div>
                <svg viewBox="0 0 1024 1024" className="homepage-icon11">
                  <path d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
                </svg>
                <button type="button" className="homepage-learn-now5 button">
                  Learn Now
                </button>
              </div>
            </div>

            <div className="homepage-catalogue-car7">
              <div className="homepage-catalog7">
                <div className="homepage-car-name5">
                  <h4 className="homepage-text024 BoldType@20">EXAMPLE</h4>
                </div>
                <img alt="Car5135" src={finance} className="homepage-car5" />
                <div className="homepage-price6">
                  <h4 className="homepage-text025">
                    <span>FREE</span>
                  </h4>
                </div>
                <svg viewBox="0 0 1024 1024" className="homepage-icon13">
                  <path d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
                </svg>
                <button type="button" className="homepage-learn-now6 button">
                  Learn Now
                </button>
              </div>
            </div>

            <div className="homepage-catalogue-car8">
              <div className="homepage-catalog8">
                <div className="homepage-car-name6">
                  <h4 className="homepage-text027 BoldType@20">EXAMPLE</h4>
                </div>
                <img alt="Car5135" src={finance} className="homepage-car6" />
                <div className="homepage-price7">
                  <h4 className="homepage-text028">
                    <span>FREE</span>
                  </h4>
                </div>
                <svg viewBox="0 0 1024 1024" className="homepage-icon15">
                  <path d="M950.857 340.571c0-160.571-108.571-194.286-200-194.286-85.143 0-181.143 92-210.857 127.429-13.714 16.571-42.286 16.571-56 0-29.714-35.429-125.714-127.429-210.857-127.429-91.429 0-200 33.714-200 194.286 0 104.571 105.714 201.714 106.857 202.857l332 320 331.429-319.429c1.714-1.714 107.429-98.857 107.429-203.429zM1024 340.571c0 137.143-125.714 252-130.857 257.143l-356 342.857c-6.857 6.857-16 10.286-25.143 10.286s-18.286-3.429-25.143-10.286l-356.571-344c-4.571-4-130.286-118.857-130.286-256 0-167.429 102.286-267.429 273.143-267.429 100 0 193.714 78.857 238.857 123.429 45.143-44.571 138.857-123.429 238.857-123.429 170.857 0 273.143 100 273.143 267.429z"></path>
                </svg>
                <button type="button" className="homepage-learn-now7 button">
                  Learn Now
                </button>
              </div>
            </div>
          </div>
          <h1 className="homepage-text030">
            <span>Lets begin learn something new to grow your Bussiness</span>
          </h1>
          <p className="homepage-text032">
            <span>
              <span
                dangerouslySetInnerHTML={{
                  __html: ' ',
                }}
              />
            </span>
          </p>
       
        </div>
        <div className="homepage-contact">
          <span className="homepage-text038">
            <span>Reach Our Team</span>
          </span>
          <div className="homepage-group42">
            <div className="homepage-group34"></div>
            <span className="homepage-text042">
              <span>Customer Support</span>
            </span>
            <span className="homepage-text044">
              <span>
                +62 89576528129
              </span>
            </span>
            <img
              alt="fluentcall24filled5354"
              src="/external/fluentcall24filled5354-veq.svg"
              className="homepage-fluentcall24filled"
            />
          </div>
          <div className="homepage-group43">
            <div className="homepage-group341">
              <img
                alt="icomoonfreepricetags5343"
                src="/external/icomoonfreepricetags5343-zjge.svg"
                className="homepage-icomoonfreepricetags"
              />
            </div>
            <span className="homepage-text046">
              <span>Best Price Guarantted</span>
            </span>
            </div>
          
          <div className="homepage-group44">
            <div className="homepage-group342">
              <img
                alt="Vector5351"
                src="/external/vector5351-p5h.svg"
                className="homepage-vector"
              />
            </div>
            <span className="homepage-text050">
              <span>Many Location</span>
            </span>
          </div>
          <img
            alt="image"
            src={Logo}
            className="homepage-image1"
          />
        </div>
        <div className="homepage-ads">
          <div className="homepage-ads1">
            <iframe
              id="adsVideo1"
              src="https://www.youtube.com/embed/OP7fiR73bL4?si=6oQZlcZTyCGvMF9K"
              tag="button"
              className="homepage-iframe"
            ></iframe>
          </div>
          <div className="homepage-ads2">
            <iframe
              id="adsVideo2"
              src="https://www.youtube.com/embed/_jLQIMaTQpw?si=PONB2JU2gjTTmH64"
              className="homepage-iframe1"
            ></iframe>
          </div>
        </div>
        <div className="homepage-footer">
          <span className="homepage-text054 SemiboldType@16">
            <span>©2022 Company Name. All rights reserved</span>
          </span>
          <span className="homepage-text056 SemiboldType@16">
            <span>Terms &amp; Condition</span>
          </span>
          <span className="homepage-text058 SemiboldType@16">
            <span>Privacy &amp; Policy</span>
          </span>
          <div className="homepage-socials">
            <span className="homepage-text060 MediumType@16">
              <span>
                <span>Discord</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Instagram</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Twitter</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Facebook</span>
              </span>
            </span>
            <span className="homepage-text075 SemiboldType@20">
              <span>Socials</span>
            </span>
          </div>
          <div className="homepage-community">
            <span className="homepage-text077 MediumType@16">
              <span>
                <span>Events</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Blog</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Podcast</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Invite a friend</span>
              </span>
            </span>
            <span className="homepage-text092 SemiboldType@20">
              <span>Community</span>
            </span>
          </div>
          <div className="homepage-about">
            <span className="homepage-text094 MediumType@16">
              <span>
                <span>How it works</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Featured</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Partnership</span>
                <br></br>
                <span></span>
                <br></br>
                <span>Bussiness Relation</span>
              </span>
            </span>
            <span className="homepage-text109 SemiboldType@20">
              <span>About</span>
            </span>
          </div>
          <img
            alt="LineI713"
            src="/external/linei713-vxfq.svg"
            className="homepage-line"
          />
          <div className="homepage-logo">
            <span className="homepage-text111 MediumType@16">
              <span>
                Our vision is to provide convenience and help increase your
                sales business.
              </span>
            </span>
            <img
              alt="image"
              src={Logo}
              className="homepage-image2"
            />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Homepage
