import React, { FunctionComponent } from 'react';
import { Row } from 'reactstrap';
import './style.scss';

interface HeadingProps {
    title: string;
}

const ContainerHeading: FunctionComponent<HeadingProps> = ({
    title,
}) => {
    return (
      <Row className="container-heading">
            <h2> {title} </h2>
       </Row>
    );
};

export default ContainerHeading;