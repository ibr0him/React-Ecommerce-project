import {
	UserRoutes,
	AdminRoutes,
	NotUserRoutes,
	VendorRoutes
} from './hook/auth/protect-route-hook';
import { HomePage } from './Page/Home/HomePage';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Footer from './Components/Utility/Footer';
import { NavBarLogin } from './Components/Utility/NavBarLogin';
import { LoginPage } from './Page/Auth/LoginPage';
import { RegisterPage } from './Page/Auth/RegisterPage';
import { AllCategoryPage } from './Page/Category/AllCategoryPage';
import { AllBrandPage } from './Page/Brand/AllBrandPage';
import { ShopProductsPage } from './Page/Products/ShopProductsPage';
import { ProductDetailsPage } from './Page/Products/ProductDetailsPage';
import { CartPage } from './Page/Cart/CartPage';
import { PaymentMethodPage } from './Page/CheckOut/PaymentMethodPage';
import { AdminAllProductsPage } from './Page/Admin/AdminAllProductsPage';
import { AdminAddBrandPage } from './Page/Admin/AdminAddBrandPage';
import { AdminAddCategoryPage } from './Page/Admin/AdminAddCategoryPage';
import { AdminAddProductPage } from './Page/Admin/AdminAddProductPage';
import { AdminAllOrdersPage } from './Page/Admin/AdminAllOrdersPage';
import { AdminOrderDetailsPage } from './Page/Admin/AdminOrderDetailsPage';
import { AdminAddSubCategoryPage } from './Page/Admin/AdminAddSubCategoryPage';
import { UserAllOrdersPage } from './Page/User/UserAllOrdersPage';
import { UserFavoriteProductsPage } from './Page/User/UserFavoriteProductsPage';
import { UserAllAddressesPage } from './Page/User/UserAllAddressesPage';
import { UserEditAddressPage } from './Page/User/UserEditAddressPage';
import { UserAddAddressPage } from './Page/User/UserAddAddressPage';
import { UserProfilePage } from './Page/User/UserProfilePage';
import { AdminEditProductPage } from './Page/Admin/AdminEditProductPage';
import { ForgetPasswordPage } from './Page/Auth/ForgetPasswordPage';
import { ResetPasswordPage } from './Page/Auth/ResetPasswordPage';
import { AdminAddCouponPage } from './Page/Admin/AdminAddCouponPage';
import { AdminAllCouponPage } from './Page/Admin/AdminAllCouponPage';
import { VendorAllProductsPage } from './Page/Vendor/VendorAllProductsPage';
import { VendorAllCouponPage } from './Page/Vendor/VendorAllCouponPage';
import { VendorAddCouponPage } from './Page/Vendor/VendorAddCouponPage';
import { VendorAddProductPage } from './Page/Vendor/VendorAddProductPage';
import { VendorEditProductPage } from './Page/Vendor/VendorEditProductPage';
import { VendorAllOrdersPage } from './Page/Vendor/VendorAllOrdersPage';
import { VendorOrderDetailsPage } from './Page/Vendor/VendorOrderDetailsPage';
import { ProductsByCategory } from './Page/Products/ProductsByCategory';
import { ProductsByBrand } from './Page/Products/ProductsByBrand';

function App() {
	return (
		<div className='font'>
			<NavBarLogin />
			<BrowserRouter>
				<Routes>
					<Route index element={<HomePage />} />
					<Route path='/allcategory' element={<AllCategoryPage />} />
					<Route path='/allbrands' element={<AllBrandPage />} />
					<Route path='/allproducts' element={<ShopProductsPage />} />
					<Route path='/allproducts/:id' element={<ProductDetailsPage />} />
					<Route path='/cart' element={<CartPage />} />
					<Route path='/products/category/:id' element={<ProductsByCategory />} />
					<Route path='/products/brand/:id' element={<ProductsByBrand />} />
					
					<Route element={<NotUserRoutes />}>
						<Route path='/login' element={<LoginPage />} />
						<Route path='/register' element={<RegisterPage />} />
						<Route path='/user/forget-password' element={<ForgetPasswordPage />} />
						<Route path='/user/reset-password' element={<ResetPasswordPage />} />
					</Route>

					<Route element={<AdminRoutes />}>
						<Route path='/admin/allproducts' element={<AdminAllProductsPage />} />
						<Route path='/admin/allorders' element={<AdminAllOrdersPage />} />
						<Route path='/admin/order/:id' element={<AdminOrderDetailsPage />} />
						<Route path='/admin/addbrand' element={<AdminAddBrandPage />} />
						<Route path='/admin/add-coupon' element={<AdminAddCouponPage />} />
						<Route path='/admin/all-coupon' element={<AdminAllCouponPage />} />
						<Route path='/admin/addcategory' element={<AdminAddCategoryPage />} />
						<Route path='/admin/addsubcategory' element={<AdminAddSubCategoryPage />} />
						<Route path='/admin/addproduct' element={<AdminAddProductPage />} />
						<Route path='/admin/editproduct/:id' element={<AdminEditProductPage />} />
					</Route>

					<Route element={<VendorRoutes />}>
						<Route path='/vendor/all-products' element={<VendorAllProductsPage />} />
						<Route path='/vendor/all-coupon' element={<VendorAllCouponPage />} />
						<Route path='/vendor/all-orders' element={<VendorAllOrdersPage />} />
						<Route path='/vendor/order/:id' element={<VendorOrderDetailsPage />} />
						<Route path='/vendor/add-coupon' element={<VendorAddCouponPage />} />
						<Route path='/vendor/add-product' element={<VendorAddProductPage />} />
						<Route path='/vendor/edit-product/:id' element={<VendorEditProductPage />} />
					</Route>

					<Route element={<UserRoutes />}>
						<Route path='/order/paymentmethod' element={<PaymentMethodPage />} />
						<Route path='/user/allorders' element={<UserAllOrdersPage />} />
						<Route path='/user/favoriteproducts' element={<UserFavoriteProductsPage />} />
						<Route path='/user/address' element={<UserAllAddressesPage />} />
						<Route path='/user/edit-address' element={<UserEditAddressPage />} />
						<Route path='/user/add-address' element={<UserAddAddressPage />} />
						<Route path='/user/profile' element={<UserProfilePage />} />
					</Route>
				</Routes>
			</BrowserRouter>
			<Footer />
		</div>
	);
}

export default App;
