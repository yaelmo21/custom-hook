import { useEffect, useRef, useState } from "react";

export const useFetch = (url) => {
    const isMoutent = useRef(true);
    const [state, setState] = useState({
        data: null,
        loading: true,
        error: null,
    });

    useEffect(() => {
        return () => {
            isMoutent.current = false;
        }
    }, [])

    useEffect(() => {
        setState({
            data: null,
            loading: true,
            error: null,
        });
        fetch(url)
            .then((resp) => resp.json())
            .then((data) => {
                setTimeout(() => {
                    if (isMoutent.current) {
                        setState({
                            loading: false,
                            error: null,
                            data,
                        });
                    }
                }, 4000);
            }).catch((error) => {
                setState({
                    data: null,
                    loading: false,
                    error: 'No se pudo cargar la info',
                });
            })
    }, [url]);

    return state;
};