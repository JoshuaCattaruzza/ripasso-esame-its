import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import {useParams, useNavigate} from 'react-router-dom';;

const Home = () => {
  const [data, setData] = useState([]);
  const navigate = useNavigate()
  var url = "http://localhost:3001/rifugi";
  useEffect(() => {
    fetch(url)
      .then((res) => res.json())
      .then((data) => setData(data));
  }, [setData]);
console.log(data)
  return (
    <Container>
      <Row>
        <Col>
          {data && data
            ? data.map((card) => {
                return (
                  <Card key={card.id} style={{ marginTop: "30px" }}>
                    <Card.Img variant="top" src={card.img_src} />
                    <Card.Body>
                      <Card.Title>
                        Nome rifugio: {card.nome_localita}
                      </Card.Title>
                    </Card.Body>
                    <ListGroup className="list-group-flush">
                      <ListGroup.Item>Località: {card.localita}</ListGroup.Item>
                      <ListGroup.Item>
                        Raggiungiblità:
                        {card.itinerari.map((rag) => {
                          return <>{rag.difficolta + " "}</>;
                        })}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Aperto: {card.aperto ? "aperto" : "chiuso"}
                      </ListGroup.Item>
                    </ListGroup>
                    <Card.Body>
                      <Button    onClick={() => navigate(`/details/${card.id}`)}>Visualizza</Button>
                    </Card.Body>
                  </Card>
                );
              })
            : null}
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
