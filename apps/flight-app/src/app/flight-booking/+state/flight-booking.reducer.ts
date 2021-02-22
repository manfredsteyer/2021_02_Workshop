import { Flight } from '@flight-workspace/flight-lib';
import { Action, createReducer, on } from '@ngrx/store';
import * as FlightBookingActions from './flight-booking.actions';
import { mutableOn } from 'ngrx-etc';
export const flightBookingFeatureKey = 'flightBooking';

export interface FlightBookingAppStateSlice {
  [flightBookingFeatureKey]: FlightBookingState;
}

export interface FlightBookingState {
  flights: Flight[];
  basket: object;
  stats: object;
  denyList: number[];
}

export const initialState: FlightBookingState = {
  flights: [],
  basket: {},
  stats: {},
  denyList: [4]
};


export const reducer = createReducer(
  initialState,

  mutableOn(FlightBookingActions.flightsLoaded, (state, action) => {

    // produce:

    const flights = action.flights;
    
    // Mutations are not allowed
    state.flights = flights;

    // return { ...state, flights };

  }),

);

