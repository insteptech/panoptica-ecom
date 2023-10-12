import React, { useState } from 'react'
import { Form } from 'react-final-form'
import Signupstep1 from './signup/signupstep1'
import Signupstep2 from './signup/signupstep2'
import Signupstep3 from './signup/signupstep3'

function Signup() {
    const [step,setStep] = useState(0)

    const handleSubmit = (values) => {
        console.log(values, 'uiwdhuw')
    }

    return (
        <div>
            <Form
                onSubmit={handleSubmit}
                render={({ values }) => (
                    <>
                    {console.log(values,'cweioh')}
                    {/* {step===0 && <Signupstep1 setStep={setStep}/>} */}
                    {step===0 && <Signupstep2 setStep={setStep}/>}
                    {step===1 && <Signupstep3 setStep={setStep}/>}
                    </>
                )}
            />
        </div>
    )
}

export default Signup
