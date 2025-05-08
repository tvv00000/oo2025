import { River } from '../12_proovikontrolltoo2/kt2';


describe('River Class', () => {

    it('length', () => {
      const river1 = new River('River1', 0, 0, 100, 0);
      expect(river1.getLength()).toBe(100);
    });
  
    it('description', () => {
      const river1 = new River('River1', 0, 0, 100, 0);
      expect(river1.getDescription()).toBe('River1 river [START (0, 0)] [END (100, 0)]');
    });
  
    it('split', () => {
      const river1 = new River('River1', 0, 0, 100, 0)
      const river2 = new River('River2', 0, 100, 100, 100, true, 0.25, river1, 1);
  
      const connectionPoint = river2.getConnectionPoint();
      expect(connectionPoint).toEqual({ x: 25, y: 100 });
    });
  
    it('target connection point for a river flowing into another river', () => {
      const river1 = new River('River1', 0, 0, 100, 0);
      const river2 = new River('River2', 0, 100, 100, 100, true, 0.25, river1, 1);
  
      const targetConnectionPoint = river2.getTargetConnectionPoint();
      expect(targetConnectionPoint).toEqual({ x: 100, y: 0 });
    });
  
    it('no getConnectionPoint()', () => {
        const river1 = new River('River1', 0, 0, 100, 0);
    
        expect(river1.getConnectionPoint()).toBeNull();
      });
    
    it('no getTargetConnectionPoint()', () => {
        const river2 = new River('River2', 0, 100, 100, 100);
        expect(river2.getTargetConnectionPoint()).toBeNull();
      });
  });