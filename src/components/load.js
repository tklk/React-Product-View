import React from 'react'

const loadResult = (Component) => {
    return function loadComponent({ isLoading, ...props}) {
        if (!isLoading) {
            return <Component {...props}/>;
        }
        return (
            <p><i className = "fas fa-running"></i>... Fetching data from heroku ... Please wait ~ </p>
        );
    }
}

export default loadResult