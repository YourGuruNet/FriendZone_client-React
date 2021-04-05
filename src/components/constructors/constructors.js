export class ActivityFormValues {
  title = '';
  category = '';
  description = '';
  date = null;
  city = '';
  venue = '';

  constructor(ActivityFormValues) {
    if (ActivityFormValues) {
      this.id = ActivityFormValues.id;
      this.title = ActivityFormValues.title;
      this.category = ActivityFormValues.category;
      this.description = ActivityFormValues.description;
      this.date = ActivityFormValues.date;
      this.city = ActivityFormValues.city;
      this.venue = ActivityFormValues.venue;
    }
  }
}

export class Activity {
  id = '';
  title = '';
  category = '';
  description = '';
  date = null;
  city = '';
  venue = '';
  houstUsername = '';
  isCanceled = false;
  attendees = [];

  constructor(Activity, loginUser) {
    if (Activity) {
      this.id = Activity.id;
      this.title = Activity.title;
      this.category = Activity.category;
      this.description = Activity.description;
      this.date = Activity.date;
      this.city = Activity.city;
      this.venue = Activity.venue;
      this.houstUsername = loginUser.loginUser;
      this.isCanceled = false;
      this.attendees = [];
    }
  }
}
