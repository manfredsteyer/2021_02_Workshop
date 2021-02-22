import { createFeatureSelector, createSelector } from '@ngrx/store';
import * as fromFlightBooking from './flight-booking.reducer';
import { FlightBookingAppStateSlice, flightBookingFeatureKey } from './flight-booking.reducer';

export const selectFlightBookingState = createFeatureSelector<fromFlightBooking.FlightBookingState>(
  fromFlightBooking.flightBookingFeatureKey
);

export const selectFlights = 
  (a: FlightBookingAppStateSlice) => a[flightBookingFeatureKey].flights;

export const selectFlights2 = createSelector(
  (a: FlightBookingAppStateSlice) => a[flightBookingFeatureKey].flights,
  (a: FlightBookingAppStateSlice) => a[flightBookingFeatureKey].denyList,
  (flights, denyList) => flights.filter(f => !denyList.includes(f.id))
);