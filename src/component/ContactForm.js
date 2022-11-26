import React, { useState } from "react";
import { Form, Button } from "react-bootstrap";
import { useDispatch } from "react-redux";

const ContactForm = () => {
  const [name, setName] = useState();
  const [phoneNumber, setPhoneNumber] = useState();
  let dispatch = useDispatch();

  const addName = (event) => {
    let name = event.target.value;
    setName(name);
  };

  const addPhoneNumber = (event) => {
    let phoneNumber = event.target.value;
    setPhoneNumber(phoneNumber);
  };

  const addContact = (event) => {
    event.preventDefault();
    dispatch({ type: "ADD_CONTACT", payload: { name, phoneNumber } });
  };

  return (
    <div>
      <Form className='contact-form' onSubmit={addContact}>
        <Form.Group className='mb-3' controlId='formName'>
          <Form.Label>이름</Form.Label>
          <Form.Control
            type='text'
            placeholder='이름을 입력하세요'
            onChange={addName}
          />
        </Form.Group>

        <Form.Group className='mb-3' controlId='formContact'>
          <Form.Label>전화번호</Form.Label>
          <Form.Control
            type='number'
            placeholder='전화번호를 입력하세요'
            onChange={addPhoneNumber}
          />
        </Form.Group>

        <Button variant='primary' type='submit'>
          추가하기
        </Button>
      </Form>
    </div>
  );
};

export default ContactForm;
