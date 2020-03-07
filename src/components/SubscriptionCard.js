import React from 'react';
import { Link } from 'react-router-dom';

import { Table } from 'reactstrap';

const SubscriptionCard = () => {
    return (

        // Card
        <div className='subcard card'>

            <div className='row subcard__align'>
                <div className='col-12 col-md-4'>
                    <div className='card-img'>
                        <img src='' alt='Right Player' />
                        <p className='card-title'>Right Player</p>
                    </div>
                </div>

                <div className='col-12 col-md-4'>
                    <div className='sub-package'>
                        <p className='mb-0 sub-package-title'>Subscription Package</p>
                        <p className='sub-package-subtitle'>Pro Package - per device</p>

                        <p className='subcard__link'>
                            <Link>Change subscription</Link>
                        </p>
                    </div>
                </div>

                <div className='col-12 col-md-4'>
                    <div className='sub-package'>
                        <p className='mb-0 sub-package-title'>Duration</p>
                        <p className='sub-package-subtitle'>12 months, Expires on 11/12/2020</p>
                    </div>
                </div>
            </div>


            <div className='subcard__payment'>
                <div className='sub-package'>
                    <p className='mb-0 sub-package-title'>Payment details</p>
                </div>

                <hr style={{ height: '1px', width: '100%', backgroundColor: '#E4E4E4' }} />

                {/* Tables */}
                <div className='subcard__align'>
                    <Table borderless>
                        <thead>
                            <tr>
                                <th className='sub-package-title'>Date</th>
                                <th className='sub-package-title'>Order number</th>
                                <th className='sub-package-title'>Payment mode</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <th className='sub-package-subtitle'>12/12/2019</th>
                                <td className='sub-package-subtitle'>13558927400-280908</td>
                                <td className='sub-package-subtitle'>Credit token</td>
                                <td className='subcard__link'>
                                    <Link>Print purchase receipt</Link>
                                </td>
                            </tr>
                        </tbody>
                    </Table>

                </div>
            </div>
        </div>
    );
}

export default SubscriptionCard;
