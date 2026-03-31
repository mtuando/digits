import { Col, Row} from 'react-bootstrap';
import { loggedInProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';
import { Contact } from '@/lib/validationSchemas';
import ContactCard from '@/components/ContactCard';
import { prisma } from '@/lib/prisma';

/** Render a list of contacts for the logged in user. */
const ListPage = async () => {
  // Protect the page, only logged in users can access it.
  const session = await auth();
  loggedInProtectedPage(
    session as {
      user: { email: string; id: string; name: string };
    } | null,
  );

  const owner = session?.user?.email || '';
  const contacts: Contact[] = await prisma.contact.findMany({
    where: {
      owner,
    },
  });

  return (
    <main>
      <h2 className="text-center">List Contacts</h2>
      <Row xs={1} md={2} lg={3} className="g-4">    
        {contacts.map((contact, idx) => (
          <Col key={idx}>
            <ContactCard {...contact} />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default ListPage;
