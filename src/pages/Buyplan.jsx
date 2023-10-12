import React, { useState } from 'react'
import { Form } from 'react-final-form'
import Billingaddress from './buyplan/billingaddress'
import SelectPlan from './signup/signupstep1'
import Invoice from './buyplan/invoice'

function Buyplan() {
    const [step, setStep] = useState(1)

    return (
        <div>
            <>
                {step === 0 && <SelectPlan setStep={setStep} />}
                {step === 1 && <Billingaddress setStep={setStep} />}
                {step === 2 && <Invoice/>}
            </>
        </div>
    )
}

export default Buyplan
