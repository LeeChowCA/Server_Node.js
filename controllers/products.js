const Product = require('../models/product');

const adminData = require("../routes/admin");

exports.getAddProduct = (req, res, next) => {
    res.render('admin/add-product', {pageTitle: 'Add Product', path: '/admin/add-product'})
}

exports.postAddProduct = (req, res, next) => {
    const product = new Product(req.body.title);
    product.save();
    res.redirect('/');
}

exports.getProducts = (req, res, next) => {
    //products is void at the beginning, but then after the code execution inside fetchAll method, products then become an
    //array of a list, then we can pass the products as prods.
    Product.fetchAll((products) => {
        res.render('shop/product-list', {prods: products, pageTitle : 'Shop', path : '/'});
    });
}