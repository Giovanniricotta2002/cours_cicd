import ComputeService from '../func'


describe('sum module', () => {
    test('adds 1 + 2 to equal 3', () => {
        const test = ComputeService.Add(1, 3)
      expect(test).toBe(4);
    });
    test('adds 1 + 2 to equal 3', () => {
      const testv = ComputeService.Test
      expect(testv).toBe("dd");
  });
  });