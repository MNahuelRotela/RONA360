import { useEffect } from 'react';
import AOS from 'aos';

const Recinto3D = () => {
    useEffect(() => {
        AOS.init({ duration: 2000 });
      });
    useEffect(() => {
        const script = document.createElement('script');
        script.type = 'text/javascript';
        script.async = true;
        script.dataset.short = 'zZqhKsER8';
        script.dataset.path = 'tours';
        script.dataset.isSelfHosted = 'false';
        script.src = 'https://app.cloudpano.com/public/shareScript.js';

        const div = document.getElementById('zZqhKsER8');
        if (div) {
            div.appendChild(script);
        }

        return () => {
            if (div) {
                div.removeChild(script);
            }
        };
    }, []);

    return <div id="zZqhKsER8" data-aos="fade-down" className=' mt-10'></div>;
};

export default Recinto3D;