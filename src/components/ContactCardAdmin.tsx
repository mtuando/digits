"use client";

import { Contact } from '@/lib/validationSchemas';
import Card from 'react-bootstrap/Card';

const ContactCardAdmin = ({ firstName, lastName, image, address, description, owner }: Contact) => (
    <Card className='h-100'>
        <Card.Header>
            <Card.Img src={image} style={{ width: '75px' }} />
            <Card.Title>{firstName} {lastName}</Card.Title>
            <Card.Subtitle>{address}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Card.Text>{description}</Card.Text>
            <p className='blockquote-footer'>{owner}</p>
        </Card.Body>
  </Card>
);

export default ContactCardAdmin;
