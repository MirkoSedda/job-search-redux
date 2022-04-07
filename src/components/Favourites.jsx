import React from 'react'
import { Container, Row, Col, ListGroup, ListGroupItem } from 'react-bootstrap'
import { StarFill } from 'react-bootstrap-icons'
import { connect } from 'react-redux'
import { removeFromFav } from '../redux/actions'

const mapStateToProps = (state) => ({})

const mapDispatchToProps = (dispatch) => ({
    removeFromFav: (favourite) => { dispatch(removeFromFav(favourite)) }
})

class Favourites extends React.Component {
    render() {
        return (
            <Container>
                <Row>
                    <Col xs={12}>
                        <ListGroup>
                            {
                                this.props.favourites.items.map(favourite => (
                                    <ListGroupItem>
                                        <StarFill onClick={() => this.props.removeFromFav(favourite)} />
                                        <span>{favourite}</span>
                                    </ListGroupItem>
                                ))
                            }
                        </ListGroup>
                    </Col>
                </Row>
            </Container>
        )
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Favourites)