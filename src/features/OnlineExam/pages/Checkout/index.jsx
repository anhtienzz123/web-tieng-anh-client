import React from 'react';
import PropTypes from 'prop-types';
import { Table, Tag, Space } from 'antd';

Checkout.propTypes = {
    
};

function Checkout(props) {

    const columns = [
        {
          title: 'Name',
          dataIndex: 'name',
          key: 'name',
        },
        {
          title: 'Age',
          dataIndex: 'age',
          key: 'age',
        },
        {
          title: 'Address',
          dataIndex: 'address',
          key: 'address',
        },
      ];

      const dataSource = [
        {
          key: '1',
          name: 'Mike',
          age: 32,
          address: '10 Downing Street',
        },
        {
          key: '2',
          name: 'John',
          age: 42,
          address: '10 Downing Street',
        },
      ];


    return (
        <div>
            <Table dataSource={dataSource} columns={columns} />;
        </div>
    );
}

export default Checkout;