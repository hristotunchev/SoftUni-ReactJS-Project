import { useState } from "react";

export const useLocalStorage = (key, initialValue) => {
    const [state, setState] = useState(() => {
        const persistedStateSerialized = localStorage.getItem(key);

        if (persistedStateSerialized) {
            const persistedState = JSON.parse(persistedStateSerialized);
            return persistedState;
        };

        return initialValue;
    });

    const setLocalStorageState = (value) => {
        setState(value);        // check if value is function - if it is we should strigify its result

        localStorage.setItem(key, JSON.stringify(value));
    };

    return [
        state,
        setLocalStorageState
    ];
};