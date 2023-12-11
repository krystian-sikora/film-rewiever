import { HttpClient, HttpHeaders} from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  constructor(private http: HttpClient) { }

  private headers: HttpHeaders = new HttpHeaders()
    .set('Authorization', 'Bearer ' + environment.API_TOKEN)
    .set('accept', 'application/json')


  authorize(): Observable<any> {
    return this.http.get(environment.API_URL + '/3/authentication', { headers: this.headers })
  }

  getPopular(): Observable<any> {
    return this.http.get(environment.API_URL + '/3/movie/popular', { headers: this.headers })
  }

  requestToken(): Observable<any> {
    return this.http.get(environment.API_URL +  '/3/authentication/token/new',  { headers: this.headers })
  }

  getImage(id: string): Observable<any> {
    return this.http.get(environment.API_URL + '/3/movie/' + id + '/images',  { headers: this.headers })
  }

  getMovieDetails(id: string): Observable<any> {
    return this.http.get(environment.API_URL + '/3/movie/' + id,  { headers: this.headers })
  }

  createSession(REQUEST_TOKEN: string): Observable<any> {
    return this.http.get(environment.API_URL +  '/3/authentication/session/new?api_key=' + environment.API_KEY + '&request_token=' + REQUEST_TOKEN)
  }

  getActors(): Observable<any> {
    //let headers = this.getHeaders()
    return this.http.get(environment.API_URL + '/3/trending/person/day', { headers: this.headers })
  }

  getUpcoming(): Observable<any> {
    //let headers = this.getHeaders()
    return this.http.get(environment.API_URL + '/3/movie/upcoming', { headers: this.headers })
  }

  getTopRatedTVSeries(): Observable<any> {
    //let headers = this.getHeaders()
    return this.http.get(environment.API_URL + '/3/tv/top_rated', { headers: this.headers })
  }

}