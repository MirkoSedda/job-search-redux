import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import JobResult from './JobResult'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'

export default class Search extends React.Component {

    state = {
        query: '',
        jobs: []
    }

    baseEndpoint = 'https://strive-jobs-api.herokuapp.com/jobs?search='


    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        const response = await fetch(this.baseEndpoint + this.state.query + '&limit=20')
        if (!response.ok) {
            alert('Error fetching results')
            return
        }
        const { data } = await response.json()
        this.setState({ jobs: data })
    }

    render() {
        return (
            <Container>
                <Row>
                    <Col xs={10} className='mx-auto my-3'>
                        <h1>Remote Jobs Search</h1>
                        <Link to="/favourites" className="btn btn-primary">Favourites</Link>
                    </Col>
                    <Col xs={10} className='mx-auto'>
                        <Form onSubmit={this.handleSubmit}>
                            <Form.Control type="search" value={this.state.query} onChange={this.handleChange} placeholder="type and press Enter" />
                        </Form>
                    </Col>
                    <Col xs={10} className='mx-auto mb-5'>
                        {
                            this.state.jobs.map(jobData => <JobResult key={uniqid()} data={jobData} />)
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}