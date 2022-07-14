import React from "react";
import { useEffect, useState } from "react";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import Button from "react-bootstrap/Button";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";
import { useParams, useNavigate } from "react-router-dom";

const Home = () => {
  const [card, setCard] = useState({});
  const [itinerari, setItinerario] = useState([]);
  let { id } = useParams();
  const navigate = useNavigate();

  var url = "http://localhost:3001/rifugi/";
  useEffect(() => {
    fetch(url + id)
      .then((res) => res.json())
      .then((data) => {
        setCard(data);
         setItinerario(data.itinerari)});
  }, [setCard]);
  console.log(itinerari);
  return (
    <Container>
      <Row>
        <Col>
          {card && card ? (
            <Card key={card.id} style={{ marginTop: "30px" }}>
              <Card.Img variant="top" src={card.img_src} />
              <Card.Body>
                <Card.Title>Nome rifugio: {card.nome_localita}</Card.Title>
              </Card.Body>
              <ListGroup className="list-group-flush">
                <ListGroup.Item>Località: {card.localita}</ListGroup.Item>
                <ListGroup.Item>
                  Aperto: {card.aperto ? "aperto" : "chiuso"}
                </ListGroup.Item>
                {itinerari && itinerari.map((it) => {
                  return (
                    <>
                      <ListGroup.Item>Nome: {it.nome_itinerari}</ListGroup.Item>
                      <ListGroup.Item>tipologia: {it.tipologia_itinerario   }</ListGroup.Item>
                      <ListGroup.Item>
                        Tempo: {it.percorrenza_media}
                      </ListGroup.Item>
                      <ListGroup.Item>
                        Difficoltà: {it.difficolta}
                      </ListGroup.Item>
                    </>
                  );
                })} 
              </ListGroup>
              <Card.Body>
                <Button href="https://www.google.com/maps">Prenota</Button>
              </Card.Body>
            </Card>
          ) : null}
        </Col>
      </Row>
    </Container>
  );
};
export default Home;
