import { Injectable } from '@angular/core';
import { Activity } from '../shared/activity.model';
import { SAVED_ACTIVITIES } from '../shared/activities';

@Injectable()
export class ActivityService {

  constructor() { }

  getActivities(): Activity[] {
    return SAVED_ACTIVITIES.slice(0);
  }

  getTotalActivities(allActivities: Activity[]) {
    return allActivities.length;
  }

  getTotalDistance(allActivities: Activity[]) {
    let totalDistance = 0;
    // for every idx grab dist and add value to total.
    for ( let x = 0; x < allActivities.length; x++) {
      totalDistance += allActivities[x].distance;
    }
    // return the total distance
    return totalDistance;
  }

  // get the first date of objects
  getFirstDate(allActivities: Activity[]) {
    let earliestDate = new Date('02/02/9999');
    for (let x = 0; x < allActivities.length; x++) {
      const currentDate = allActivities[x].date ;
      if ( currentDate < earliestDate ) {
        earliestDate = currentDate;
      }
    }
    return earliestDate;
  }

}
