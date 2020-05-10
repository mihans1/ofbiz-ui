export class StatusValueConverter {
  toView(status) {
    switch (status) {
      case 'PTS_CREATED_AS':
        return 'ASSIGNED';
      case 'PTS_CREATED':
        return 'CREATED';
      case 'TIMESHEET_IN_PROCESS':
        return 'IN PROGRESS';
      default:
        return 'UNKNOWN';
    }
  }
}
