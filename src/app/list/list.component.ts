import { Component, OnInit } from '@angular/core';
import { Activity } from '../shared/activity.model';
import { ActivityService} from '../services/activity.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css']
})
export class ListComponent implements OnInit {

  activities: Activity[];
  totalActivities: number;
  totalDistance: number;
  firstDate: Date;

  constructor(
    private _activityService: ActivityService
  ) { }

  ngOnInit() {
    this.activities = this._activityService.getActivities();
    this.totalActivities = this._activityService.getTotalActivities(this.activities);
    this.totalDistance = this._activityService.getTotalDistance(this.activities);
    this.firstDate = this._activityService.getFirstDate(this.activities);
    console.log('In the list component init');
  }

}
