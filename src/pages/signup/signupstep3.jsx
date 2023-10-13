import React from 'react'

function Signupstep3() {
  return (
    <div className="ecom_header">
      <div className="container">
        <div className="row">
          <div className="col-md-12 col-lg-7">
            <div className="ecom_top_sidebar">
              <div className="gloab">

                <div className="globe_img">
                  <img src="/img/global.svg" alt=""/>
                </div>
                <div className="my-2">
                  <span className="us">US</span>
                  <span>EN</span>
                </div>

              </div>
              <div className="email_confermation">
                <div className="email_logo">

                  {/* <img src="./" className="img-fluid" alt=""/> */}
                  
                  <img src="/img/XMLID_31_.svg" className="img-fluid" alt=""/>
                </div>
                <h2 className="sub_heading">Confirm your email</h2>
                <p>Your account has been successfully registered. To complete the process please check your email for a validation request</p>
                <a href="/">Didn't receive a email? <span>send again</span> </a>
              </div>
            </div>
            <div className="more_option">
              <div className="row justify-content-center">
                <a href="/">Contact support</a>
                <a href="/">Privacy</a>
                <a href="/">Terms & Conditions</a>
                <a href="/">Cookies Trademarks</a>
              </div>
            </div>

          </div>

          <div className="col-md-12 col-lg-5" >
            <div className="ecom-left_sidebar">
              <div className="confermation_form">
                <h3>Panoptica</h3>
                <p>The Cisco Secure Application Cloud</p>
                <div className="confermation_form_submission">
                  <div className="accordion accordian_tab" id="accordionExample">
                    <div className="card">
                      <div className="card_header" id="headingOne">
                        <h2 className="mb-0">
                          <button className="  btn-block accordian_btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                            <div className="accordian_body_selected">
                              <span className="slect_month">1  Month <img src="/img/arrow-down.svg" alt="" id="arrow"/></span>
                              <span className="price">$5 ,981.00</span>
                            </div>
                          </button>
                        </h2>
                      </div>

                      <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                        <div className="card_body">

                          <div className="accordian_body">
                            <span className="slect_month">3  Month</span>
                            <span className="price">$5 ,981.00</span>
                          </div>
                          <div className="accordian_body">
                            <span className="slect_month">6  Month</span>
                            <span className="price"> <del>$23,928.00</del>$19,142.40</span>
                          </div>
                        </div>
                      </div>
                    </div>

                  </div>

                  <div className="subtotal">
                    <p>Subtotal</p>
                    <span>$1,994.00</span>
                  </div>
                  <div className="total">
                    <p>Total</p>
                    <span>$1,994.00</span>
                  </div>
                  <div className="change_plan">
                    <a href="/">Change Plan</a>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Signupstep3
