const {textGenerator, validator, checkAll} = require('./helper');

test('should return element with a content', ()=>{
const text = textGenerator('Ahmad', 33);
expect(text).toBe('Ahmad ( 33 years old )');

const text2 = textGenerator('Ali', 33);
expect(text2).toBe('Ali ( 33 years old )');

const text3 = textGenerator('amir', 33);
expect(text3).toBe('amir ( 33 years old )');
});

test('should return true or false',()=>{
    const check = validator(' ',false, true);
    expect(check).toBe(false);
});
test('should return false or true',()=>{
    const check = checkAll(' ', 22);
    expect(check).toBe(false);
})
