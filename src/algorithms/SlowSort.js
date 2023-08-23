import _ from 'lodash';

function* slowSort(arr, l = 0, h = arr.length - 1) {
    if (l >= h) return;

    const mid = Math.floor((l + h) / 2);

    yield* slowSort(arr, l, mid);
    yield* slowSort(arr, mid + 1, h);

    if (arr[mid].value > arr[h].value) {
        arr[mid].isComparing = true;
        arr[h].isComparing = true;
        yield _.cloneDeep(arr);

        [arr[mid], arr[h]] = [arr[h], arr[mid]];

        arr[mid].isComparing = false;
        arr[h].isComparing = false;
        yield _.cloneDeep(arr);
    }

    yield* slowSort(arr, l, h - 1);

    return arr;
}

export default slowSort;
