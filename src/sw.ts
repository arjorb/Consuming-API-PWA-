import {cleanupOutdatedCaches, precacheAndRoute} from 'workbox-precaching';
import { Route, registerRoute} from 'workbox-routing';
import { NetworkFirst } from 'workbox-strategies';

declare const self: ServiceWorkerGlobalScope;

cleanupOutdatedCaches();

self.skipWaiting();


// cache api calls

const fetchPostRoute = new Route(
    ({request}) => {
        return request.url === import.meta.env.VITE_BASE_URL;
    },
    new NetworkFirst({
        cacheName: "api/fecth-post",
    })
);

registerRoute(fetchPostRoute);