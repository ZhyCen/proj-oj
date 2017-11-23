import { Injectable } from '@angular/core';
import { Problem } from "../models/problem.model";
import { PROBLEMS } from "../mock-problems";
import { Http, Response, Headers } from '@angular/http';
import { BehaviorSubject } from "rxjs/BehaviorSubject";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/toPromise";

@Injectable()
export class DataService {

  // problems: Problem[] = PROBLEMS;
  private problemsSourse = new BehaviorSubject<Problem[]>([]);

  constructor(private http: Http) { }

  getProblems(): Observable<Problem[]> {
    // return this.problems;
    this.http.get("api/v1/problems")
      .toPromise()
      .then((res: Response) => {
        this.problemsSourse.next(res.json());
      })
      .catch(this.handlerError);

      return this.problemsSourse.asObservable();
  }

  getProblem(id: number): Promise<Problem> {
    // return this.problems.find((problem) => problem.id === id);
    return this.http.get(`api/v1/problems/${id}`)
                      .toPromise()
                      .then((res: Response) => res.json())
                      .catch(this.handlerError);
  }

  addProblem(problem: Problem):Promise<Problem> {
    // problem.id = this.problems.length + 1;
    // this.problems.push(problem);
    let headers = new Headers({ 'content-type': 'application/json'});
    return this.http.post('api/v1/problems', problem, headers)
      .toPromise()
      .then ((res: Response) => {
        this.getProblems();
        return res.json();
      })
      .catch(this.handlerError);
  }

  buildAndRun(data: object):Promise<Problem> {
    let headers = new Headers({ 'content-type': 'application/json'});
    return this.http.post('api/v1/build_and_run', data, headers)
                    .toPromise()
                    .then ((res: Response) => {
                      console.log(res);
                      return res.json();
                    })
                    .catch(this.handlerError);
  }
  
  private handlerError(error: any): Promise<any> {
    console.error('An error occoured', error);
    return Promise.reject(error.body || error);
  }

}
