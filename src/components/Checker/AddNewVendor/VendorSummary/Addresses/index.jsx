import React, { useEffect, useState } from 'react';
import styles from './index.module.scss';
import KeyAddress from '../../../Common/KeyAddress';

function Index({ keyAddresses }) {

    return (
        <KeyAddress
            Header="Key Addresses"
            KeyAddresses={keyAddresses || []}
            uniqueField="_id"
        />

    )
}

export default Index