import React from 'react'
import { Modal } from 'react-bootstrap'

function UpgradeModal(props) {
    return (
        <div class="container">
            <Modal
                {...props}
                size="lg"
                aria-labelledby="contained-modal-title-vcenter"
                centered
            >
                <Modal.Body>
                    <div class="row">
                        <div class="col-md-7">
                            <div class="ecom_top_sidebar_account_section">
                                <h3 class="ecom_pop_up_subheading">Don’t Feel Insecure!</h3>
                                <p class="popup-para">Policy-based security for your dev environment is just a few clicks away.</p>
                                <div class="input_form_group">
                                    <form>
                                        <div class="floating_labal">
                                            <div class="form-group">
                                                <input type="First-Name" id="input-name" name="name" placeholder=" " />
                                                <label for="input-name">First Name</label>
                                            </div>
                                        </div>
                                        <div class="floating_labal">
                                            <div class="form-group">
                                                <input type="Last-Name" id="input-name" name="name" placeholder=" " />
                                                <label for="input-name">Last Name</label>
                                            </div>
                                        </div>
                                        <div class="floating_labal">
                                            <div class="form-group">
                                                <input type="email" id="input-name" name="name" placeholder=" " />
                                                <label for="input-name">Email</label>
                                            </div>
                                        </div>
                                        <div class="floating_labal">
                                            <div class="form-group">
                                                <input type="role" id="input-name" name="name" placeholder=" " />
                                                <label for="input-name">Title/Role</label>
                                            </div>
                                        </div>
                                    </form>
                                </div>
                                <div class="register_section">


                                    <a href="/" class="register_btn">Submit</a>



                                </div>
                                <div class="d-flex justify-content-between">
                                    <span class="pop-up-span"><img src="/img/arrow-right.svg" alt="" /> No creadit card required</span>
                                    <span class="pop-up-span"><img src="/img/arrow-right.svg" alt="" /> 5 minute interactive demo</span>
                                </div>

                            </div>

                        </div>
                        <div class="col-md-5" >
                            <img src="/img/Frame 1000006272.png" alt="" class="img-fluid" />
                        </div>
                    </div>
                </Modal.Body>
            </Modal>
        </div>
    )
}

export default UpgradeModal
