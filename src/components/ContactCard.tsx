"use client";

import { Contact } from '@/lib/validationSchemas';
import Card from 'react-bootstrap/Card';


const ContactCard = ({ firstName, lastName, image, address, description }: Contact) => (
    <Card className='h-100'>
        <Card.Header>
            <Card.Img src={image} style={{ width: '75px' }} />
            <Card.Title>{firstName} {lastName}</Card.Title>
            <Card.Subtitle>{address}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Card.Text>{description}</Card.Text>
        </Card.Body>
  </Card>
);

export default ContactCard;
