import React, { useState } from "react";
import { Button, Col, Row, Form } from "react-bootstrap";
import { useDispatch } from "react-redux";

const SearchBox = () => {
  let [keyword, setKeyword] = useState("");
  let dispatch = useDispatch();

  const searchName = (event) => {
    event.preventDefault();
    dispatch({ type: "SEARCH_BY_NAME", payload: { keyword } });
  };

  return (
    <div>
      <Form onSubmit={searchName}>
        <Row>
          <Col>
            <Form.Control
              type='text'
              placeholder='이름을 입력하세요'
              onChange={(event) => setKeyword(event.target.value)}
            />
          </Col>
          <Col>
            <Button type='submit'>이름검색</Button>
          </Col>
        </Row>
      </Form>
    </div>
  );
};

export default SearchBox;
