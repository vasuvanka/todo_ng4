import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Task} from './../services/task';
import {Observable} from 'rxjs/Rx';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class TodoService {

  constructor(private http: HttpClient) {

  }

  postData(data: any): Observable<Task> {
    // const url = 'https://requestb.in/ui415fui';
    // const url = 'http://mockbin.org/bin/e3de745a-ca78-4a96-b8c9-e65183d01f49'
    const url = 'http://localhost:3000/users/';
    return this.http.post(url, data)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  getData(): Observable<Task[]> {
    const url = 'http://localhost:3000/users/';
    return this.http.get(url)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  removeData(data: any): Observable<Task[]> {
    // const url = 'https://requestb.in/ui415fui';
    // const url = 'http://mockbin.org/bin/e3de745a-ca78-4a96-b8c9-e65183d01f49'
    const url = 'http://localhost:3000/users/';
    return this.http.put(url, data)
      .map(this.extractData)
      .catch(this.handleErrorObservable);
  }

  private extractData(res: Response) {
    return res || {};
  }

  private handleErrorObservable(error: Response | any) {
    console.error(error.message || error);
    return Observable.throw(error.message || error);
  }

  private handleErrorPromise(error: Response | any) {
    console.error(error.message || error);
    return Promise.reject(error.message || error);
  }

}
