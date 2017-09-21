import React, { Component } from 'react';
import * as THREE from 'three';
import React3 from 'react-three-renderer';
import TrackballControls from 'three-trackballcontrols';

export default class TopView extends Component {
    constructor(props) {
        super(props);

        this.cameraPosition = new THREE.Vector3(0, 1, 0);
        this.trackballControls = null;

        this._onAnimate = () => {
            if (this.trackballControls !== null) {
                this.trackballControls.update();
            }
        };
    }

    render() {
        let node = document.getElementById('top');
        const width = node.offsetWidth; // canvas width
        const height = node.offsetHeight; // canvas height

        return (
            <React3
                mainCamera='camera' // this points to the perspectiveCamera which has the name set to "camera" below
                width={width}
                height={height}
                onAnimate={this._onAnimate}>
                <scene>
                    <gridHelper
                        size={10}
                        divisions={10}
                        colorCenterLine={0xf0f0f0}
                        colorGrid={0xffffff}
                    />
                    <orthographicCamera
                        ref={(ref) => { this.trackballControls = new TrackballControls(ref, node); }}
                        name='camera'
                        left={width / -200}
                        top={height / -200}
                        right={width / 200}
                        bottom={height / 200}
                        near={1}
                        far={100}
                        position={this.cameraPosition}
                    />
                    {this.props.meshs}
                </scene>
            </React3>);
    }
}
