const Product = require('../models/product');

const adminData = require("../routes/admin");

exports.getProducts = (req, res, next) => {
    //products is void at the beginning, but then after the code execution inside fetchAll method, products then become an
    //array of a list, then we can pass the products as prods.
    Product.fetchAll((products) => {
        res.render('shop/product-list', {prods: products, pageTitle : 'All products', path : '/products'});
    });
}

exports.getIndex = (req, res, next) => {
    Product.fetchAll((products) => {
        res.render('shop/index', {prods: products, pageTitle : 'Shop', path : '/'});
    });
}

exports.getCart = (req, res, next) => {
    res.render('shop/cart', {
        path:'/cart',
        pageTitle:'Your Cart'
    });
}

exports.getCheckout = (req, res, next) => {
    res.render('shop/checkout', {
        path:'/checkout',
        pageTitle:'Checkout'
    })
}