import test, { expect } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage'; 
import credentials from '../utilities/testData.json'; //credentials is a referece variable

test.beforeEach(async({page})=>{
    await page.goto("https://demoblaze.com/index.html");
});

test("login test", async({page})=>{

//await page.goto("https://demoblaze.com/index.html");

for(let i of credentials.users)
{
    const loginpageObj= new LoginPage(page);
  
   await loginpageObj.login(i.username,i.password);
   expect(page.locator("//a[@id='logout2']")).toHaveText("Log out");  
   await page.locator("//a[@id='logout2']").click();//perform logout  

}

});

test("AboutUsTC", async({page})=>{

    //await page.goto("https://demoblaze.com/index.html");
    console.log("this is About us TC under execution");
    await page.locator("//a[text()='About us']").click();
}

);

test.afterEach(async({page},testInfo)=>{

if(testInfo.status==="failed")
{
    await page.screenshot(
    {
        path: `screenshot/${testInfo.title}.png`,
        fullPage: true
    }

)
}

});
