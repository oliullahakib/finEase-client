import React from 'react';

const Mydiv = ({children,className}) => {
    return (
        <div className={`${className} container mx-auto`}>
            {children}
        </div>
    );
};

export default Mydiv;