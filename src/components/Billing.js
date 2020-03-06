import React from 'react';

import Layout from '../components/Layout';
import SubscriptionCard from './SubscriptionCard';

const BillingComponent = () => {
    return (
        <>
            <Layout>
                <div className='billing__container'>
                    <div className='billing__header--container'>
                        <h2 className='m-0'>Subscriptions and Billing management</h2>

                        <ol class='breadcrumb'>
                            <li class='breadcrumb-item'>
                                <a href='/#'>Subscriptions and billing management</a>
                            </li>
                            <li class='breadcrumb-item active'>
                                Manage Subscriptions
                            </li>
                        </ol>
                    </div>

                    <div className='billing__container--inner'>
                        <SubscriptionCard />
                        <SubscriptionCard />
                    </div>
                </div>
            </Layout>

        </>
    );
}

export default BillingComponent;
