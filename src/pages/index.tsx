import React from 'react';
import { Drawer } from 'antd';
import { useRequest } from 'umi';
let i = 0;
export default () => {
  useRequest(username => ({
    url: '/api/bar/data1',
    method: 'get',
  }));
  useRequest(username => ({
    url: '/api/bar/data3',
    method: 'get',
  }));
  return (
    <>
      {
        <div
          style={{
            overflow: 'scroll',
            width: '100%',
            height: '30px',
            border: '1px solid',
          }}
        >
          {i++}
          <br />
          <br />
          <br />
          <br />
        </div>
      }
      <Drawer visible={true}></Drawer>
    </>
  );
};
