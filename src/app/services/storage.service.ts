import { Injectable } from '@angular/core';
import { NativeStorage } from '@ionic-native/native-storage/ngx';

@Injectable({
  providedIn: 'root'
})
export class StorageService {

  constructor(private nativeStorage: NativeStorage) { }

  set(key: string, value: any) {
    this.nativeStorage.setItem(key, value);
  }

  get(key: string) {
    return this.nativeStorage.getItem(key);
  }

  remove(key: string) {
    this.nativeStorage.remove(key);
  }

}
