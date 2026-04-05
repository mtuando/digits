import { Col, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { Contact } from '@prisma/client';
import { adminProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';
import ContactCardAdmin from '@/components/ContactCardAdmin';

const AdminPage = async () => {
  const session = await auth();
  adminProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );

  const contacts: Contact[] = await prisma.contact.findMany({
    include: { notes: true },
  });
  const notes = await prisma.note.findMany({
    where: {
      owner: session?.user!.email ? session.user.email : undefined,
    },
  });

  return (
    <main>
      <h2 className="text-center">List Contacts (Admin)</h2>
      <Row xs={1} md={2} lg={3} className="g-4">    
        {contacts.map((contact, idx) => (
          <Col key={idx}>
            <ContactCardAdmin contact={contact} 
                              notes={notes.filter(note => note.contactId === contact.id)} />

          </Col>
        ))}
      </Row>
    </main>
  );
};

export default AdminPage;
