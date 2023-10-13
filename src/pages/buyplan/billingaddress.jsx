import React, { useState } from 'react'
import { Field, Form } from 'react-final-form'
import { plans } from '../../utils/utils'
import UpgradeModal from '../modals/upgrade'

function Billingaddress({setStep}) {
    const [changePlanState, setChangePlanState] = useState(false)
    const [plansToDisplay, setPlansToDisplay] = useState("")
    const [promoState, setPromoState] = useState("")
    const [show, setShow] = useState(false)
    const promo = "PROMO"

    const handleSubmit = (values) => {
        console.log(values)
    }

    const handlePromoChange = (e) => {
        setPromoState(e.toUpperCase())
    }

    const intialvalues = () => {
        let initialValues = {}

        return initialValues
    }

    const validate = (values) => {
        let errors = {};


        return errors;
    }
    return (
        <section className="ecom_header ecom_flex_beetween_colom_or_sticky_bar">
            <div className="plane_detail">
                <div className="container">
                    <Form
                        onSubmit={handleSubmit}
                        initialValues={intialvalues}
                        validate={validate}
                        render={() => (
                            <div className="row ">
                                <div className="col-lg-7 col-md-12">
                                    <div className="ecom_top_sidebar">
                                        <div className="gloab">

                                            <div className="globe_img">
                                                <img src="/img/global.svg" alt="" />
                                            </div>
                                            <div className="my-2">
                                                <span className="us">US</span>
                                                <span>EN</span>
                                            </div>
                                        </div>
                                        <div className="cisco_logo">
                                            <img src="/img/Cisco-Logo-PNG@ZEEVECTOR 1.svg" alt="" />
                                        </div>
                                        <h3 className="ecom_subheading">Create Account</h3>
                                        <div className="input_form_group">
                                            <form>
                                                <div className="floating_labal d-flex justify-content-between">
                                                    <div className="form-group  w-51">
                                                        <Field name="firstName">
                                                            {({ input, meta }) => (
                                                                <>
                                                                    <input {...input} type="text" id="input-name" name="name" placeholder=" " className="" />
                                                                    <label for="input-name">First Name</label>
                                                                </>
                                                            )}
                                                        </Field>
                                                    </div>
                                                    <div className="form-group  w-51">
                                                        <Field name="lastName">
                                                            {({ input, meta }) => (
                                                                <>
                                                                    <input {...input} type="text" id="input-name" name="name" placeholder=" " className="" />
                                                                    <label for="input-name">Last Name</label>
                                                                </>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="floating_labal d-flex justify-content-between">
                                                    <div className="form-group w-40">
                                                        <Field name="phoneNumber">
                                                            {({ input, meta }) => (
                                                                <>
                                                                    <input {...input} type="number" id="input-name" name="name" placeholder=" " className="" />
                                                                    <label for="input-name">Phone Number</label>
                                                                </>
                                                            )}
                                                        </Field>
                                                    </div>
                                                    <div className="form-group w-60">
                                                        <Field name="companyName">
                                                            {({ input, meta }) => (
                                                                <>
                                                                    <input {...input} type="text" id="input-name" name="name" placeholder=" " className="w-100" />
                                                                    <label for="input-name">Company/Organization Name</label>
                                                                </>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="floating_labal">
                                                    <Field name="country">
                                                        {({ input, meta }) => (
                                                            <>
                                                                <select {...input} id='country_select' name='country'>
                                                                    <option value="">Select country</option>
                                                                    <option value="AF">Afghanistan</option>
                                                                    <option value="AX">Åland Islands</option>
                                                                    <option value="AL">Albania</option>
                                                                    <option value="DZ">Algeria</option>
                                                                    <option value="AS">American Samoa</option>
                                                                    <option value="AD">Andorra</option>
                                                                    <option value="AO">Angola</option>
                                                                    <option value="AI">Anguilla</option>
                                                                    <option value="AQ">Antarctica</option>
                                                                    <option value="AG">Antigua and Barbuda</option>
                                                                    <option value="AR">Argentina</option>
                                                                    <option value="AM">Armenia</option>
                                                                    <option value="AW">Aruba</option>
                                                                    <option value="AU">Australia</option>
                                                                    <option value="AT">Austria</option>
                                                                    <option value="AZ">Azerbaijan</option>
                                                                    <option value="BS">Bahamas</option>
                                                                    <option value="BH">Bahrain</option>
                                                                    <option value="BD">Bangladesh</option>
                                                                    <option value="BB">Barbados</option>
                                                                    <option value="BY">Belarus</option>
                                                                    <option value="BE">Belgium</option>
                                                                    <option value="BZ">Belize</option>
                                                                    <option value="BJ">Benin</option>
                                                                    <option value="BM">Bermuda</option>
                                                                    <option value="BT">Bhutan</option>
                                                                    <option value="BO">Bolivia, Plurinational State of</option>
                                                                    <option value="BQ">Bonaire, Sint Eustatius and Saba</option>
                                                                    <option value="BA">Bosnia and Herzegovina</option>
                                                                    <option value="BW">Botswana</option>
                                                                    <option value="BV">Bouvet Island</option>
                                                                    <option value="BR">Brazil</option>
                                                                    <option value="IO">British Indian Ocean Territory</option>
                                                                    <option value="BN">Brunei Darussalam</option>
                                                                    <option value="BG">Bulgaria</option>
                                                                    <option value="BF">Burkina Faso</option>
                                                                    <option value="BI">Burundi</option>
                                                                    <option value="KH">Cambodia</option>
                                                                    <option value="CM">Cameroon</option>
                                                                    <option value="CA">Canada</option>
                                                                    <option value="CV">Cape Verde</option>
                                                                    <option value="KY">Cayman Islands</option>
                                                                    <option value="CF">Central African Republic</option>
                                                                    <option value="TD">Chad</option>
                                                                    <option value="CL">Chile</option>
                                                                    <option value="CN">China</option>
                                                                    <option value="CX">Christmas Island</option>
                                                                    <option value="CC">Cocos (Keeling) Islands</option>
                                                                    <option value="CO">Colombia</option>
                                                                    <option value="KM">Comoros</option>
                                                                    <option value="CG">Congo</option>
                                                                    <option value="CD">Congo, the Democratic Republic of the</option>
                                                                    <option value="CK">Cook Islands</option>
                                                                    <option value="CR">Costa Rica</option>
                                                                    <option value="CI">Côte d'Ivoire</option>
                                                                    <option value="HR">Croatia</option>
                                                                    <option value="CU">Cuba</option>
                                                                    <option value="CW">Curaçao</option>
                                                                    <option value="CY">Cyprus</option>
                                                                    <option value="CZ">Czech Republic</option>
                                                                    <option value="DK">Denmark</option>
                                                                    <option value="DJ">Djibouti</option>
                                                                    <option value="DM">Dominica</option>
                                                                    <option value="DO">Dominican Republic</option>
                                                                    <option value="EC">Ecuador</option>
                                                                    <option value="EG">Egypt</option>
                                                                    <option value="SV">El Salvador</option>
                                                                    <option value="GQ">Equatorial Guinea</option>
                                                                    <option value="ER">Eritrea</option>
                                                                    <option value="EE">Estonia</option>
                                                                    <option value="ET">Ethiopia</option>
                                                                    <option value="FK">Falkland Islands (Malvinas)</option>
                                                                    <option value="FO">Faroe Islands</option>
                                                                    <option value="FJ">Fiji</option>
                                                                    <option value="FI">Finland</option>
                                                                    <option value="FR">France</option>
                                                                    <option value="GF">French Guiana</option>
                                                                    <option value="PF">French Polynesia</option>
                                                                    <option value="TF">French Southern Territories</option>
                                                                    <option value="GA">Gabon</option>
                                                                    <option value="GM">Gambia</option>
                                                                    <option value="GE">Georgia</option>
                                                                    <option value="DE">Germany</option>
                                                                    <option value="GH">Ghana</option>
                                                                    <option value="GI">Gibraltar</option>
                                                                    <option value="GR">Greece</option>
                                                                    <option value="GL">Greenland</option>
                                                                    <option value="GD">Grenada</option>
                                                                    <option value="GP">Guadeloupe</option>
                                                                    <option value="GU">Guam</option>
                                                                    <option value="GT">Guatemala</option>
                                                                    <option value="GG">Guernsey</option>
                                                                    <option value="GN">Guinea</option>
                                                                    <option value="GW">Guinea-Bissau</option>
                                                                    <option value="GY">Guyana</option>
                                                                    <option value="HT">Haiti</option>
                                                                    <option value="HM">Heard Island and McDonald Islands</option>
                                                                    <option value="VA">Holy See (Vatican City State)</option>
                                                                    <option value="HN">Honduras</option>
                                                                    <option value="HK">Hong Kong</option>
                                                                    <option value="HU">Hungary</option>
                                                                    <option value="IS">Iceland</option>
                                                                    <option value="IN">India</option>
                                                                    <option value="ID">Indonesia</option>
                                                                    <option value="IR">Iran, Islamic Republic of</option>
                                                                    <option value="IQ">Iraq</option>
                                                                    <option value="IE">Ireland</option>
                                                                    <option value="IM">Isle of Man</option>
                                                                    <option value="IL">Israel</option>
                                                                    <option value="IT">Italy</option>
                                                                    <option value="JM">Jamaica</option>
                                                                    <option value="JP">Japan</option>
                                                                    <option value="JE">Jersey</option>
                                                                    <option value="JO">Jordan</option>
                                                                    <option value="KZ">Kazakhstan</option>
                                                                    <option value="KE">Kenya</option>
                                                                    <option value="KI">Kiribati</option>
                                                                    <option value="KP">Korea, Democratic People's Republic of</option>
                                                                    <option value="KR">Korea, Republic of</option>
                                                                    <option value="KW">Kuwait</option>
                                                                    <option value="KG">Kyrgyzstan</option>
                                                                    <option value="LA">Lao People's Democratic Republic</option>
                                                                    <option value="LV">Latvia</option>
                                                                    <option value="LB">Lebanon</option>
                                                                    <option value="LS">Lesotho</option>
                                                                    <option value="LR">Liberia</option>
                                                                    <option value="LY">Libya</option>
                                                                    <option value="LI">Liechtenstein</option>
                                                                    <option value="LT">Lithuania</option>
                                                                    <option value="LU">Luxembourg</option>
                                                                    <option value="MO">Macao</option>
                                                                    <option value="MK">Macedonia, the former Yugoslav Republic of</option>
                                                                    <option value="MG">Madagascar</option>
                                                                    <option value="MW">Malawi</option>
                                                                    <option value="MY">Malaysia</option>
                                                                    <option value="MV">Maldives</option>
                                                                    <option value="ML">Mali</option>
                                                                    <option value="MT">Malta</option>
                                                                    <option value="MH">Marshall Islands</option>
                                                                    <option value="MQ">Martinique</option>
                                                                    <option value="MR">Mauritania</option>
                                                                    <option value="MU">Mauritius</option>
                                                                    <option value="YT">Mayotte</option>
                                                                    <option value="MX">Mexico</option>
                                                                    <option value="FM">Micronesia, Federated States of</option>
                                                                    <option value="MD">Moldova, Republic of</option>
                                                                    <option value="MC">Monaco</option>
                                                                    <option value="MN">Mongolia</option>
                                                                    <option value="ME">Montenegro</option>
                                                                    <option value="MS">Montserrat</option>
                                                                    <option value="MA">Morocco</option>
                                                                    <option value="MZ">Mozambique</option>
                                                                    <option value="MM">Myanmar</option>
                                                                    <option value="NA">Namibia</option>
                                                                    <option value="NR">Nauru</option>
                                                                    <option value="NP">Nepal</option>
                                                                    <option value="NL">Netherlands</option>
                                                                    <option value="NC">New Caledonia</option>
                                                                    <option value="NZ">New Zealand</option>
                                                                    <option value="NI">Nicaragua</option>
                                                                    <option value="NE">Niger</option>
                                                                    <option value="NG">Nigeria</option>
                                                                    <option value="NU">Niue</option>
                                                                    <option value="NF">Norfolk Island</option>
                                                                    <option value="MP">Northern Mariana Islands</option>
                                                                    <option value="NO">Norway</option>
                                                                    <option value="OM">Oman</option>
                                                                    <option value="PK">Pakistan</option>
                                                                    <option value="PW">Palau</option>
                                                                    <option value="PS">Palestinian Territory, Occupied</option>
                                                                    <option value="PA">Panama</option>
                                                                    <option value="PG">Papua New Guinea</option>
                                                                    <option value="PY">Paraguay</option>
                                                                    <option value="PE">Peru</option>
                                                                    <option value="PH">Philippines</option>
                                                                    <option value="PN">Pitcairn</option>
                                                                    <option value="PL">Poland</option>
                                                                    <option value="PT">Portugal</option>
                                                                    <option value="PR">Puerto Rico</option>
                                                                    <option value="QA">Qatar</option>
                                                                    <option value="RE">Réunion</option>
                                                                    <option value="RO">Romania</option>
                                                                    <option value="RU">Russian Federation</option>
                                                                    <option value="RW">Rwanda</option>
                                                                    <option value="BL">Saint Barthélemy</option>
                                                                    <option value="SH">Saint Helena, Ascension and Tristan da Cunha</option>
                                                                    <option value="KN">Saint Kitts and Nevis</option>
                                                                    <option value="LC">Saint Lucia</option>
                                                                    <option value="MF">Saint Martin (French part)</option>
                                                                    <option value="PM">Saint Pierre and Miquelon</option>
                                                                    <option value="VC">Saint Vincent and the Grenadines</option>
                                                                    <option value="WS">Samoa</option>
                                                                    <option value="SM">San Marino</option>
                                                                    <option value="ST">Sao Tome and Principe</option>
                                                                    <option value="SA">Saudi Arabia</option>
                                                                    <option value="SN">Senegal</option>
                                                                    <option value="RS">Serbia</option>
                                                                    <option value="SC">Seychelles</option>
                                                                    <option value="SL">Sierra Leone</option>
                                                                    <option value="SG">Singapore</option>
                                                                    <option value="SX">Sint Maarten (Dutch part)</option>
                                                                    <option value="SK">Slovakia</option>
                                                                    <option value="SI">Slovenia</option>
                                                                    <option value="SB">Solomon Islands</option>
                                                                    <option value="SO">Somalia</option>
                                                                    <option value="ZA">South Africa</option>
                                                                    <option value="GS">South Georgia and the South Sandwich Islands</option>
                                                                    <option value="SS">South Sudan</option>
                                                                    <option value="ES">Spain</option>
                                                                    <option value="LK">Sri Lanka</option>
                                                                    <option value="SD">Sudan</option>
                                                                    <option value="SR">Suriname</option>
                                                                    <option value="SJ">Svalbard and Jan Mayen</option>
                                                                    <option value="SZ">Swaziland</option>
                                                                    <option value="SE">Sweden</option>
                                                                    <option value="CH">Switzerland</option>
                                                                    <option value="SY">Syrian Arab Republic</option>
                                                                    <option value="TW">Taiwan, Province of China</option>
                                                                    <option value="TJ">Tajikistan</option>
                                                                    <option value="TZ">Tanzania, United Republic of</option>
                                                                    <option value="TH">Thailand</option>
                                                                    <option value="TL">Timor-Leste</option>
                                                                    <option value="TG">Togo</option>
                                                                    <option value="TK">Tokelau</option>
                                                                    <option value="TO">Tonga</option>
                                                                    <option value="TT">Trinidad and Tobago</option>
                                                                    <option value="TN">Tunisia</option>
                                                                    <option value="TR">Turkey</option>
                                                                    <option value="TM">Turkmenistan</option>
                                                                    <option value="TC">Turks and Caicos Islands</option>
                                                                    <option value="TV">Tuvalu</option>
                                                                    <option value="UG">Uganda</option>
                                                                    <option value="UA">Ukraine</option>
                                                                    <option value="AE">United Arab Emirates</option>
                                                                    <option value="GB">United Kingdom</option>
                                                                    <option value="US">United States</option>
                                                                    <option value="UM">United States Minor Outlying Islands</option>
                                                                    <option value="UY">Uruguay</option>
                                                                    <option value="UZ">Uzbekistan</option>
                                                                    <option value="VU">Vanuatu</option>
                                                                    <option value="VE">Venezuela, Bolivarian Republic of</option>
                                                                    <option value="VN">Viet Nam</option>
                                                                    <option value="VG">Virgin Islands, British</option>
                                                                    <option value="VI">Virgin Islands, U.S.</option>
                                                                    <option value="WF">Wallis and Futuna</option>
                                                                    <option value="EH">Western Sahara</option>
                                                                    <option value="YE">Yemen</option>
                                                                    <option value="ZM">Zambia</option>
                                                                    <option value="ZW">Zimbabwe</option>
                                                                </select>
                                                            </>
                                                        )}
                                                    </Field>
                                                </div>
                                                <div className="floating_labal d-flex justify-content-between">
                                                    <div className="form-group w-60">
                                                        <Field name="state">
                                                            {({ input, meta }) => (
                                                                <>
                                                                    <input {...input} type="state" id="input-name" name="name" placeholder=" " />
                                                                    <label for="input-name">State</label>
                                                                </>
                                                            )}
                                                        </Field>
                                                    </div>
                                                    <div className="form-group w-40">
                                                        <Field name="pincode">
                                                            {({ input, meta }) => (
                                                                <>
                                                                    <input {...input} type="text" id="input-name" name="name" placeholder=" " />
                                                                    <label for="input-name">Zip/Postal</label>
                                                                </>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="floating_labal">
                                                    <div className="form-group">
                                                        <Field name="address">
                                                            {({ input, meta }) => (
                                                                <>
                                                                    <input {...input} type="address" id="input-name" name="name" placeholder=" " />
                                                                    <label for="input-name">Address</label>
                                                                </>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                                <div className="floating_labal">
                                                    <div className="form-group ">
                                                        <Field name="city">
                                                            {({ input, meta }) => (
                                                                <>
                                                                    <input {...input} type="city" id="input-name" name="name" placeholder=" " />
                                                                    <label for="input-name">City</label>
                                                                </>
                                                            )}
                                                        </Field>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </div>
                                    <div className="ecom_top_sidebar my-5">
                                        <h3 className="ecom_subheading">Payment</h3>
                                        {/* <div className="card-details-input-div">
                                            <input className="card-details-input" placeholder='Card Number' />
                                            <input className="card-details-input" placeholder='| MM/YY' />
                                            <input className="card-details-input" placeholder='| CVV' />
                                        </div> */}
                                        <div className="order_card_number">
                                            <div className="d-flex">
                                                <img src="/img/BASE.svg" alt="" />
                                                <input className="mx-3" placeholder='Card Number'/>
                                            </div>
                                            <div className="span_group">
                                                <span className="mx-1">|</span>
                                                <input placeholder='MM/YY' className='w-25'/>
                                                <span className="mx-1">|</span>
                                                <input placeholder='CVV' className='w-25'/>
                                            </div>
                                        </div>
                                        <div className="agree_click">
                                            <div className="mr-2">
                                                <input type="checkbox" />
                                            </div>
                                            <p>By submitting my order, I agree to the <span>Terms of Sale</span>  and the <span>Privacy Policy of Digital River Inc.</span> </p>
                                        </div>
                                        <div className="click_and_purchase">
                                            <a onClick={()=>setStep(2)} className="register_btn">Complete Purchase</a>
                                            <p>By clicking "Complete Purchase", I agree to Panoptica’s  Terms of Service and Privacy Policy, and my automatic renewal selection above.</p>
                                        </div>
                                    </div>
                                </div>
                                <div className="col-lg-5" >
                                    <div className="ecom-left_sidebar">
                                        <div className="confermation_form">
                                            <h3>Panoptica</h3>
                                            <p>The Cisco Secure Application Cloud</p>
                                            <div className="confermation_form_submission">
                                                <div className="accordion accordian_tab" id="accordionExample">
                                                    <div className="card">
                                                        <select className='accordian_btn'>
                                                            {plans?.map((item, index) => (
                                                                <option>
                                                                    <div className="accordian_body">
                                                                        <span className="slect_month">{item?.timePeriod}</span>
                                                                        <span className="price">{item?.beforeDiscountPrice && <del>{item?.beforeDiscountPrice}</del>}{item?.price}</span>
                                                                    </div>
                                                                </option>
                                                            ))}
                                                        </select>
                                                        {/* <div className="card_header" id="headingOne">
                                                            <h2 className="mb-0">
                                                                <button className="  btn-block accordian_btn " type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
                                                                    <div className="accordian_body_selected">
                                                                        <span className="slect_month">1  Month <img src="/img/arrow-down.svg" alt="" id="arrow" /></span>
                                                                        <span className="price">$5 ,981.00</span>
                                                                    </div>
                                                                </button>
                                                            </h2>
                                                        </div> */}
                                                        <div id="collapseOne" className="collapse " aria-labelledby="headingOne" data-parent="#accordionExample">
                                                            {/* <div className="card_body">

                                                                <div className="accordian_body">
                                                                    <span className="slect_month">3  Month</span>
                                                                    <span className="price">$5 ,981.00</span>
                                                                </div>
                                                                <div className="accordian_body">
                                                                    <span className="slect_month">6  Month</span>
                                                                    <span className="price"> <del>$23,928.00</del>$19,142.40</span>
                                                                </div>
                                                            </div> */}
                                                        </div>
                                                    </div>

                                                </div>
                                                <div className="incluid_other_item_in_plane">
                                                    <div className="liners">
                                                        <h6>Includes</h6>
                                                    </div>
                                                    <div className="include_plane">
                                                        <div className="d-flex plane_type">
                                                            <img src="/img/arrow-right.svg" alt="" />
                                                            <p>30 Nodes</p>
                                                        </div>
                                                        <div className="d-flex plane_type">
                                                            <img src="/img/arrow-right.svg" alt="" />
                                                            <p>3 Clusters</p>
                                                        </div>
                                                        <div className="d-flex plane_type">
                                                            <img src="/img/arrow-right.svg" alt="" />
                                                            <p>Unlimited Pods and Containers</p>
                                                        </div>
                                                    </div>
                                                    <div className="promo_code">
                                                        <div className="promocode_btn">
                                                            <input placeholder="Promo Code" onChange={(e) => handlePromoChange(e?.target?.value)} value={promoState} />
                                                            <button>Apply</button>
                                                        </div>
                                                        <div className="promocode_tax_subtotal_discount">
                                                            <div className="d-flex justify-content-between">
                                                                <p>Discount</p>
                                                                <p>-$49.99</p>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <p>Subtotal</p>
                                                                <p>$1,994.00</p>
                                                            </div>
                                                            <div className="d-flex justify-content-between">
                                                                <p>Tax</p>
                                                                <p>+$00.0</p>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>

                                                <div className="total">
                                                    <p>Total</p>
                                                    <span>$1,994.00</span>
                                                </div>
                                                <div className="change_plan">
                                                    <a onClick={() => { setChangePlanState(true) }} id="showplane">Change Plan</a>
                                                </div>
                                                {changePlanState && <>
                                                    <select onChange={(e) => {
                                                        if (e.target.value === "free") {
                                                            setShow(true)
                                                        }
                                                    }}>
                                                        <option>Choose plan</option>
                                                        <option value="free">Free</option>
                                                        <option value="enterprise">Enterprise</option>
                                                    </select>
                                                </>}
                                                <div id="showaccordian" style={{ display: 'none' }}>
                                                    <div className="accordion accordian_tab " id="accordionExample">
                                                        <div className="card">
                                                            <div className="card_header" id="headingTwo">
                                                                <h2 className="mb-0">
                                                                    <button className="  btn-block accordian_btn " type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="true" aria-controls="collapseTwo">
                                                                        <div className="accordian_body_selected">

                                                                            <span className="Chooseplane">Choose Plan</span>
                                                                        </div>
                                                                    </button>
                                                                </h2>
                                                            </div>

                                                            <div id="collapseTwo" className="collapse " aria-labelledby="headingTwo" data-parent="#accordionExample">
                                                                <div className="card_body">
                                                                    <div className="accordian_body">
                                                                        <span className="slect_month">Free</span>

                                                                    </div>
                                                                    <div className="accordian_body">
                                                                        <span className="slect_month">Enterprise</span>

                                                                    </div>
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>
                                                </div>
                                            </div>

                                        </div>
                                    </div>
                                </div>

                            </div>
                        )}
                    />
                </div>
            </div>
            <UpgradeModal show={show} onHide={() => setShow(false)} />
        </section>
    )
}

export default Billingaddress
