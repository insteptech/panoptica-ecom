import React from 'react'

function Orderdetails() {
    return (
        <>
            <section class="ecom_thank_you_page">
                <div class="container">
                    <div class="row justify-content-center">
                        <div class="col-md-6">
                            <div class="thanks_for_order_sec">
                                <div>
                                    <img src="/img/large-right-arrow.svg" alt="" class="img-fluid"/>
                                </div>
                                <div class="greeting_heading">
                                    <h2 class="greeting_line">Thanks for your order.</h2>
                                    <p class="greeting_description">We’ll get started on that right away. Feel free to reach out to us for
                                        questions or feedback.</p>
                                    <p class="order_number">Your order number is <span>126</span></p>
                                    <a href="/currentplan" class="go_to_product">Go to product</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
            <section class="ecom_header bg_space">
                <div class="container">
                    <div class="row">
                        <div class="col-md-7">
                            <div class="order_details">
                                <h3 class="thank_u_page_subheading">Order details</h3>
                                <div class="tabal_row">
                                    <div class="tabal_body">
                                        <p>Order number :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <button>126</button>
                                    </div>
                                </div>
                                <div class="tabal_row">
                                    <div class="tabal_body">
                                        <p>Order date :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <button>April 12, 2023</button>
                                    </div>
                                </div>
                                <div class="tabal_row">
                                    <div class="tabal_body">
                                        <p>Total :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <button>$1,994.00</button>
                                    </div>
                                </div>
                                <div class="tabal_row">
                                    <div class="tabal_body">
                                        <p>Product name :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <button>Panoptica</button>
                                    </div>
                                </div>
                                <div class="tabal_row">
                                    <div class="tabal_body">
                                        <p>Product tenure :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <button>3 Months</button>
                                    </div>
                                </div>
                                <div class="tabal_row border-0">
                                    <div class="tabal_body">
                                        <p>Next billing date :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <button>July 12, 2023</button>
                                    </div>
                                </div>
                            </div>
                            <div class="billing_information">
                                <h3 class="thank_u_page_subheading">Billing information</h3>
                                <div class="tabal_row">
                                    <div class="tabal_body">
                                        <p>Company name: </p>
                                    </div>
                                    <div class="tabal_body">
                                        <p class="tabal_inner_para">Cisco Technology Company</p>
                                    </div>
                                </div>
                                <div class="tabal_row">
                                    <div class="tabal_body">
                                        <p>Full name :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <p class="tabal_inner_para">Sigurd Connelly</p>
                                    </div>
                                </div>
                                <div class="tabal_row">
                                    <div class="tabal_body">
                                        <p>Email id :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <p class="tabal_inner_para">Lenny.Roob94@hotmail.com</p>
                                    </div>
                                </div>
                                <div class="tabal_row">
                                    <div class="tabal_body">
                                        <p>Contact no :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <p class="tabal_inner_para">6655443377</p>
                                    </div>
                                </div>
                                <div class="tabal_row border-0">
                                    <div class="tabal_body">
                                        <p>Billing address :</p>
                                    </div>
                                    <div class="tabal_body">
                                        <p class="tabal_inner_para">834 Pallet Street</p>
                                        <p class="tabal_inner_para">West Nyack</p>
                                        <p class="tabal_inner_para">New York</p>
                                        <p class="tabal_inner_para">United States</p>
                                        <p class="tabal_inner_para">10994  </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div class="col-md-5">
                            <div class="billing_summary">
                                <h3 class="thank_u_page_subheading">Billing summary</h3>
                                <h2 class="thank_u_page_heading">Panoptica - The Secure Application Cloud</h2>
                                <div class="billing_summary_tabal">
                                    <div class="billing_summary_tabal_inner">
                                        <p>Subtotal:</p>
                                        <p>$1,994.00</p>
                                    </div>
                                    <div class="billing_summary_tabal_inner">
                                        <p>Discount</p>
                                        <p>-$49.99</p>
                                    </div>
                                    <div class="billing_summary_tabal_inner p-0">
                                        <p>Tax:</p>
                                        <p>+$34.99</p>
                                    </div>
                                </div>
                                <div class="billing_summary_total">
                                    <p>Total:</p>
                                    <p>$1,979.00</p>
                                </div>
                            </div>
                            <div class="payment_method">
                                <h3 class="thank_u_page_subheading">Payment method</h3>
                                <div class="payment_method_inner">
                                    <div class="d-flex">
                                        <img src="/img/visa-logo.svg" alt="" class="mr-2"/>
                                            <p>ending with - 2076</p>
                                    </div>
                                    <div>
                                        <span>$1,979.00</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Orderdetails
