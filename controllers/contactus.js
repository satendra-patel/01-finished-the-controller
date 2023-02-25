exports.getInfo=(req, res, next) => {
    res.render('contactus', {
        pageTitle: 'contact Us',
        path: '/contactus',
        formsCSS: true,
        productCSS: true,
        activeAddProduct: true
      });
  };
  exports.sendInfo = (req, res, next) => {
    
    res.redirect('/');
  };