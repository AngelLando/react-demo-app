import React from 'react';
import classes from './BuildControl.module.css';

import { Button } from 'antd';
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import 'antd/dist/antd.css';

const BuildControl = (props) => (
    <div className={classes.BuildControl}>
        <div className={classes.Label}>{props.label}</div>
        <Button type="primary" shape="circle" icon={<MinusOutlined />} onClick={props.removed} disabled={props.disabled} />
        <Button type="primary" shape="circle" icon={<PlusOutlined />} onClick={props.added} />
    </div>
);

export default BuildControl;