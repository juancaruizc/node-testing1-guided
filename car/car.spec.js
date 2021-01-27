const Car = require('./car')

test('sanity', () => { // THE TEST
  // ASSERTIONS
  expect(3).toBe(3) // eslint-disable-line
  expect(3).not.toBe(4)
  expect(3).toBeGreaterThan(2)
})
it('is not the same toEqual and toBe', () => {
  let a = {}
  let b = {}
  let c = a

  expect(a).not.toBe(b)
  expect(a).toEqual(b)
  expect(a).toBe(c)
})
describe('Car class', () => {
  let prius
  beforeEach(() => {
    prius = new Car('toyota', 'prius')
  })
  it('exists', () => {
    expect(Car).toBeDefined()
  })
  it('creates instances of cars', () => {
    expect(prius).toBeInstanceOf(Car)
  })
  it('cars have a "make" prop', () => {
    expect(prius).toHaveProperty('make', 'toyota')
    expect(prius.make).toBe('toyota')
    // expect(prius).toEqual({ make: 'toyota' }) //bad
  })
  it('cars have a "model" prop', () => {
    expect(prius).toHaveProperty('model', 'prius')
  })
  it('has an odometer prop starting at zero', () => {
    expect(prius).toHaveProperty('odometer', 0)
  })
  it('car instances have a drive method', () => {
    expect(prius.drive).toBeInstanceOf(Function)
    expect(prius.drive).toBe(Car.prototype.drive)
  })
  it('drive method returns the driven distance', () => {
    // arrange
    const expected = `${10} km driven!`
    // act
    const actual = prius.drive(10)
    // assert
    expect(actual).toBe(expected)
  })
  it('drive method increases odometer by driven distance', () => {
    expect(prius.odometer).toBe(0) // do not repeat
    prius.drive(10)
    expect(prius.odometer).toBe(10)
    prius.drive(10)
    expect(prius.odometer).toBe(20)
  })
  it('driveAsync method RESOLVES to the driven distance', async () => {
    // act
    const distance = await prius.driveAsync(10)
    // assert
    expect(distance).toBe(10)
  })
  it('driveAsync method RESOLVES to the driven distance', () => {
    prius.driveAsync(10).then(distance => {
      expect(distance).toBe(10)
    })
  })
})
