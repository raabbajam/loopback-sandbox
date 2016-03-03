module.exports = function(Customer) {
  Customer.on('attached', function() {
    console.log(Object.keys(Customer.relations)); // stdout: [ 'accessTokens' ]
  });
};
