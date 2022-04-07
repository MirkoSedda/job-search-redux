import React from 'react'
import { Container, Row, Col, Form } from 'react-bootstrap'
import JobResult from './JobResult'
import uniqid from 'uniqid'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { fetchJobs } from '../redux/actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    fetchJobs: (url, query) => dispatch(fetchJobs(url, query))
})

class Search extends React.Component {

    state = {
        query: '',
        jobs: []
    }

    url = 'https://strive-jobs-api.herokuapp.com/jobs?search='


    handleChange = (e) => {
        this.setState({ query: e.target.value })
    }

    handleSubmit = async (e) => {
        e.preventDefault()
        this.props.fetchJobs(this.url + this.state.query)
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
                            this.props.jobs.items.map(job => <JobResult key={uniqid()} data={job} />)
                        }
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Search)