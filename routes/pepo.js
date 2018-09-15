
/*
 * GET pepo page.
 */

exports.index = function(req, res){
  res.render('pepo', { title: 'pepo: Express Webapp', siteTitle: 'ΑΣΤΙΚΟ ΚΤΕΛ ΠΑΤΡΩΝ ΑΕ' });
};