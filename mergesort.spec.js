describe('Split Array function', function() {
  it('is able to split an array into two halves', function() {
    expect(split([4, 3, 6, 9])).toEqual([
      [4, 3],
      [6, 9],
    ]);
  });
  it('is able to split an odd array into two halves', function() {
    expect(split([4, 3, 6, 9, 7])).toEqual([
      [4, 3],
      [6, 9, 7],
    ]);
  });
});

describe('Merge function', function() {
  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(
      merge([
        [4, 3],
        [6, 9],
      ])
    ).toEqual([3, 4, 6, 9]);
  });
  it('is able to merge two odd sorted arrays into one sorted array', function() {
    expect(
      merge([
        [4, 3],
        [6, 9, 7],
      ])
    ).toEqual([3, 4, 6, 7, 9]);
  });
});

describe('MergeSort Function', function() {
  it('sorts arrays', function() {
    expect(mergeSort([6, 2, 8, 5, 3, 9])).toEqual([2, 3, 5, 6, 8, 9]);
    expect(mergeSort([6, 2, 8, 5, 3, 9, 12])).toEqual([2, 3, 5, 6, 8, 9, 12]);
    expect(mergeSort([1])).toEqual([1]);
  });
});
