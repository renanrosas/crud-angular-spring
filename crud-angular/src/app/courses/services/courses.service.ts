import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Course } from '../models/course';
import { tap } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CoursesService {

  private readonly API = 'api/courses';

  constructor(private httpClient: HttpClient) { }

  list() {
    return this.httpClient.get<Course[]>(this.API)
    .pipe(
      //delay(5000),
      tap(courses => console.log(courses))
    );
  }

  save(record: Course){
    return this.httpClient.post<Course>(this.API, record);
  }
}
