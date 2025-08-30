import { useState } from 'react';
import './index.css';

export const AppPage = () => {
  const [active, setActive] = useState(false);

  const case1 = async () => {
    // error case
    const module = await import(
      /* webpackChunkName: "a/en" */
     `./message/en.json`
    );
    return module;
  };

  const case2 = async () => {
    const locale = 'zh';
    const module = await import(
      /* webpackChunkName: "b/zh" */
      `./message/${locale}.json`
    );
    return module;
  };

  const case3 = async () => {
    const module = await import(
      /* webpackChunkName: "c/cn" */
      './message/cn.json'
    );
    return module;
  };

  const case4 = async () => {
    const module = await import(
      /* webpackChunkName: "d/ja" */
      "./message/ja.json"
    );
    return module;
  };

  return (
    <div className="flex h-full w-full flex-col items-center justify-center gap-8 overflow-auto p-12">
      <button onClick={case1}>case1</button>
      <button onClick={case2}>case2</button>
      <button onClick={case3}>case3</button>
      <button onClick={case4}>case4</button>
    </div>
  );
};
