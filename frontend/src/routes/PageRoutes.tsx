import React, { Suspense } from "react";
import { Route, Routes } from "react-router-dom";

// Lazy-loaded components
const LandingPage = React.lazy(() => import("../pages/LandingPage"));
const SignPage = React.lazy(() => import("../pages/SignPage"));
const OrderCheckoutPage = React.lazy(
  () => import("../pages/OrderCheckoutPage")
);
const OrderForm = React.lazy(
  () => import("../components/specific/Order/OrderForm")
);
const StorePage = React.lazy(() => import("../pages/StorePage"));
const TossPaymentsCheckoutSuccess = React.lazy(
  () =>
    import(
      "../components/specific/Order/TossPayments/TossPaymentsCheckoutSuccess"
    )
);
const TossPaymentsCheckoutFail = React.lazy(
  () =>
    import("../components/specific/Order/TossPayments/TossPaymentsCheckoutFail")
);
const SellerMyPage = React.lazy(() => import("../pages/SellerMyPage"));
const Dashboard = React.lazy(
  () => import("../components/specific/Seller/Dashboard")
);
const Menus = React.lazy(() => import("../components/specific/Seller/Menus"));
const StoreList = React.lazy(
  () => import("../components/specific/Store/StoreList")
);
const StoreDetail = React.lazy(
  () => import("../components/specific/Store/StoreDetail")
);
const AddFoodPage = React.lazy(() => import("../pages/AddFoodPage"));
const AddSubscribePage = React.lazy(() => import("../pages/AddSubscribePage"));
const BuyerMyPage = React.lazy(() => import("../pages/BuyerMyPage"));
const NotFoundPage = React.lazy(() => import("../pages/NotFoundPage"));
const ShoppingCart = React.lazy(
  () => import("../components/specific/Order/ShoppingCart")
);
const TossPaymentsBillingCheckoutSuccess = React.lazy(
  () =>
    import(
      "../components/specific/Order/TossPaymentsBilling/TossPaymentsBillingCheckoutSuccess"
    )
);
const SubscribeDetail = React.lazy(
  () => import("../pages/SubscribeDetailPage")
);
const SearchResultPage = React.lazy(() => import("../pages/SearchResultPage"));
const ReviewList = React.lazy(
  () => import("../components/specific/Seller/ReviewList")
);

const PageRoutes = () => {
  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Routes>
        {/* Common Domain */}
        <Route index element={<LandingPage />} />
        <Route path="/sign" element={<SignPage />} />
        {/* Order Domain */}
        <Route path="/orders" element={<OrderCheckoutPage />}>
          <Route path="form" element={<OrderForm />} />
          <Route path="success" element={<TossPaymentsCheckoutSuccess />} />
          <Route
            path="billing/success"
            element={<TossPaymentsBillingCheckoutSuccess />}
          />
          <Route path="fail" element={<TossPaymentsCheckoutFail />} />
          <Route path="cart" element={<ShoppingCart />} />
        </Route>
        {/* Member Domain */}
        <Route path="/mypage" element={<BuyerMyPage />} />
        <Route path="/seller" element={<SellerMyPage />}>
          <Route index element={<Dashboard />} />
          <Route path="reviews" element={<ReviewList />} />
          <Route path="menus" element={<Menus />} />
          <Route path="add/food" element={<AddFoodPage />} />
          <Route path="add/subscribe" element={<AddSubscribePage />} />
          <Route path="subscribe/detail" element={<SubscribeDetail />} />
        </Route>
        {/* Store Domain */}
        <Route path="/store" element={<StorePage />}>
          <Route index element={<StoreList />} />
          <Route path=":id" element={<StoreDetail />} />
          <Route path="search/result" element={<SearchResultPage />} />
        </Route>
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Suspense>
  );
};

export default PageRoutes;
