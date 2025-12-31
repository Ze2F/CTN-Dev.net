
import React, { useState, useEffect } from 'react';
import Countdown from './Countdown';
import Calibration from './Calibration';
import styles from './style.module.css';

const NewYearContainer: React.FC = () => {
    const targetDate = new Date('2026-01-01T00:00:00');
    const [stage, setStage] = useState<'countdown' | 'transition' | 'calibration'>('countdown');
    const [isClient, setIsClient] = useState(false);

    useEffect(() => {
        setIsClient(true);
    }, []);

    const triggerTransition = () => {
        if (stage !== 'countdown') return;

        setStage('transition');

        setTimeout(() => {
            setStage('calibration');
        }, 2000);
    };

    const handleComplete = () => {
        setTimeout(() => {
            triggerTransition();
        }, 1500);
    };

    if (!isClient) return null;

    return (
        <div style={{ width: '100%', height: '100%' }}>
            {stage === 'countdown' && (
                <Countdown targetDate={targetDate} onComplete={handleComplete} />
            )}
            
            {stage === 'transition' && (
                <div className={styles.fadeOut}>
                    <Countdown targetDate={targetDate} onComplete={() => {}} />
                </div>
            )}

            {stage === 'calibration' && (
                <Calibration />
            )}
            
            {/* <button 
                className={styles.testButton}
                onClick={triggerTransition}
            >
                Test: Warp to 2026
            </button> */}
        </div>
    );
};

export default NewYearContainer;
