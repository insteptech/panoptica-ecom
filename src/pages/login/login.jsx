import React from 'react'
import { Field, Form } from 'react-final-form'

function Login() {
    const handleSubmit = (values) => {
        console.log(values)
    }
    const validate = (values) => {
        let errors = {}
        let emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g
        if (!values?.email) {
            errors['email'] = "required"
        }
        if (!values?.password) {
            errors['password'] = "required"
        }
        if(values?.email && !emailRegex.test(values.email)){
            errors[`email`] = 'Enter a valid email'
        }
        console.log(errors)
        return errors
    }
    return (
        <div class="container">
            <div class="row">
                <div class="col-md-12 col-lg-7">
                    <div class="ecom_top_sidebar_account_section">
                        <div class="gloab">

                            <div class="globe_img">
                                <img src="/img/global.svg" alt="" />
                            </div>
                            <div class="my-2">
                                <span class="us">US</span>
                                <span>EN</span>
                            </div>
                        </div>
                        <div class="cisco_logo">
                            <img src="/img/Cisco-Logo-PNG@ZEEVECTOR 1.svg" alt="" />
                        </div>
                        <h3 class="ecom_subheading">Log in</h3>
                        <Form
                            onSubmit={handleSubmit}
                            validate={validate}
                            initialValues={{ email: "", password: "" }}
                            render={() => (
                                <>
                                    <div class="input_form_group">
                                        {/* <form> */}
                                        <div class="floating_labal">
                                            <div class="form-group">
                                                <Field name="email">
                                                    {({ input, meta }) => (
                                                        <>
                                                            <input {...input} type="email" id="input-name" name="name" placeholder=" " />
                                                            <label for="input-name">Email</label>
                                                        </>
                                                    )}
                                                </Field>
                                            </div>
                                        </div>
                                        <div class="floating_labal">
                                            <div class="form-group">
                                                <Field name="password">
                                                    {({ input, meta }) => (
                                                        <>
                                                            <input {...input} type="password" id="input-name" name="name" placeholder=" " />
                                                            <label for="input-name">Password</label>
                                                        </>
                                                    )}
                                                </Field>
                                            </div>
                                        </div>
                                        {/* </form> */}
                                    </div>
                                    <div class="register_section">
                                        <div class="d-flex justify-content-between">
                                            <a href="/" class="forgot_password">Forgot Password?</a>
                                            <a href="/" class="help">Help</a>
                                        </div>
                                        <a href="/" class="Unblock_account">Unblock account?</a>
                                        <button type="submit" className="register_btn w-100">Log in</button>
                                        {/* <a href="/" class="register_btn">Log in</a> */}
                                        <a href="/signup" class="Already_account">Don't have an account?   <span>Sign up</span> </a>
                                    </div>
                                </>
                            )}
                        />


                    </div>
                    <div class="more_option">
                        <div class="row justify-content-center">
                            <a href="/">Contact support</a>
                            <a href="/">Privacy</a>
                            <a href="/">Terms & Conditions</a>
                            <a href="/">Cookies Trademarks</a>
                        </div>
                    </div>
                </div>
                <div class="col-md-12 col-lg-5" >
                    <div class="ecom-left_sidebar">
                        <div class="confermation_form">
                            <h3>Panoptica</h3>
                            <p>The Cisco Secure Application Cloud</p>
                            <div class="confermation_form_submission">
                                <div class="accordion accordian_tab" id="accordionExample">
                                    <div class="card">
                                        <div class="card_header" id="headingOne">
                                            <h2 class="mb-0">
                                                <button class="  btn-block accordian_btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                    <div class="accordian_body_selected">
                                                        <span class="slect_month">1  Month <img src="/img/arrow-down.svg" alt="" id="arrow" /></span>
                                                        <span class="price">$5 ,981.00</span>
                                                    </div>
                                                </button>
                                            </h2>
                                        </div>

                                        <div id="collapseOne" class="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                            <div class="card_body">

                                                <div class="accordian_body">
                                                    <span class="slect_month">3  Month</span>
                                                    <span class="price">$5 ,981.00</span>
                                                </div>
                                                <div class="accordian_body">
                                                    <span class="slect_month">6  Month</span>
                                                    <span class="price"> <del>$23,928.00</del>$19,142.40</span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                </div>

                                <div class="subtotal">
                                    <p>Subtotal</p>
                                    <span>$1,994.00</span>
                                </div>
                                <div class="total">
                                    <p>Total</p>
                                    <span>$1,994.00</span>
                                </div>
                                <div class="change_plan">
                                    <a href="/">Change Plan</a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Login
