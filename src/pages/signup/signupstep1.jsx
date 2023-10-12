import React from 'react'
import { Field, Form } from 'react-final-form'
import { plans } from '../../utils/utils'

function SelectPlan(props) {
    const { setStep } = props

    const handleSubmit = (values) => {
        console.log(values)
    }

    return (
        <div className="body-background-color">
            <section className="ecom_header">
                <div className="plane_detail">
                    <div className="container">
                        <div className="row">
                            <div className="col-lg-7 col-md-12">
                                <div className="ecom_top_sidebar">
                                    <h1 className="sec_heading">Panoptica-The Cisco Secure Application Cloud</h1>
                                    <div className="Discription">
                                        <h3 className="subheading_discription">Discription</h3>
                                        <p className="sec_paragraph">Robust security from CI/CD to runtime providing a single pane of glass for Container, Kubernetes, Service Mesh, & API security. If you are a Security Architect, SRE or DevOps professional interested in application security, buy Panoptica with just a few clicks. Simply connect to your Kubernetes cluster, DevOps toolchain, or API gateway to get started.</p>
                                        <p className="sec_paragraph">Panoptica Pro further extends Cisco’s Secure Application Cloud’s protection to 30 nodes and three clusters, so you can secure your development, staging, and production environments from CI/CD to runtime. You’ll also get more robust support, including a dedicated Slack channel and email requests.</p>
                                    </div>
                                    <Form
                                        onSubmit={handleSubmit}
                                        render={({ values }) => (
                                            <div className="ecom_plans">
                                                <h2 className="sub_heading">Plan. Which is best for you?</h2>
                                                {plans?.map((item, index) => (
                                                    <div className="time_duration">
                                                        <div className="Month">
                                                            <input type="radio" name="size" id="small" className="form__radio-input" value={index + 1} />
                                                            <label className="form__label-radio" for="small">
                                                                <span className="form__radio-button"></span>
                                                            </label>
                                                            <div className="one_month">
                                                                <p>{item?.timePeriod}</p>
                                                                <span>{item?.description}</span>
                                                            </div>
                                                        </div>
                                                        <div className="cost">
                                                            <p>{item?.beforeDiscountPrice && <del>{item?.beforeDiscountPrice}</del>}{item?.price}</p>
                                                        </div>
                                                    </div>
                                                ))}
                                            </div>
                                        )}
                                    />
                                    <div className="choosing_a_plane">
                                        <div className="buy_now">
                                            <button onClick={() => { setStep(1) }}>Buy Now</button>
                                        </div>
                                        <div className="plane_feature">
                                            <div className="see_feature">
                                                <p>Need help choosing a plan?</p>
                                                <img src="/img/Vector (2).svg" alt="" /></div>
                                            <span>Explore the differences in plan and features.</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="col-md-5 position_unset">
                                <div className="ecom-left_sidebar">
                                </div>
                            </div>
                        </div>

                    </div>
                </div>

            </section>
        </div>
    )
}

export default SelectPlan
