//specs go here
describe('Bubble Sort', function(){
    beforeEach(function(){
        counter = 0;
    })
    it('handles an empty array', function(){
      expect( bubbleSort([]) ).toEqual( [] );
      expect(counter).toEqual(0);
    });
    it('handles an unsorted array', function(){
        expect( bubbleSort([6,3,9,2,8,1]) ).toEqual( [1,2,3,6,8,9] );
        expect(counter).toEqual(10);
    });
    it('handles a sorted array', function(){
        expect( bubbleSort([1,2,3,4,5,6,8,9]) ).toEqual( [1,2,3,4,5,6,8,9] );
        expect(counter).toEqual(0);
    });
  });