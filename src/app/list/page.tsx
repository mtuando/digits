import { Col, Row} from 'react-bootstrap';
// import { prisma } from '@/lib/prisma';
// import StuffItem from '@/components/StuffItem';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';
import { Contact } from '@prisma/client';
import ContactCard from '@/components/ContactCard';
import { prisma } from '@/lib/prisma';

/** Render a list of stuff for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await auth();
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );
  const contacts: Contact[] = await prisma.contact.findMany({});
  const notes = await prisma.note.findMany({
    where: {
      owner: session?.user!.email ? session.user.email : undefined,
    },
  });
  return (
    <main>
      <h2 className="text-center">List Contacts</h2>
      <Row xs={1} md={2} lg={3} className="g-4">    
        {contacts.map((contact, idx) => (
          <Col key={idx}>
            <ContactCard contact={contact} 
                         notes={notes.filter(note => note.contactId === contact.id)} />

          </Col>
        ))}
      </Row>
    </main>
  );
};

export default ListPage;
