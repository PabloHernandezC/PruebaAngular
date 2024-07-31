import { Injectable } from '@angular/core';
import {Location, LocationsResponse } from '../interface/data.interface';
import { BehaviorSubject, Observable, take, tap } from 'rxjs';
import { Apollo } from 'apollo-angular';
import { gql } from 'apollo-angular';
import { map } from 'rxjs/operators';

const GET_LOCATIONS = gql`
  query {
    locations {
      results {
        id
        name
        type
        dimension
      }
    }
  }
`;

@Injectable({
  providedIn: 'root'
})
export class LocacionesServicioService {

  locaciones: Location[] = [];
  private locationsSubject = new BehaviorSubject<Location[]>([]);
  locations$ = this.locationsSubject.asObservable();

  constructor(
    private apollo: Apollo
  ) { 
    this.getLocations();
  }

  getLocations() {
    this.apollo.watchQuery<LocationsResponse>({
      query: GET_LOCATIONS,
    }).valueChanges.pipe(
      take(1),
      tap(({data}) => {
        const {locations} = data;
        this.locationsSubject.next(locations.results)
      })
    ).subscribe();
  }

  consultar(): Observable<Location[]>{
    return this.apollo.watchQuery<LocationsResponse>({
      query: GET_LOCATIONS,
    }).valueChanges.pipe(
      map(result => result.data.locations.results)
    );
  }
}
