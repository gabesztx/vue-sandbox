import { readFile, writeFile } from 'jsonfile';

export class JsonfileService {
  readJsonFile(file: any): Promise<any>{
    return readFile(file);
  }
  writeJsonFile(file: any, obj: any): Promise<void>{
    return writeFile(file, obj);
  }
}

export const jsFileService = new JsonfileService();
