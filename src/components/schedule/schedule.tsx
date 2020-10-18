import classnames from 'classnames';
import React, { FunctionComponent, useState } from 'react';
import { useTranslation } from 'react-i18next';
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
import ContainerHeading from '../common/container-heading';
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

    const { t } = useTranslation();

    return (
        <div className="schedule">
            <ContainerHeading title={t('Schedule.title')}/>
            <Nav tabs={true}>
               {events.map((_, i) => (
                    <NavItem
                        key={i}
                        className={classnames({active: activeTab === i})}
                    >
                        <NavLink
                            onClick={() => toggle(i)}
                        >
                            {t('Schedule.day')} {i + 1}
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
        </div>
    );
};

export default Schedule;