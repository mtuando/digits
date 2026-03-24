"use client";

import { Contact } from '@/lib/validationSchemas';
import { Card, CardHeader, CardText } from 'react-bootstrap';

/* Renders a single row in the List Stuff table. See list/page.tsx. */
const ContactCard = ({ firstName, lastName, address, image, description }: Contact) => (
  <Card className='h-100' >
    <CardHeader>
        <Card.Img src={image} style={{ width: '75px'}}/>
        <Card.Title>{firstName} {lastName}</Card.Title>
        <Card.Subtitle>{address}</Card.Subtitle>

    </CardHeader>
    
    <Card.Body>
        <CardText>{description}</CardText>
    </Card.Body>

  </Card>
);

export default ContactCard;
