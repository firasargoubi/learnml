import classnames from 'classnames';
import React, { FunctionComponent, useState } from 'react';
import {
    Col,
    Container,
    Nav,
    NavItem,
    NavLink,
    Row,
    TabContent,
    TabPane,
} from 'reactstrap';
import { Event } from './event-interface';
import './schedule.scss';

export interface ScheduleProps {
    /**
     * Double Array containing all events in the schedule
     *  - First level contains days (Event array)
     *  - Second level contains Event objects
     */
    events: Event[][];
}

const Schedule: FunctionComponent<ScheduleProps> = ({
    events,
}) => {
    const [ activeTab, setActiveTab ] = useState(0);

    const toggle = (tab: number ) => {
        if(activeTab !== tab) setActiveTab(tab);
    };

    return (
        <Container className="schedule">
            <Nav tabs={true}>
               {events.map((_, i) => (
                    <NavItem
                        key={i}
                        className={classnames({active: activeTab === i})}
                    >
                        <NavLink
                            onClick={() => toggle(i)}
                        >
                            Day {i + 1}
                        </NavLink>
                    </NavItem>
                ))}
            </Nav>
            <TabContent activeTab={activeTab}>
                {events.map((day, i) => (
                    <TabPane tabId={i} key={i}>
                        <Container>
                            {day.map((event, j) => (
                                <Row className="event" key={j}>
                                    <Col md="3">{event.time}</Col>
                                    <Col md="9">{event.description}</Col>
                                </Row>
                            ))}
                        </Container>
                    </TabPane>
                ))}
            </TabContent>
        </Container>
    );
};

export default Schedule;