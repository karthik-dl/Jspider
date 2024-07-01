import React from 'react'
import "./Routes.css"

const Home = () => {
  return (
    <div className='HomeContainer'>
      <div className="Home">
        <div className="content">
          <h2>We do something really useful, important, and unique. <br />Learn all about it here ...</h2>
          <button id="btn">Go on, click me!</button>
        </div>
        <div className='Image'>
        </div>
      </div>

      <div className='content2'>
          <div className='picture'>
              <div className='picone'>
                <div className='first'></div>
                <h3>Welcome to Halcyonic</h3>
                <p>This is Halcyonic, a free site template by AJ for HTML5 UP.<br/>
                  It's responsive, built on HTML5 + CSS3,<br/> 
                  and includes 5 unique page layouts.</p>
              </div>

              <div className='pictwo'>
                <div className='second'></div>
                <h3>Responsive You Say?</h3>
                <p>Yes! Halcyonic is built to be fully responsive so it looks<br/>
                   great at every screen size, from desktops to tablets<br/>
                    to mobile phones</p>
              </div>

              <div className='picthree'>
                <div className='third'></div>
                <h3>License Info</h3>
                <p>Halcyonic is licensed under the CCA license, so use it for <br/>
                  personal/commercial use as much as you like (just keep <br/>
                   our credits intact).</p>
              </div>

              <div className='picfour'>
                <div className='fourth'></div>
                <h3>Volutpat etiam aliquam</h3>
                <p>Duis neque nisi, dapibus sed mattis quis, rutrum<br/>
                   accumsan sed. Suspendisse eu varius nibh.<br/>
                    Suspendisse vitae magna mollis.</p>
              </div>
          </div>
        </div>


        <div className='cards'>
          <div className='card1'>
              <h1>Who We Are</h1>
              <h4>A subheading about who we are</h4>
              <div className='image'></div>
              <p>Duis neque nisi, dapibus sed mattis quis, rutrum
               accumsan magna sed. Suspendisse eu varius nibh.
               Suspendisse vitae magna eget odio amet mollis justo
                facilisis quis. Sed sagittis amet lorem ipsum.</p>
          </div>

          <div className='card2'>
              <h1>What We Doe</h1>
              <h4>A subheading about who we are</h4>
              <div className='image'>
                <p>Sed mattis quis rutrum accum</p>
                <hr/>
                <p>Eu varius nibh suspendisse lorem</p>
                <hr/>
                <p>Magna eget odio amet mollis justo</p>
                <hr/>
                <p>Facilisis quis sagittis mauris</p>
                <hr/>
                <p>Amet tellus gravida lorem ipsum</p>
              </div>
              
          </div>

          <div className='card3'>
              <h1>What People Are Saying</h1>
              <h4>And a final subheading about our clients</h4>
            
              <div className='panda'>
                <div className='img1'></div>
                <div className="title">
                <h5>"Neque nisidapibus mattis"</h5>
                <h6>Jane Doe, CEO of UntitledCorp</h6>
                </div>
              </div>

              <div className='panda'>
                <div className='img2'></div>
                  <div className="title">
                  <h5>"Lorem ipsum consequat!"</h5>
                  <h6>John Doe, President of FakeBiz</h6>
                </div>
              </div>

              <div className='panda'>
                <div className='img3'></div>
                  <div className="title">
                  <h5>"Magna veroeros amet tempus"</h5>
                  <h6>Mary Smith, CFO of UntitledBiz</h6>
                </div>
              </div>

              

              
        </div>

      </div>
    </div>
)
}
export default Home