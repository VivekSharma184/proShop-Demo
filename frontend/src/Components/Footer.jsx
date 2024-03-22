import { Container, Row, Col} from "react-bootstrap"

const Footer = () => {

    const currentYear = new Date().getFullYear()

  return (
    <footer>
      <Container>
        <Row>
            <Col className="text-Center py-3">
                <p>ProShop &#169; {currentYear}</p>
            </Col>
        </Row>
      </Container>
    </footer>
  )
}

export default Footer
