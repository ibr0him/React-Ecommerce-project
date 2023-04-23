import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { AdminCouponCard } from './AdminCouponCard';

export const AdminAllCoupon = ({ coupons }) => {
	return (
		<div>
			<div className='admin-content-text pb-4'>دفتر العناوين</div>
			{coupons ? (
				coupons.map((item, index) => <AdminCouponCard key={index} coupon={item} />)
			) : (
				<h4>لا يوجد منتجات حتي الان</h4>
			)}
		</div>
	);
};
