import { Pet } from './pet';

describe('Given Pet class', () => {
  describe('When called without owner parameter', () => {
    test('Return an object with the parameters', () => {
      const pet = new Pet('Braco', 'Carea Leones');
      expect(pet.name).toBe('Braco');
      expect(typeof pet.id).toBe('string');
      expect(pet.specie).toBe('Carea Leones');
      expect(pet.owner).toBe('Sin dueño');
      expect(pet.isAdopted).toBe(false);
    });
  });
  describe('When called with an owner parameter', () => {
    test('Return an object with the parameters given', () => {
      const pet = new Pet('Thor', 'Gran danes', 'Paloma');
      expect(pet.name).toBe('Thor');
      expect(typeof pet.id).toBe('string');
      expect(pet.specie).toBe('Gran danes');
      expect(pet.owner).toBe('Paloma');
      expect(pet.isAdopted).toBe(false);
    });
  });
  describe('When called without owner parameter', () => {
    test('Return an object with the parameters', () => {
      const pet = new Pet('Rodo', 'Pastor Aleman');
      expect(pet.name).toBe('Rodo');
      expect(typeof pet.id).toBe('string');
      expect(pet.specie).toBe('Pastor Aleman');
      expect(pet.owner).toBe('Paco');
      expect(pet.isAdopted).toBe(false);
    });
  });
});
