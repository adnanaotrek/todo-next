'use client'

import { useState } from 'react'
import Image from 'next/image'
import img from '../../../public/Page-1_2nd Edition Color.jpg'

export default function NewsPaper() {
    const [coords, setCoords] = useState(null);

    const handleAreaClick = (coords) => {
        setCoords(coords);
    };

    return (
        <div style={{ display: 'flex', alignItems: 'flex-start', padding: '20px' }}>
            <div style={{ flex: 1 }}>
                <Image
                    src={img}
                    alt="Image with Map"
                    width={800}
                    height={600}
                    useMap="#image-map"
                />
                <map name="image-map">
                    <area
                        shape="rect"
                        coords="366,334,475,542"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleAreaClick({ x1: 366, y1: 334, x2: 475, y2: 542 });
                        }}
                        alt="Rectangle Area"
                        title="Rectangle Area"
                    />
                    <area
                        shape="rect"
                        coords="42,1509,3698,4170"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleAreaClick({ x1: 42, y1: 1509, x2: 3698, y2: 4170 });
                        }}
                        alt="Rectangle Area"
                        title="Rectangle Area"
                    />
                    <area
                        shape="rect"
                        coords="365,76,477,331"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleAreaClick({ x1: 365, y1: 76, x2: 477, y2: 331 });
                        }}
                        alt="Rectangle Area"
                        title="Rectangle Area"
                    />
                    <area
                        shape="rect"
                        coords="19,72,361,542"
                        href="#"
                        onClick={(e) => {
                            e.preventDefault();
                            handleAreaClick({ x1: 19, y1: 72, x2: 361, y2: 542 });
                        }}
                        alt="Rectangle Area"
                        title="Rectangle Area"
                    />
                </map>
            </div>

            <div
                style={{
                    flex: 1,
                    padding: '20px',
                    borderLeft: '2px solid #ddd',
                    marginLeft: '20px',
                    textAlign: 'center',
                }}
            >
                {coords ? (
                    <div className='w-full h-44 overflow-hidden relative'>
                        <Image
                            src={img}
                            alt="Selected Area"
                            layout="fill"
                            objectFit="none"
                            objectPosition={`${-coords.x1}px ${-coords.y1}px`}
                        />
                    </div>
                ) : (
                    <p>Select an area from the image to see the cropped section.</p>
                )}
            </div>
        </div>
    );
}