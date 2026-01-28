import React from 'react';
import { Container, Row, Col, Card, Button } from 'react-bootstrap';
import MyNavbar from '../components/MyNavbar';
import { FaUserMd, FaList, FaHandHoldingHeart, FaUserInjured } from 'react-icons/fa';

const AdminDashboard = () => {
  const adminCards = [
    { title: 'Add New Doctor', text: 'Register a new doctor to the database.', btn: 'ADD', bg: 'primary', icon: <FaUserMd size={50}/> },
    { title: 'View Doctor List', text: 'View details of all registered doctors.', btn: 'VIEW', bg: 'warning', icon: <FaList size={50}/> },
    {title : 'View Patient List', text: 'View details of all registered patients.', btn: 'VIEW', bg: 'success', icon: <FaUserInjured size={50}/> },
    {title: 'Remove Docotor', text: 'Remove a doctor from the database.', btn: 'REMOVE', bg: 'danger', icon: <FaHandHoldingHeart size={50}/> },
    {title: 'View Appointments', text: 'Check all scheduled appointments.', btn: 'VIEW', bg: 'info', icon: <FaList size={50}/> },
  ];

  return (
    <>
      <MyNavbar />
      <Container className="mt-5">
        <h2 className="mb-4">Admin Dashboard</h2>
        <Row>
          {adminCards.map((card, index) => (
            <Col md={4} className="mb-4" key={index}>
              <Card className="h-100 dashboard-card text-center p-3">
                <div className={`text-${card.bg} mb-3`}>{card.icon}</div>
                <Card.Body>
                  <Card.Title>{card.title}</Card.Title>
                  <Card.Text>{card.text}</Card.Text>
                  <Button variant={card.bg} className="text-white w-100">{card.btn}</Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </>
  );
};

export default AdminDashboard;