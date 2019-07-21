import { expect } from 'chai'
import { sum, sub, mult, div } from '../src/main'

describe('Calc', () => {
  // smoke tests
  describe('Smoke tests', () => {
    it('should exist the method sum', () => {
      expect(sum).to.exist
      expect(sum).to.be.a('function')
    })

    it('should exist the method sub', () => {
      expect(sub).to.exist
      expect(sub).to.be.a('function')
    })

    it('should exist the method mult', () => {
      expect(mult).to.exist
      expect(mult).to.be.a('function')
    })

    it('should exist the method div', () => {
      expect(div).to.exist
      expect(div).to.be.a('function')
    })
  })

  describe('Sum', () => {
    it('should return 4 when sum(2, 2)', () => {
      expect(sum(2, 2)).to.be.equal(4)
    })

    it('should return 6 when sum(2, 4)', () => {
      expect(sum(2, 4)).to.be.equal(6)
    })
  })

  describe('Sub', () => {
    it('should return 4 when sub(8, 4)', () => {
      expect(sub(8, 4)).to.be.equal(4)
    })

    it('should return 6 when sub(12, 6)', () => {
      expect(sub(12, 6)).to.be.equal(6)
    })

    it('should return -6 when sub(6, 12)', () => {
      expect(sub(6, 12)).to.be.equal(-6)
    })
  })

  describe('Mult', () => {
    it('should return 4 when mult(2, 2)', () => {
      expect(mult(2, 2)).to.be.equal(4)
    })

    it('should return 6 when mult(2, 3)', () => {
      expect(mult(2, 3)).to.be.equal(6)
    })

    it('should return -6 when mult(-3, 2)', () => {
      expect(mult(-3, 2)).to.be.equal(-6)
    })
  })

  describe('Div', () => {
    it('should return 4 when div(8, 2)', () => {
      expect(div(8, 2)).to.be.equal(4)
    })

    it('should return 6 when div(12, 2)', () => {
      expect(div(12, 2)).to.be.equal(6)
    })

    it('should return -6 when div(-12, 2)', () => {
      expect(div(-12, 2)).to.be.equal(-6)
    })

    it('should return "Impossible to divide by 0" when div(2, 0)', () => {
      expect(div(2, 0)).to.be.equal('Impossible to divide by 0')
    })
  })
})
