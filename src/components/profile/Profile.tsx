import React from 'react';
import { useAccount, useChainId } from "wagmi";
import { Col, Row } from 'antd';
import ProfileCard from "./partials/ProfileCard";

const Profile: React.FC = () => {
    const { address, isConnected, connector } = useAccount();
    const connectedChainId = useChainId();


    return (
        <>
            <h1>Profile</h1>
            <p>Welcome to our unique shopping platform. Experience a whole new world of online shopping where quality meets
                convenience. Explore our vast range of products, savor exclusive discounts, and enjoy seamless browsing.
                Your satisfaction is our promise!</p>
            <p>Status: {isConnected ? 'Connected' : 'Not Connected'}</p>
            <p>Address: {address}</p>

            {connector?.chains.map((chain, index) => (
                <p key={index}>
                    <strong>{connectedChainId === chain.id ? 'Current - ' : ''}</strong>
                    Blockchain: {chain.name} ({chain.id})
                </p>
            ))}
            <h2>Campaigns</h2>
            <Row>
                <Col span={4}>
                    <ProfileCard />
                </Col>
                <Col span={4}>
                    <ProfileCard />
                </Col>
            </Row>
        </>
    );
};

export default Profile;
