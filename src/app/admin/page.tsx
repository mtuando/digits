import { Col, Row } from 'react-bootstrap';
import { prisma } from '@/lib/prisma';
import { adminProtectedPage } from '@/lib/page-protection';
import { auth } from '@/lib/auth';
import { Contact } from '@prisma/client';
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

  return (
    <main>
      <h2 className="text-center">List Contacts</h2>
      <Row xs={1} md={2} lg={3} className="g-4">    
        {contacts.map((contact, idx) => (
          <Col key={idx}>
            <ContactCardAdmin contact={contact} />
          </Col>
        ))}
      </Row>
    </main>
  );
};

export default AdminPage;
