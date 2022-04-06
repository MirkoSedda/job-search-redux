import { Component } from 'react'
import { Link } from 'react-router-dom'
import { Container, Row, Col, Form } from 'react-bootstrap'
import Job from './Job'

class MainSearch extends Component {
  state = {
    query: '',
    jobs: [],
  }

  baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='

  handleChange = (e) => {
    this.setState({ query: e.target.value })
  }

  handleSubmit = async (e) => {
    e.preventDefault()

    const response = await fetch(
      this.baseEndpoint + this.state.query + '&limit=20'
    )

    if (!response.ok) {
      alert('Error fetching results')
      return
    }

    const { data } = await response.json()
    console.log(data);

    this.setState({ jobs: data })
  }

  render() {
    return (
      <Container>
        <Row>
          <Col xs={10} className="mx-auto my-3 d-flex flex-row align-d-flex flex-row align-items-center">
            <h1>Remote Jobs Search</h1>
            <Link to="/favorites" className="btn btn-primary mx-auto">
              Go to favorites
            </Link>
          </Col>
          <Col xs={10} className="mx-auto">
            <Form onSubmit={this.handleSubmit}>
              <Form.Control
                type="search"
                value={this.state.query}
                onChange={this.handleChange}
                placeholder="type and press Enter"
              />
            </Form>

          </Col>
          <Col xs={10} className="mx-auto mb-5">
            {this.state.jobs.map((jobData) => (
              <Job key={jobData._id} data={jobData} />
            ))}
          </Col>
        </Row>
      </Container>
    )
  }
}

export default MainSearch
