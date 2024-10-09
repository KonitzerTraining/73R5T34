import { HttpInterceptorFn } from '@angular/common/http';
import { tap } from 'rxjs';

export const loggingInterceptor: HttpInterceptorFn = (req, next) => {

  console.log('Outgoing:', req);
  
  return next(req).pipe(
    tap((event) => {
      console.log('Incoming:', event);
    })
  )
};
