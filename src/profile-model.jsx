import React from 'react';
import { createRoot } from 'react-dom/client';
import TiltedCard from './components/TiltedCard';

const container = document.getElementById('profile-model-container');
if (container) {
    const root = createRoot(container);
    root.render(
        <TiltedCard
            imageSrc="/profile.jpeg"
            altText="Samuel Paul A"
            captionText="Samuel Paul A"
            containerHeight="450px"
            containerWidth="450px"
            imageHeight="450px"
            imageWidth="450px"
            rotateAmplitude={12}
            scaleOnHover={1.05}
            showMobileWarning={false}
            showTooltip={true}
            displayOverlayContent={false}
        />
    );
}
