/**
 * @param {string} val
 * @return {Object}
 */
var expect = function(val) {
    let Obj = {
        toBe: function(val2) {
             if(val === val2) {
                return true 
            }else {
                throw new Error("Not Equal");
            }
        },
        notToBe: function(val3) {
            if(val != val3) {
                return true
            }else{
              throw new Error("Equal");
            }
            
        }

    }
    return Obj
    
};

/**
 * expect(5).toBe(5); // true
 * expect(5).notToBe(5); // throws "Equal"
 */

console.log(expect('10').notToBe(10))