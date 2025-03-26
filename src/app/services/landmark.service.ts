import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { Landmark } from '../models/landmark/landmark.model';
import { environment } from '../../environment';

interface ApiResponse<T> {
  success: boolean;
  data: T;
  errorMessage?: string;
}

@Injectable({
  providedIn: 'root'
})
export class LandmarkService {

  private url = environment.apiUrl;
  constructor(private http: HttpClient) { }

  getAllLandmarks(): Observable<Landmark[]> {
    return this.http.get<ApiResponse<Landmark[]>>(`${this.url}/getAllLandmarks`).pipe(
      map(response => {
        if (response.success) {
          return response.data;
        } else {
          throw new Error(response.errorMessage);
        }
      }),
      catchError(this.handleError)
    );
  }

  getLandmarkByOrder(id: Number): Observable<Landmark | undefined> {
    return this.http.get<ApiResponse<Landmark>>(`${this.url}/getLandmarkByOrder?order=${id}`).pipe(
      map(response => {
        if (response.success) {
          return response.data;
        } else {
          throw new Error(response.errorMessage);
        }
      }),
      catchError(this.handleError)
    );
  }

  searchLandmarks(searchText: string): Observable<Landmark[]> {
    return this.http.get<ApiResponse<Landmark[]>>(`${this.url}/searchLandmarks?searchText=${searchText}`).pipe(
      map(response => {
        if (response.success) {
          return response.data;
        } else {
          throw new Error(response.errorMessage);
        }
      }),
      catchError(this.handleError)
    );
  }

  private handleError(error: HttpErrorResponse) {
    console.error('API Error: ', error);
    return throwError(() => {
      new Error('Something went wrong');
    })
  }
}