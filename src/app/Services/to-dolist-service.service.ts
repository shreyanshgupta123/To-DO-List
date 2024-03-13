import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToDolistServiceService {

  constructor(private httpclient : HttpClient) { }

get_to_do_list()
{
  let url='https://dummyjson.com/todos';
  return url;
}
}
