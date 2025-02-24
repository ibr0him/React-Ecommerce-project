import React from 'react';
import { Row, Col, Spinner } from 'react-bootstrap';
import { ToastContainer } from 'react-toastify';
import avatar from '../../Images/avatar.png';
import AdminAddBrandHook from '../../hook/brand/add-brand-hook';

export const AdminAddBrand = () => {
	const [name, image, loading, isPress, handleSubmit, onImageChange, onChangeName] =
		AdminAddBrandHook();
	return (
		<div>
			<Row className='justify-content-start '>
				<div className='admin-content-text pb-4'>اضف ماركه جديده</div>
				<Col sm='8'>
					<div className='text-form pb-2'>صوره الماركه</div>
					<div>
						<label for='upload-photo'>
							<img
								src={image}
								alt='fzx'
								height='100px'
								width='120px'
								style={{ cursor: 'pointer' }}
							/>
						</label>
						<input
							type='file'
							name='photo'
							onChange={onImageChange}
							id='upload-photo'
							hidden={true}
						/>
					</div>
					<input
						type='text'
						value={name}
						className='input-form d-block mt-3 px-3'
						placeholder='اسم الماركه'
						onChange={onChangeName}
					/>
				</Col>
			</Row>
			<Row>
				<Col sm='8' className='d-flex justify-content-end '>
					<button onClick={handleSubmit} className='btn-save d-inline mt-2 '>
						حفظ التعديلات
					</button>
				</Col>
			</Row>
			{isPress ? (
				loading ? (
					<Spinner animation='border' variant='primary' />
				) : (
					<h4>تم الانتهاء</h4>
				)
			) : null}
			<ToastContainer />
		</div>
	);
};
