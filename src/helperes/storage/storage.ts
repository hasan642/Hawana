/**
 * storage.ts
 * developed by Hasan Alawneh.
 * A file that contains a storage helper.
 * created at: 29/07/2021
 */

import RNAsyncStorage from '@react-native-async-storage/async-storage';
import { StorageKeys, SaveStorageParamList } from './storage.types';

/**
 * An async storage class.
 */
class AsyncStorage {
    /**
     * get data from storage.
     */
    get = async <T extends keyof SaveStorageParamList>(key: T): Promise<SaveStorageParamList[T]> => {
        try {
            const dataFromStorage = await RNAsyncStorage.getItem(key);
            const parsedData = this.returnData(dataFromStorage);
            return parsedData;
        } catch {
            return null as any;
        }
    };

    /**
     * get multiple data by multi keys.
     */
    getMultiple = async (keys: StorageKeys[]): Promise<[string, any][]> => {
        try {
            const arrOfDataFromStorage = await RNAsyncStorage.multiGet(keys);

            // parsing data from storage.
            arrOfDataFromStorage.forEach((it) => {
                // parse the value.
                let parsedVal = it[1];
                if (parsedVal && typeof parsedVal !== 'string') {
                    parsedVal = JSON.parse(parsedVal);
                }

                it[1] = parsedVal;
            });

            // return parsed data.
            return arrOfDataFromStorage;
        } catch (err) {
            console.log('error in getMultiple in storage helper', err);
            return null as any;
        }
    };

    /**
     * save data to storage.
     */
    save = async <T extends keyof SaveStorageParamList>(
        key: T,
        data: SaveStorageParamList[T]
    ): Promise<boolean> => {
        try {
            const handledData: string = this.convertData(data);
            await RNAsyncStorage.setItem(key, handledData);
            return true;
        } catch {
            return false;
        };
    };

    /**
     * delete item by key from storage.
     */
    clear = async (key: StorageKeys): Promise<boolean> => {
        try {
            await RNAsyncStorage.removeItem(key);
            return true;
        } catch {
            return false;
        }
    };

    /**
     * Delete multi items by keys.
     */
    clearMultiple = async (keys: StorageKeys[]): Promise<boolean> => {
        try {
            await RNAsyncStorage.multiRemove(keys);
            return true;
        } catch (error) {
            console.log('error in clearMultiple', error);
            return false;
        }
    };

    /**
     * delete all data from storage.
     */
    clearAll = async (): Promise<boolean> => {
        try {
            await RNAsyncStorage.clear();
            return true;
        } catch {
            return false;
        }
    };

    /**
     * A private function that returns the storage model.
     */
    private returnData = (str: any) => {
        try {
            const parsed = JSON.parse(str);
            return parsed;
        } catch {
            return str;
        }
    };

    /**
     * A private function that converts data type tp save it.
     */
    private convertData = (data: any) => {
        /**
         * assume that is "string".
         */
        let convertedData = String(data);

        /**
         * convert data based on type.
         */
        switch (typeof data) {
            case 'string':
                // do nothing (no need), bz it is already string.
                break;

            case 'object':
                convertedData = JSON.stringify(data);
                break;

            case 'function':
                throw new Error('function type is not allowed');

            case 'symbol':
                throw new Error('Symbol type is not allowed');

            default:
                // number, boolean, ....
                convertedData = String(data);
                break;
        }

        /**
         * return final converted data.
         */
        return convertedData;
    };

}

/**
 * export as default.
 */
export { RNAsyncStorage };
export default new AsyncStorage();
