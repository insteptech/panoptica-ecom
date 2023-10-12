import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'

function Currentplan() {
    const navigate = useNavigate()
    const [step, setStep] = useState(1)

    const handleLogout = ()=>{
        navigate("/login")
    }
    return (
        <section class="ecom_current_plan_section ecom_header">
            <div class="container">
                <div class="tab current_plan_tab">
                    <button class={`tablinks ${step===1 && 'active'}`} onClick={() => setStep(1)}><img src="/img/biling-logo.svg" alt="" /> Plan and billing</button>
                    <button class={`tablinks ${step===2 && 'active'}`} onClick={() => setStep(2)}> <img src="/img/change-password.svg" alt="" /> Change password</button>
                    <button class="tablinks" onClick={handleLogout}><img src="/img/log-out.svg" alt="" /> <a>Logout</a></button>
                </div>
                <div class="current_subscription_plan">
                    {step === 1 &&
                        <div class="row">
                            <div class="col-md-5 d-flex">
                                <div class="current_subscription_plan_inner">
                                    <div class="coloum_top_border">
                                        <p>Current subscription plan</p>
                                    </div>
                                    <div class="panoptica_current">
                                        <img src="/img/panoptica-logo.svg" alt="" />
                                        <h3 class="panoptica_profesnol_subheading">Panoptica - Professional</h3>
                                        <p class="product_or_nodes">Protects up to 30 nodes, and up to 3 clusters</p>
                                    </div>
                                    <div class="order_table">
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
                                                <p>Product tenure :</p>
                                            </div>
                                            <div class="tabal_body">
                                                <button>3 Months</button>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="manage_acc">
                                        <a href="/" class="manage_account">Manage account</a>

                                    </div>
                                    <a href="/" class="change_plan_for_here">Change plan</a>
                                    <div class="plan_benifit">
                                        <span class="liners">Plan benefits</span>
                                    </div>
                                    <div class="all_node_and_cluster">
                                        <span><img src="/img/arrow-right.svg" alt="" /> 30 Nodes</span>
                                        <span><img src="/img/arrow-right.svg" alt="" /> 30 Nodes</span>
                                        <span><img src="/img/arrow-right.svg" alt="" /> 30 Nodes</span>
                                    </div>
                                </div>
                            </div>
                            <div class="col-md-7">
                                <div class="added_card">
                                    <div class="next_billing">
                                        <p>Next billing on July 12, 2023</p>
                                        <div class="d-flex">
                                            <p>Auto renewal</p>
                                            <div class="custom-control custom-switch">
                                                <input type="checkbox" class="custom-control-input" id="customSwitch1" />
                                                <label class="custom-control-label" for="customSwitch1"></label>
                                            </div>
                                        </div>
                                    </div>
                                    <div class="all_total">
                                        <span>$1,994.00</span>
                                    </div>
                                    <div class="add_card">
                                        <span>Added card</span>
                                        <div class="payment_method_inner">
                                            <div class="d-flex">
                                                <img src="/img/visa-logo.svg" alt="" class="mr-2" />
                                                <p>ending with - 2076</p>
                                            </div>
                                            <div>
                                                <button>Manage payment</button>

                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div class="upgrade_yourself">
                                    <div class="row">
                                        <div class="col-md-10">
                                            <p>Upgrade yourself with us on Enterprise? </p>
                                            <div class=" panoptica_enterprice ">
                                                <div class="d-flex">
                                                    <img src="/img/panoptica-small-logo.svg" alt="" />
                                                    <h3 class="panoptica_enterprice_heading">Panoptica - Enterprise</h3>
                                                </div>
                                                <p>Ut ea rem dolor voluptate repudiandae. Aut quo voluptates et nesciunt voluptas nam.</p>
                                            </div>
                                            <div class="you_will_get">
                                                <p class="para">You’ll get</p>
                                                <div class="d-flex justify-content-between">
                                                    <p class="custom_nodes"><img src="/img/arrow-right.svg" alt="" class="mr-2" />Custom Nodes</p>
                                                    <p class="custom_nodes"><img src="/img/arrow-right.svg" alt="" class="mr-2" />Custom Clusters</p>
                                                    <p class="custom_nodes"><img src="/img/arrow-right.svg" alt="" class="mr-2" />Dedicated Success Manager</p>
                                                </div>
                                            </div>
                                            <button class="Upgrade_btn button">Upgrade</button>


                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    }
                    {step === 2 &&
                        <div class="container">
                            <div class="row justify-content-center">
                                <div class="col-md-8">
                                    <div class="change_your_password">
                                        <h2 class="change_your_password_heading">Change Your Password</h2>
                                        <p class="change_your_password_para">Change the Panoptica Password for <b> Lenny.Roob94@hotmail.com</b> here. Please use a strong password with minimum of 8 characters. </p>
                                        <div class="row justify-content-center">
                                            <div class="col-md-8">
                                                <div class="input_form_group">
                                                    <form>
                                                        <div class="floating_labal">
                                                            <div class="form-group">
                                                                <input type="password" id="input-name" name="name" placeholder=" " />
                                                                <label for="input-name">Old Password</label>
                                                            </div>
                                                        </div>
                                                        <div class="floating_labal">
                                                            <div class="form-group">
                                                                <input type="password" id="input-name" name="name" placeholder=" " />
                                                                <label for="input-name">New Password</label>
                                                            </div>
                                                        </div>
                                                        <div class="floating_labal m-0">
                                                            <div class="form-group">
                                                                <input type="password" id="input-name" name="name" placeholder=" " />
                                                                <label for="input-name">Confirm New Password</label>
                                                            </div>
                                                        </div>
                                                    </form>
                                                </div>
                                                <div class="d-flex justify-content-between forgot_password_or_help">
                                                    <a href="/">Forgot Password?</a>
                                                    <a href="/">Help</a>
                                                </div>
                                                <div class="d-flex justify-content-center">
                                                    <button class="click_to_change_password">Change</button></div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                    }
                    <div id="tab3" class="tabcontent">

                    </div>
                </div>
            </div>
        </section>
    )
}

export default Currentplan
