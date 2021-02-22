import { HttpClient, HttpHeaders, HttpParams } from '@angular/common/http';
import { combineLatest, interval, Observable, of, Subject } from 'rxjs';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl } from "@angular/forms";
import { catchError, concatMap, debounceTime, delay, distinctUntilChanged, exhaustMap, filter, map, mergeMap, share, shareReplay, startWith, switchMap, takeUntil, tap } from 'rxjs/operators';
import { Flight } from '@flight-workspace/flight-lib';

@Component({
    selector: 'flight-lookahead',
    templateUrl: './flight-lookahead.component.html'
})

export class FlightLookaheadComponent implements OnInit, OnDestroy {

    private closeSub = new Subject<void>();

    constructor(private http: HttpClient) {
    }
  

    control: FormControl;
    flights$: Observable<Flight[]>; // Ausgabe => Senke
    loading = false;

    online$: Observable<boolean>;

    ngOnInit() {
        this.control = new FormControl();

        // 1. Quellen als Observables
        // 2. Senken als Observables
        // 3. Quellen ---> Senken "pipen"
        // 4. Observables, die mehrfach verwendet werden --> HOT

        this.online$
            = interval(2000).pipe(      // ..1..2..3..4..5
                startWith(0),   // 0..1..2..3..4..5
                map(_ => Math.random() < 0.5), // t, t, t, f, f, t
                map(_ => true), // t, t, t, f, f, t
                distinctUntilChanged(), // t, f, t
                // share()
                shareReplay({bufferSize: 1, refCount: true})
            );

        const input$ = this.control.valueChanges.pipe(
            debounceTime(300),
            filter(v => v.length >= 3),
        )

        this.flights$ = combineLatest([input$, this.online$]).pipe(
            filter( ([_, online]) => online),
            map(([input,_]) => input),
            tap(v => this.loading = true),
            switchMap(input => this.load(input)),
            tap(v => this.loading = false),
            takeUntil(this.closeSub)
        );

    }

    /*
        Service
            flights$
            online$
            loading$

            private input$ = new Subject();

            search(value: string) {
                this.input$.next(value);
            }

    */

    ngOnDestroy(): void {
        this.closeSub.next();
    }

    load(from: string) {
        const url = "http://www.angular.at/api/flight";

        const params = new HttpParams()
            .set('from', from);

        const headers = new HttpHeaders()
            .set('Accept', 'application/json');

        return this.http.get<Flight[]>(url, { params, headers }).pipe(
            //delay(7000)
            catchError(err => {
                console.error('err', err);
                return of([]);
            }),
        )

    };


}
