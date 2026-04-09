import { Locator, Page } from "@playwright/test";

export class CartPage
{
    page:Page;
    samsungGalaxyS6:Locator;
    addToCartButton:Locator;

    constructor(page:Page)
    {
        this.page=page;
        this.samsungGalaxyS6=page.locator("//a[normalize-space()='Samsung galaxy s6']");
        this.addToCartButton=page.locator("//a[@class='btn btn-success btn-lg']");
    }

    async addToCart()
    {
        await this.samsungGalaxyS6.click();
        await this.addToCartButton.click();
    }


}