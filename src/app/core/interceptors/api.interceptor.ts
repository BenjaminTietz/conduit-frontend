import { Injectable } from "@angular/core";
import {
  HttpEvent,
  HttpInterceptor,
  HttpHandler,
  HttpRequest,
} from "@angular/common/http";
import { Observable } from "rxjs";
import { ConfigService } from "../services/config.service";

@Injectable()
export class ApiInterceptor implements HttpInterceptor {
  constructor(private config: ConfigService) {}

  intercept(
    req: HttpRequest<any>,
    next: HttpHandler,
  ): Observable<HttpEvent<any>> {
    const apiUrl = this.config.apiUrl;
    const apiReq = req.clone({
      url: `${apiUrl}${req.url}`,
    });

    return next.handle(apiReq);
  }
}
