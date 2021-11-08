import React, { useState } from 'react';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import { Card, CardBody, Modal, ModalBody, Nav, NavItem, NavLink, UncontrolledTooltip } from 'reactstrap';

import Login from '../auth/basic/Login';
import Registration from '../auth/basic/Registration';

const breakpoint = 'lg';

const LandingRightSideNavItem = () => {
  const [showRegistrationModal, setShowRegistrationModal] = useState(false);

  return (
    <Nav navbar className="ml-auto">
      <NavItem>
        <NavLink tag={Link} to="/">
          <FontAwesomeIcon icon="chart-pie" id="dashboardTooltip" className={`d-none d-${breakpoint}-inline-block`} />
          <UncontrolledTooltip placement="bottom" target="dashboardTooltip">
            Dashboard
          </UncontrolledTooltip>
          <span className={`d-${breakpoint}-none`}>Dashboard</span>
        </NavLink>
      </NavItem>
      <NavItem>
        <NavLink tag={Link} to="/documentation">
          <FontAwesomeIcon icon="book" id="documentationTooltip" className={`d-none d-${breakpoint}-inline-block`} />
          <UncontrolledTooltip placement="bottom" target="documentationTooltip">
            Documentation
          </UncontrolledTooltip>
          <span className={`d-${breakpoint}-none`}>Documentation</span>
        </NavLink>
      </NavItem>
      <Card className="navbar-card-login shadow-none">
        <CardBody className="fs--1 font-weight-normal p-4">
          <Login />
        </CardBody>
      </Card>
    </Nav>
  );
};

export default LandingRightSideNavItem;
