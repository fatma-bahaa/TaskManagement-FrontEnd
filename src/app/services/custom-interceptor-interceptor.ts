import { HttpInterceptorFn } from '@angular/common/http';

export const customInterceptorInterceptor: HttpInterceptorFn = (req, next) => {
  if (localStorage.getItem('userToken')){
    const newCloneRequest = req.clone({
      setHeaders: {
        'Authorization': 'Bearer ' + localStorage.getItem('userToken'),
      }
    })
    return next(newCloneRequest);
  }
  return next(req);
};
