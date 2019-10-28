const _checkAvailableRoom = (
  departures: number[],
  arrivalTime: number,
  numOfRooms: number,
  bookingIndex: number,
): number => {
  // for (let i = 0; i < numOfRooms; i++) {

  // }
  return 1;
};

/**
 * Check enough room for booking.
 * @param arrivals Arrival time of booking.
 * @param departures The departure time of booking.
 * @param numOfRooms The count of rooms.
 * @returns A boolean which tells whether it's possible to make a booking.
 */
const checkHotelReservation = (
  arrivals: number[],
  departures: number[],
  numOfRooms: number,
): boolean => {
  // JS pass reference throw parameter, so we need to create deep clone to new array.
  const listArrival = [...arrivals];
  const listDeparture = [...departures];
  // Sort both list arrival and departure
  listArrival.sort((a, b) => a - b);
  listDeparture.sort((a, b) => a - b);
  // Init room counter
  let countOfRooms = 1;

  for (
    let bookingIndex = 0;
    bookingIndex < listArrival.length - 1;
    bookingIndex++
  ) {
    // Check if departure of previous booking overlaps the arrival of next booking or not.
    if (
      _checkAvailableRoom(
        departures,
        listArrival[bookingIndex],
        numOfRooms,
        bookingIndex,
      )
    )
      countOfRooms++;
    else if (listDeparture[bookingIndex] < listArrival[bookingIndex + 1])
      countOfRooms--;
    if (countOfRooms > numOfRooms) return false;
  }

  return true;
};

export default checkHotelReservation;
