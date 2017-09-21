import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import RootView from './RootView';
import FrontView from './FrontView';
import TopView from './TopView';
import LeftView from './LeftView';
import registerServiceWorker from './registerServiceWorker';

let meshs = [
    (
        <mesh>
            <boxGeometry width={1} height={1} depth={1} />
            <meshBasicMaterial color={0x00ff00} wireframe={true} />
        </mesh>
    ),
    (
        <mesh>
            <circleGeometry radius={2} segments={64} />
            <meshBasicMaterial color={0x00ff00} wireframe={true} />
        </mesh>
    )
];

ReactDOM.render(<RootView meshs={meshs} />, document.getElementById('root'));
ReactDOM.render(<FrontView meshs={meshs} />, document.getElementById('front'));
ReactDOM.render(<TopView meshs={meshs} />, document.getElementById('top'));
ReactDOM.render(<LeftView meshs={meshs} />, document.getElementById('left'));
registerServiceWorker();
