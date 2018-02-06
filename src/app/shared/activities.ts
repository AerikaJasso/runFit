import { Activity } from './activity.model';

export const SAVED_ACTIVITIES: Activity[] = [
    {
        'id': 1,
        'name': 'Devils Run',
        'date': new Date('11/10/2017'),
        'distance': 15.0,
        'comments': 'What a Killer',
        'gpxData': '../../assets/gpx/devils-slide.gpx'
    },
    {
        'id': 2,
        'name': 'Skyline to the Ocean',
        'date': new Date('11/10/2017'),
        'distance': 25.5,
        'comments': 'The most beautifull train in the Pacific',
        'gpxData': '../../assets/gpx/skyline.gpx'

    },
    {
        'id': 3,
        'name': 'Pacific Palisades',
        'date': new Date('12/10/2017'),
        'distance': 5.59,
        'comments': 'Great view of the Southern California Coast. As well as stunning golf course.',
        'gpxData': '../../assets/gpx/pacific.gpx'

    }
];
