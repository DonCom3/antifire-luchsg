interface YMaps {
    ready: (data?) => void;
    Map: unknown;
    Placemark: unknown;
}

interface Window {
    ymaps?: YMaps;
}
