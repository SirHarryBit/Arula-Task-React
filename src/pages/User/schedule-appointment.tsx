import React, { useEffect, useRef } from 'react';

const ScheduleAppointment = () => {
    const widgetRef = useRef(null);

    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.src = 'https://assets.calendly.com/assets/external/widget.js';
        script.async = true;
        document.body.appendChild(script);

        console.log('Calendly script loaded');

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    useEffect(() => {
        if (widgetRef.current) {
            console.log('Widget ref:', widgetRef.current);
        }
    }, [widgetRef]);

    return (
        <div>
            {/* Calendly inline widget begin */}
            <div
                ref={widgetRef}
                className="calendly-inline-widget"
                data-url="https://calendly.com/readashh/consultation-session?hide_gdpr_banner=1&primary_color=11b9a8"
                style={{ minWidth: '320px', height: '700px' }}
            ></div>
            {/* Calendly inline widget end */}
        </div>
    );
};

export default ScheduleAppointment;
