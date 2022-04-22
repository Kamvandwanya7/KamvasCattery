describe('test my function bookingCost' , function(){
    it('it should return "180" when called with "{check_in_day: "Tuesday", duration: 4, cat_name : "Snowy"}', function(){

        assert.equal("180",bookingCost({
            check_in_day: 'Monday',
            duration: 4,
            cat_name : 'Snowy'
          }));
    });
    it('it should return "202.5" when called with "{check_in_day: "Wednesday", duration: 6, cat_name : "Snowy"}', function(){
        assert.equal("202.5",bookingCost({
            check_in_day: 'Wednesday',
            duration: 6,
            cat_name : 'Snowy'
          }));
    });
    it('it should return "382.5" when called with "{check_in_day: "Friday", duration: 10, cat_name : "Snowy"}', function(){
        assert.equal("382.5",bookingCost({
            check_in_day: 'Friday',
            duration: 10,
            cat_name : 'Snowy'
          }));
    });
});
