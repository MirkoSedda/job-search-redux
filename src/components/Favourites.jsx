import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Container, Row, Col, ListGroup, ListGroupItem } from "react-bootstrap";
import { StarFill } from "react-bootstrap-icons";
import { removeFromFav } from "../store/actions";

export default function Favourites() {
  const dispatch = useDispatch();
  const favourites = useSelector((state) => state.favourites);

  return (
    <Container>
      <Row>
        <Col xs={12}>
          <ListGroup>
            {favourites.elements.map((f) => (
              <ListGroupItem>
                <StarFill onClick={() => dispatch(removeFromFav(f))} />
                <span>{f}</span>
              </ListGroupItem>
            ))}
          </ListGroup>
        </Col>
      </Row>
    </Container>
  );
};


