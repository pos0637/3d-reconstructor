import React, { Component } from 'react';
import * as THREE from 'three';
import React3 from 'react-three-renderer';
import TrackballControls from 'three-trackballcontrols';
import GeometryFactory from 'jsts/org/locationtech/jts/geom/GeometryFactory';
import Coordinate from 'jsts/org/locationtech/jts/geom/Coordinate';
import AxisPlaneCoordinateSequence from 'jsts/org/locationtech/jts/operation/distance3d/AxisPlaneCoordinateSequence';

export default class RootView extends Component {
    constructor(props) {
        super(props);

        this.cameraPosition = new THREE.Vector3(0, 0, 5);
        this.trackballControls = null;

        let point = new Coordinate(1.0, 1.0, 1.0);
        console.log(point);

        let points = GeometryFactory.getDefaultCoordinateSequenceFactory().create([point]);
        points = AxisPlaneCoordinateSequence.projectToXY(points);
        console.log(points.getCoordinate(0));

        this._onAnimate = () => {
            if (this.trackballControls !== null) {
                this.trackballControls.update();
            }
        }
    }

    render() {
        let node = document.getElementById('root');
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
                    <perspectiveCamera
                        ref={(ref) => { this.trackballControls = new TrackballControls(ref, node); }}
                        name='camera'
                        fov={75}
                        aspect={width / height}
                        near={0.1}
                        far={1000}
                        position={this.cameraPosition}
                    />
                    <mesh>
                        <boxGeometry
                            width={1}
                            height={1}
                            depth={1}
                        />
                        <meshBasicMaterial
                            color={0x00ff00}
                            wireframe={true}
                        />
                    </mesh>
                </scene>
            </React3>);
    }
}
