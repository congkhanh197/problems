import checkHotelReservation from '../checkHotelReservation';
describe('Test hotel reservation', () => {
  test('Should return true for possible booking with 1 room', () => {
    const arrivals = [1, 2, 3];
    const departures = [2, 3, 4];
    const numOfRooms = 1;
    expect(checkHotelReservation(arrivals,departures,numOfRooms)).toBeTruthy()
  });
  test('Should return false for impossible booking with 1 room', () => {
    const arrivals = [1, 2, 3];
    const departures = [2, 4, 4];
    const numOfRooms = 1;
    expect(checkHotelReservation(arrivals,departures,numOfRooms)).toBeFalsy()
  });
  test('Should return false for possible booking with 2 room', () => {
    const arrivals = [1, 1, 2, 8,9];
    const departures = [2, 3, 5, 12, 10];
    const numOfRooms = 2;
    expect(checkHotelReservation(arrivals,departures,numOfRooms)).toBeTruthy()
  });
  test('Should return false for impossible booking with 2 room', () => {
    const arrivals = [1, 2, 3];
    const departures = [2, 4, 4];
    const numOfRooms = 2;
    expect(checkHotelReservation(arrivals,departures,numOfRooms)).toBeFalsy()
  });
  test('Should return false for possible booking with 5 room', () => {
    const arrivals = [1, 2, 3];
    const departures = [2, 4, 4];
    const numOfRooms = 5;
    expect(checkHotelReservation(arrivals,departures,numOfRooms)).toBeTruthy()
  });
  test('Should return false for impossible booking with 5 room', () => {
    const arrivals = [1, 2, 3];
    const departures = [2, 4, 4];
    const numOfRooms = 5;
    expect(checkHotelReservation(arrivals,departures,numOfRooms)).toBeFalsy()
  });
});
