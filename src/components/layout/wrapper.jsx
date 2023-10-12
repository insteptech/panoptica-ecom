import React from 'react'
import Navbar from '../Navbar'
import { Col, Row } from 'react-bootstrap'

function Wrapper() {
    return (
        <div>
            <Row>
                <Col>
                    <Navbar />
                </Col>
            </Row>
        </div>
    )
}

export default Wrapper
