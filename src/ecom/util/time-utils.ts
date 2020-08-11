
export class TimeUtils {
  static convertDate(ms: number): string {
    const date = new Date(ms); // Date 2011-05-09T06:08:45.178Z
    const year = date.getFullYear();
    const month = ("0" + (date.getMonth() + 1)).slice(-2);
    const day = ("0" + date.getDate()).slice(-2);
    return `${day}-${month}-${year}`;
  }

  static parse(str): Date {
    const y = str.substr(6, 4),
      m = str.substr(3, 2),
      d = str.substr(0, 2);
    return new Date(y, m - 1, d);
  }

  static addDays(date, days): Date {
    const result = new Date(date);
    result.setDate(result.getDate() + days);
    return result;
  }
}
