import test, { expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage'; 
import { CartPage } from '../Pages/cartPage';


test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
});

test("login test", async({page})=>{

    const logiPageObj = new LoginPage(page);
    await logiPageObj.login("bipin1234","Password_1234");

    //create the object of the cart page
    const cartPageObj= new CartPage(page);
    await cartPageObj.addToCart();


    // await .click(); //galaxy s6

    // await .click(); //add to cart

});