import React from 'react'
import { main, sub, featureAnimation } from './index.module.css'
import featureImage from '../../media/images/feature_image.png'
import rackAndPinion from '../../media/images/Ring-and-pinion.png'

export default function index() {
    return (
        <div className={`container border shadow-lg rounded mt-5 p-3 ${featureAnimation}`}>
            <div className={`${main}`}>
                <div>
                    <img src={featureImage} className='img-fluid h-100 w-100' alt="featured image" />
                </div>
                <div className={sub}>
                    <div>
                        <img src={rackAndPinion} alt="ring and pinion" className='img-fluid' />
                    </div>
                    <div>
                        <h4>Final Drive: 3.55</h4>
                    </div>
                </div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
                <div>test 1</div>
            </div>
        </div>
    )
}
