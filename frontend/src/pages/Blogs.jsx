import React, { useEffect, useState } from "react";
import { useAllBlogsQuery } from "../slices/blogApiSlice";
import { Card, Col, Container, Row } from "react-bootstrap";

const Blogs = () => {
    const [blogs, setBlogs] = useState({});
    const { data } = useAllBlogsQuery();

    useEffect(() => {
        setBlogs(data?.blogs);
    }, [data]);
    return (
        <div className="mt-5">
            <Container>
                <Row>
                    <Col className="ms-auto">
                        <Card>
                            <Card.Body>
                                <Card.Title className="title-text">This is card</Card.Title>
                                <hr className="mt-0" />
                                <Card.Subtitle className="subtitle-text text-muted">- Vishal Chaudhary</Card.Subtitle>
                                <Card.Text className="mt-3">This is text of the card</Card.Text>
                                <Card.Link to="#">View more</Card.Link>
                            </Card.Body>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Blogs;
