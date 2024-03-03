import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import { FaGithub, FaLinkedin } from "react-icons/fa"; // Importing social icons from 'react-icons'

function Footer() {
  return (
    <footer className="mt-auto py-3 bg-dark text-white">
      <Container>
        <Row>
          <Col className="text-center">
            <div className="social-links">
              {/* GitHub */}
              <a
                href="https://github.com/maesterfox"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FaGithub size={30} />
              </a>
              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/davidfoxtechcode/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                <FaLinkedin size={30} />
              </a>
              {/* Portfolio */}
              <a
                href="https://super.davidfoxdev.co.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="text-white mx-2"
              >
                Portfolio
              </a>
            </div>
          </Col>
        </Row>
      </Container>
    </footer>
  );
}

export default Footer;
