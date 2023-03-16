import { CartHelper } from '../pages/cart/cart.helper';
import { CommonPageHelper } from "../pages/common-page/common-page.helper";
import { HomeConstants } from '../pages/home/home.constants';
import { HomeHelper } from '../pages/home/home.helper';
import { LoginHelper } from '../pages/login/login.helper';
import { PlaceOrderConstants } from '../pages/place-order/place-order.constants';
import { PlaceOrderHelper } from '../pages/place-order/places-order.helper';
import { ProductHelper } from '../pages/product/product.helper';
import { SignUpHelper } from "../pages/sign-up/sign-up.helper";

describe("Place order", () => {
  it("Place order with newly created user account", () => {
    const username = CommonPageHelper.generateRandomString();
    const password = CommonPageHelper.generateRandomString();
    const productName = HomeConstants.testData.productName;
    const orderTestData = PlaceOrderConstants.testData;

    CommonPageHelper.navigateToTheApplication();
    SignUpHelper.createUserAccount(username, password)
    LoginHelper.login(username, password)
    CommonPageHelper.clickOnHomePage();
    HomeHelper.clickOnProductName(productName);
    ProductHelper.clickOnAddToProductButton();
    CommonPageHelper.clickOnCartOption();
    CartHelper.clickOnPlaceOrderButton();
    PlaceOrderHelper.insertName(orderTestData.name)
    PlaceOrderHelper.insertCountry(orderTestData.country)
    PlaceOrderHelper.insertCity(orderTestData.city)
    PlaceOrderHelper.insertCreditcCard(orderTestData.creditCard)
    PlaceOrderHelper.insertMonth(orderTestData.month)
    PlaceOrderHelper.insertYear(orderTestData.year)
    PlaceOrderHelper.clickOnPurchaseButton();
    PlaceOrderHelper.verifyPuchaseSuccessful();
  });
});
