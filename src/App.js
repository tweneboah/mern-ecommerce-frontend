import { BrowserRouter as Router, Route } from 'react-router-dom';
import { Switch } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import HomeScreen from './screens/HomeScreen/HomeScreen';
import ProductScreen from './screens/ProductScreen';
import CartScreen from './screens/CartScreen';
import LoginScreen from './screens/LoginScreen';
import RegisterScreen from './screens/RegisterScreen';
import ProfileScreen from './screens/ProfileScreen';
import ShippingScreen from './screens/ShippingScreen';
import PaymentScreen from './screens/PaymentScreen';
import PlaceOrderScreen from './screens/PlaceOrderScreen';
import PlaceOrderScreenOld from './screens/PlaceOrderScreenOld';
import OrderScreen from './screens/OrderScreen';
import UserListScreen from './screens/UsersListScreen';
import AdminCreateProducts from './screens/AdminScreens/AdminCreateProducts';
import AdminFetchProducts from './screens/AdminScreens/AdminFetchProducts';

import MakePayment from './components/MakePayment';
import AdminAllOrdersScreen from './screens/AdminScreens/AdminAllOrdersScreen';
import AdminUpdateOrderToDeliverScreen from './screens/AdminScreens/AdminUpdateOrderToDeliverScreen';
import AdminAllPayments from './screens/AdminScreens/AdminAllPayments';
import AdminEditProduct from './screens/AdminScreens/AdminEditProduct';
import AdminDasboard from './screens/AdminScreens/AdminDasboard';
import EditProfileScreen from './screens/EditProfileScreen';
import Contact from './components/Contact';
import About from './components/About';
import Team from './components/Team';
import FashionCategories from './components/Categories/FashionCategories';
import GentsCategories from './components/Categories/GentsCategories';
import PasswordResetUpdate from './screens/PasswordReset/PasswordResetUpdate';
import PasswordResetSendToken from './screens/PasswordReset/PasswordResetSendToken';
import HomeAppliancesCategories from './components/Categories/HomeAppliancesCategories';
import HotDealsCategories from './components/Categories/HotDealsCategories';
import AutoPartsCategories from './components/Categories/AutoPartsCategories';
import LaptopsAndAccessoriesCategories from './components/Categories/LaptopsAndAccessoriesCategories';
import PhonesAndAccessoriesCategories from './components/Categories/PhoneAccessoriesCategories';
import Dashboard from './components/Admins/Dashboard';
import AllProductsList from './screens/AllProductsList';
import PaymentSuccess from './components/PaymentSuccess';
import PrivacyAndPolicy from './components/PrivacyAndPolicy';
import TermsAndConditions from './components/TermsAndConditions';

const App = () => {
  return (
    <>
      <Router>
        <Navbar />
        <Switch>
          <Route exact path='/' component={HomeScreen} />
          <Route exact path='/dashboard' component={Dashboard} />
          <Route exact path='/policy' component={PrivacyAndPolicy} />
          <Route exact path='/terms' component={TermsAndConditions} />
          <Route exact path='/products' component={AllProductsList} />
          <Route exact path='/payment-success' component={PaymentSuccess} />
          <Route exact path='/order2' component={PlaceOrderScreenOld} />
          {/* Categories */}
          <Route exact path='/fashions' component={FashionCategories} />
          <Route exact path='/gents' component={GentsCategories} />
          <Route
            exact
            path='/home-appliances'
            component={HomeAppliancesCategories}
          />
          <Route exact path='/auto-parts' component={AutoPartsCategories} />
          <Route exact path='/hot-deals' component={HotDealsCategories} />
          <Route
            exact
            path='/laptops-accessories'
            component={LaptopsAndAccessoriesCategories}
          />
          <Route
            exact
            path='/phones-accessories'
            component={PhonesAndAccessoriesCategories}
          />
          <Route exact path='/hot-deals' component={HotDealsCategories} />
          <Route exact path='/team' component={Team} />
          <Route
            exact
            path='/new-password-update/:token'
            component={PasswordResetUpdate}
          />

          <Route
            exact
            path='/password-request-send-token'
            component={PasswordResetSendToken}
          />
          {/* /cart/:id? means the id is optional */}
          <Route exact path='/cart/:id?' component={CartScreen} />
          <Route exact path='/contact' component={Contact} />
          <Route exact path='/about' component={About} />
          <Route exact path='/editprofile/:id?' component={EditProfileScreen} />
          <Route exact path='/product/:id' component={ProductScreen} />
          <Route exact path='/order/:id' component={OrderScreen} />
          <Route exact path='/login' component={LoginScreen} />
          <Route exact path='/placeorder' component={PlaceOrderScreen} />
          <Route exact path='/payment' component={PaymentScreen} />
          <Route exact path='/shipping' component={ShippingScreen} />
          <Route exact path='/profile' component={ProfileScreen} />
          <Route exact path='/register' component={RegisterScreen} />
          <Route exact path='/pay' component={MakePayment} />
          {/* Admin Routes */}
          <Route exact path='/admin/users' component={UserListScreen} />
          <Route
            exact
            path='/admin/createproducts'
            component={AdminCreateProducts}
          />
          <Route
            exact
            path='/admin/fetchproducts'
            component={AdminFetchProducts}
          />

          <Route
            exact
            path='/admin/allorders'
            component={AdminAllOrdersScreen}
          />

          <Route
            exact
            path='/admin/edit/product/:id'
            component={AdminEditProduct}
          />
          <Route
            exact
            path='/admin/updatetoorder/:id'
            component={AdminUpdateOrderToDeliverScreen}
          />
          <Route exact path='/admin/allpayments' component={AdminAllPayments} />
          <Route exact path='/admin/dashboard' component={AdminDasboard} />
        </Switch>

        <Footer />
      </Router>
    </>
  );
};

export default App;
