import React from 'react'
import { Col, Row } from 'react-bootstrap'

const ContactItem = ({item}) => {
  
  return (
    <div>
      <Row>
        <Col lg={2}>
          <img width={70} src="https://knowyourheart.science//app/themes/ipcdr/images/unknown-user.png" alt="" />
        </Col>
        <Col lg={10}>
          <div>{item.name}</div>
          <div>{item.phoneNumber}</div>
        </Col>
      </Row>
    </div>
  )
}

export default ContactItem
