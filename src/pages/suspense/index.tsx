import React from 'react';
import { Suspense, lazy, useState } from 'react';
import { useRequest, Loading, connect, NavLink, Router } from 'umi';
console.log(Suspense);
const DemoA = lazy(() => {
  import('./a').then(res => {
    console.log(res);
  });
  return import('./a');
});
const DemoB = lazy(
  () =>
    new Promise(resolve =>
      setTimeout(() => {
        console.log('模拟ES Module');
        // debugger;
        resolve(
          // 模拟ES Module
          {
            // 模拟export default
            default: function render() {
              return <div>Other2 Component</div>;
            },
          },
        );
      }, 5000),
    ),
);

const IndexPage = ({ suspense, dispatch }) => {
  let n = Date.now();
  console.log('******', n);
  for (let i = 0; i < 1000000000; i++) {
    let j = 10;
  }
  console.log('end******', Date.now(), Date.now() - n);

  console.log('sussussussussussussussussussussussussussussussussussussus');
  const [state, setstate] = useState(false);
  return (
    <div>
      <div onClick={() => setstate(!state)}>model:{suspense.name}</div>
      <input></input>
      {state && (
        <Suspense
          maxDuration={500}
          fallback={<div>loading.....................</div>}
        >
          {/* <NavLink to="/demoA">DemoA</NavLink>
        <NavLink to="/demoB">DemoB</NavLink> */}

          <DemoA />
          <DemoB />
          <DemoA />
          <DemoB />
          <DemoA />
          <DemoB />
        </Suspense>
      )}
    </div>
  );
};
export default connect(({ suspense }) => ({
  suspense,
}))(IndexPage);
