"use client";

import { Contact } from '@prisma/client';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';

const ContactCardAdmin = ({ contact }: { contact: Contact & { id: string | number }}) => (
    <Card className='h-100'>
        <Card.Header>
            <Card.Img src={contact.image} style={{ width: '75px' }} />
            <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
            <Card.Subtitle>{contact.address}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Card.Text>{contact.description}</Card.Text>
            <p className='blockquote-footer'>{contact.owner}</p>
        </Card.Body>
        <Card.Footer>
            <Link href={`edit/${contact.id}`}>Edit</Link>
        </Card.Footer>
    </Card>
);

export default ContactCardAdmin;