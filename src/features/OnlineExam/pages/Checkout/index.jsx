import { Button, Col, Divider, Row, Space, Table, Tag } from 'antd';
import Timer from 'features/OnlineExam/components/Timer';
import React, { useEffect, useState } from 'react';
import { useSelector } from 'react-redux';
import checkStatusAnswer from 'utils/checkStatusAnswer';
import './style.scss';
Checkout.propTypes = {

};

function Checkout(props) {

  const { answers } = useSelector(state => state.exam);
  const [result, setResult] = useState(['Complete', 'Complete', 'Complete', 'Complete', 'Complete', 'Complete', 'Complete']);

  console.log('Kiểm tra quan trọng', result);

  useEffect(() => {

    const tempResult = checkStatusAnswer(answers);
    setResult(tempResult);
  }, [answers]);




  const columns = [
    {
      title: 'Question',
      dataIndex: 'question',
      key: 'question',
    },
    {
      title: 'Description',
      dataIndex: 'description',
      key: 'description',
    },
    {
      title: 'Status',
      dataIndex: 'status',
      key: 'status',
      render: status => (
        <>

          <Tag color={status === 'Complete' ? 'green' : 'volcano'} key={status}>
            {status.toUpperCase()}
          </Tag>

        </>
      )
    },
    {
      title: '',
      dataIndex: 'detail',
      key: 'detail',
      render: text => <a>{text}</a>,
    },
  ];




  const data_listening = [
    {
      key: '1',
      question: '1 - 6',
      description: 'Part I: Picture Description',
      status: result[0],
      detail: 'Detail',
    },
    {
      key: '2',
      question: '7 - 31',
      description: 'Part II: Question - Response',
      status: result[1],
      detail: 'Detail',
    },
    {
      key: '3',
      question: '32 - 70',
      description: 'Part III: Short Conversations',
      status: result[2],
      detail: 'Detail',
    },
    {
      key: '4',
      question: '71 - 100',
      description: 'Part IV: Short Talks',
      status: result[3],
      detail: 'Detail',
    },


  ];


  const data_reading = [
    {
      key: '1',
      question: '101 - 130',
      description: 'Part V: Incomplete Sentences ',
      status: result[4],
      detail: 'Detail',
    },
    {
      key: '2',
      question: '131 - 146',
      description: 'Part VI: Incomplete Sentences ',
      status: result[5],
      detail: 'Detail',
    },
    {
      key: '3',
      question: '147 - 200',
      description: 'Part VII: Reading Comprehension',
      status: result[6],
      detail: 'Detail',
    },



  ];



  return (
    <>
      <Timer page='checkout' />
      <div className="checkout_wrapper">
        <Space direction="vertical" style={{ width: "100%" }} size="large">
          <div className="checkout_listening">
            <span className='topic'>Listening</span>
            <Table dataSource={data_listening} columns={columns} pagination={false} />
          </div>

          <div className="checkout_reading">
            <span className='topic'>Reading</span>
            <Table dataSource={data_reading} columns={columns} pagination={false} />
          </div>

          <Divider></Divider>
          <Row gutter={[16, 16]}>
            <Col span={3} offset={8} flex={1} >
              <div className='button_align' >
                <Button block type="primary" size='large'>Back</Button>
              </div>

            </Col>

            <Col span={3} offset={2} flex={1} >
              <div className='button_align'>
                <Button block type="primary" size='large'>Submit</Button>
              </div>
            </Col>


          </Row>


        </Space>



      </div>

    </>
  );
}

export default Checkout;