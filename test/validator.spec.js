// importamos el objeto `validator`, que contiene las funciones `isValid` y `maskify`
import validator from '../src/validator';

describe('validator', () => {
  it('debería ser un objeto', () => {
    expect(typeof validator).toBe('object');
  });

  describe('validator.isValid', () => {
    it('debería ser una función', () => {
      expect(typeof validator.isValid).toBe('function');
    });

    it('debería retornar true para "4485123087562803"', () => {
      expect(validator.isValid("4485123087562803")).toBe(true);
      // escribe aquí tu test
    });

    it('debería retornar true para "5564363463279231"', () => {
      expect(validator.isValid("5564363463279231")).toBe(true);
      // escribe aquí tu test
    });

    it('debería retornar false para "1233445465465712"', () => {
      expect(validator.isValid("1233445465465712")).toBe(false);
      // escribe aquí tu test
    });
  });

  describe('validator.maskify', () => {
    it('debería ser una función', () => {
      expect(typeof validator.maskify).toBe('function');
    });

    it('Debería retornar "************5616" para "4556364607935616"', () => {
      expect(validator.maskify("4556364607935616")).toBe('************5616');
      // escribe aquí tu test
    });

    it('Debería retornar "1" para "1"', () => {
      expect(validator.maskify("1")).toBe('1');
      // escribe aquí tu test
    });

    it('Debería retornar "******orld" para "helloworld"', () => {
      expect(validator.maskify("helloworld")).toBe('******orld');
      // escribe aquí tu test
    });
  });
});
