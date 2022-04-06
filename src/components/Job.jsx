import React from 'react'
import { Link } from 'react-router-dom'
import { Row, Col } from 'react-bootstrap'

const Job = ({ data }) => (
  <Row
    className="mx-0 mt-3 p-3 flex-column"
    style={{ border: '1px solid #00000033', borderRadius: 4 }}
  >
    <Col xs={12} className="mx-0 p-3">
      <Link to={`/${data.company_name}`}>{data.company_name}</Link>
    </Col>
    <Col xs={12} className="mx-0 p-3">
      {data.title}
    </Col>
    <Col xs={12} className="mx-0 p-3">
      {data.category}
    </Col>
  </Row>
)

export default Job
