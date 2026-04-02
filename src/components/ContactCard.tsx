"use client";

import { Contact } from '@/lib/validationSchemas';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

const ContactCard = ({ firstName, lastName, image, address, description, id }: Contact) => (
    <Card className='h-100'>
        <Card.Header>
            <Card.Img src={image} style={{ width: '75px' }} />
            <Card.Title>{firstName} {lastName}</Card.Title>
            <Card.Subtitle>{address}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Card.Text>{description}</Card.Text>
            <Card.Footer>
                <Link href={`edit/${id}`}>Edit</Link>
            </Card.Footer>
        </Card.Body>
  </Card>
);

export default ContactCard;
