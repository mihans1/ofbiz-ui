export abstract class Model {

  getPreparedJson(): Object {
    let fields = Object.entries(this)
    let jsonObj = {}
    for (let [field, value] of fields) {
      if (field.startsWith('_to') || field.startsWith('__to')) {
        console.log("Skipping", field)
        continue;
      }

      if (value === null || value === undefined) continue;

      if (value instanceof Date) {
        jsonObj[field] = value.getTime();
      } else {
        jsonObj[field] = value;
      }
    }
    return jsonObj;
  }

  static fromJson<T extends Model>(json: Object, model: new() => T): T {
    const obj = new model();
    const keys = Object.keys(json);
    for (const key of keys) {
      if (json.hasOwnProperty(key)) {
        if (key.toLowerCase().endsWith('stamp') && typeof json[key] == 'number') {
          obj[key] = new Date(json[key]);
        } else {
          obj[key] = json[key];
        }
      }
    }
    return obj
  }

  static arrayFromJson<T extends Model>(json: Object[], model: { new(): T }): T[] {
    let arr = Array<T>();
    for (const obj of json) {
      arr.push(this.fromJson(obj, model));
    }
    return arr;
  }
}
