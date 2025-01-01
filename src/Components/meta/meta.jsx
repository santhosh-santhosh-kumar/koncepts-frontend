// Meta.js
import React from 'react';
import { Helmet } from 'react-helmet';
import { useLocation } from 'react-router-dom';

function Meta() {
    const location = useLocation();

    const getTitle = () => {
        switch (location.pathname) {
            case '/':
                return 'Home - TejusDigi';
            case '/about':
                return 'About - TejusDigi';
            case '/services':
                return 'Services - TejusDigi';
            case '/projects':
                return 'Projects - TejusDigi';
            case '/portfolio':
                return 'Portfolio - TejusDigi';
            case '/carrier':
                return 'Carrier - TejusDigi';
            case '/contact':
                return 'Contact - TejusDigi';
            case '/getaquote':
                return 'Get A Quote - TejusDigi';
            default:
                return 'TejusDigi';
        }
    };

    const title = getTitle();

    return (
        <Helmet>
            <title>{title}</title>
            <meta property="og:title" content={title} />
            <meta property="og:description" content={`${title} page of Koncepts Design and Development`} />
        </Helmet>
    );
}

export default Meta;
