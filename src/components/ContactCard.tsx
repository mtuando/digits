"use client";

import { Contact, Note } from '@prisma/client';
import Link from 'next/link';
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import NoteItem from '@/components/NoteItem';
import AddNoteForm from '@/components/AddNoteForm';

const ContactCard = ({ contact, notes }: { contact: Contact & { id: string | number }; notes: Note[] }) => (
    <Card className='h-100'>
        <Card.Header>
            <Card.Img src={contact.image} style={{ width: '75px' }} />
            <Card.Title>{contact.firstName} {contact.lastName}</Card.Title>
            <Card.Subtitle>{contact.address}</Card.Subtitle>
        </Card.Header>
        <Card.Body>
            <Card.Text>{contact.description}</Card.Text>
        </Card.Body>
        <ListGroup variant="flush">
            {notes.map((note) => <NoteItem key={note.id} note={note} />)}
        </ListGroup>
        <AddNoteForm contactId={contact.id} />
        <Card.Footer>
            <Link href={`edit/${contact.id}`}>Edit</Link>
        </Card.Footer>
    </Card>
);

export default ContactCard;