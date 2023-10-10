import React from 'react';

function CompanyProfile({ params }) {
    const { companyUserName } = params
    return (
        <div>
            {companyUserName}
        </div>
    );
}

export default CompanyProfile;