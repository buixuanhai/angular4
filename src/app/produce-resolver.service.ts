import { Injectable } from '@angular/core';
import { Resolve, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
@Injectable()
export class ProduceResolverService implements Resolve<any> {
    resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
      throw new Error('Method not implemented.');
    }


  constructor() { }

}
