'use strict';
{
    // Наименование товара
    const productName = 'Березовый сок';

    // Количество товара
    const productAmount = 5;

    // Категория товара
    const productCategory = 'liquids';

    // Цена товара
    const productPrice = 1000;

    console.log('Товар:', productName);

    console.log(`Общая сумма товара при заказе ${productAmount} литр(ов): ${productPrice * productAmount} руб`);
}

{
    // Наименование товара
    const productName = 'Томатный сок';

    // Количество товара
    const productAmount = 13;

    // Категория товара
    const productCategory = 'liquids';

    // Цена товара
    const productPrice = 128;

    console.log('Товар:', productName);

    console.log(`Общая сумма товара при заказе ${productAmount} литр(ов): ${productPrice * productAmount} руб`);
}

{
    // Наименование товара
    const productName = prompt('Наименование товара');

    // Количество товара
    const productAmount = prompt('Количество товара. Введите число.');

    // Категория товара
    const productCategory = prompt('Категория товара');

    // Цена товара
    const productPrice = prompt('Цена товара. Введите число.');

    console.log("productName: ", typeof (productName));
    console.log("productAmount: ", typeof (productAmount));
    console.log("productCategory: ", typeof (productCategory));
    console.log("productPrice: ", typeof (productPrice));

    const productAmountToNumber = Number(productAmount);
    const productPriceToNumber = Number(productPrice);


    console.log(`На складе ${productAmountToNumber} единиц товара "${productName}" из категории "${productCategory}" по цене ${productPriceToNumber} за единицу товара. Общая сумма ${productPriceToNumber * productAmountToNumber} руб`);

    console.log("productAmountToNumber: ", typeof (productAmountToNumber));
    console.log("productPriceToNumber: ", typeof (productPriceToNumber));
}