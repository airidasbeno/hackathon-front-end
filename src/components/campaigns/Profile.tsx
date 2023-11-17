import React from 'react';
import {Status} from "../displayPanel/components";
import {useWeb3React} from "@web3-react/core";

const Profile: React.FC = () => {
    const {isActivating, isActive} = useWeb3React();

    return (
        <>
            <h1>Profile</h1>
            <p>Welcome to our unique shopping platform. Experience a whole new world of online shopping where quality meets
                convenience. Explore our vast range of products, savor exclusive discounts, and enjoy seamless browsing.
                Your satisfaction is our promise!</p>
            <Status isActivating={isActivating} isActive={isActive}/>
        </>
    );
};
export default Profile;