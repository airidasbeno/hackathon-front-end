import React from 'react';
import {Information, Status} from "./partials";
import {useWeb3React} from "@web3-react/core";
import MarketplaceCard from "./partials/ProfileCard";
import {Col, Row} from 'antd';



const Profile: React.FC = () => {
    const {isActivating, isActive, chainId} = useWeb3React();

    return (
        <>
            <h1>Profile</h1>
            <p>Welcome to our unique shopping platform. Experience a whole new world of online shopping where quality meets
                convenience. Explore our vast range of products, savor exclusive discounts, and enjoy seamless browsing.
                Your satisfaction is our promise!</p>
            <Status isActivating={isActivating} isActive={isActive} />
            <Information chainId={chainId} />
            <h2>Your Current Campaigns</h2>
            <Row>
                <Col span={6}>
                    <MarketplaceCard />
                </Col>
                <Col span={6}>
                    <MarketplaceCard />
                </Col>
            </Row>
        </>
        
    );
};
export default Profile;