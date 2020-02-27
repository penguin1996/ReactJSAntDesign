import React from 'react';
import { Row, Col } from 'antd';

class Flex extends React.Component {

    render() {
        return (
            <div>
                <Row>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10} >
                        Col1
                        
    </Col>
                    <Col xs={20} sm={16} md={12} lg={8} xl={4}>
                        Col2
    </Col>
                    <Col xs={2} sm={4} md={6} lg={8} xl={10}>
                        Col3
    </Col>
                </Row>
            </div>
        );
    }
}
export default Flex;