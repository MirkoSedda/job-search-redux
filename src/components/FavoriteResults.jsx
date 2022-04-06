import React from 'react'
import { Row, Col } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import { Star, StarFill } from 'react-bootstrap-icons'
import { addToFavoritesAction, removeFromFavoritesAction } from '../redux/actions/index.js'

import { connect } from 'react-redux'

const mapStateToProps = () => { }

const mapDispatchToProps = (dispatch) => ({
    addToFavorites: (company) => dispatch(addToFavoritesAction(company)),
    removeFromFavorites: (company) => dispatch(removeFromFavoritesAction(company))
})


const FavoriteResults = ({ data, favorites, addToFavorites, removeFromFavorites }) => {

    const isFavorite = favorites.includes(data.company_name)
    const toggleFavorite = () => {
        isFavorite
            ? removeFromFavorites(data.company_name)
            : addToFavorites(data.company_name)
    }

    return (
        <Row className="mx-0 mt-3 p-3" style={{ border: '1px solid #00000033', borderRadius: 4 }}>
            <Col xs={3} className="d-flex">
                {
                    isFavorite
                        ? <StarFill color="gold" size={16} className="me-4 my-auto" onClick={toggleFavorite} />
                        : <Star color="gold" size={16} className="me-4 my-auto" onClick={toggleFavorite} />
                }
                <Link to={`/${data.company_name}`}>{data.company_name}</Link>
            </Col>
            <Col xs={9}><Link to={{ pathname: data.url }} target='_blank'>{data.title}</Link></Col>
        </Row>
    )
}


export default connect(mapStateToProps, mapDispatchToProps)(FavoriteResults)