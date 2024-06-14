import 'antd/dist/reset.css';
import './global.less';
import { bootstrap } from '@modern-js/runtime';
import ReactDOM from 'react-dom/client';

function getApp(OriginalApp: React.ComponentType) {
  return function App() {
    return <OriginalApp />;
  };
}

export default (App: React.ComponentType): void => {
  bootstrap(getApp(App), 'root', undefined, ReactDOM);
};
