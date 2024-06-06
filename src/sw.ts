import { cleanupOutdatedCaches, precacheAndRoute } from "workbox-precaching";
import { Route, NavigationRoute, registerRoute } from "workbox-routing";
import { NetworkFirst, CacheFirst, NetworkOnly } from "workbox-strategies";
import { BackgroundSyncPlugin } from "workbox-background-sync";

declare const self: ServiceWorkerGlobalScope;

cleanupOutdatedCaches();

precacheAndRoute(self.__WB_MANIFEST);

self.skipWaiting();

// cache api calls
const fetchPostRoute = new Route(
  ({ request }) => {
    return request.url === "https://jsonplaceholder.typicode.com/photos";
  },
  new NetworkFirst({
    cacheName: "api/fecth-post",
  })
);
registerRoute(fetchPostRoute);

// cache images
const imageRoute = new Route(
  ({ request, sameOrigin }) => {
    return sameOrigin && request.destination === "image";
  },
  new CacheFirst({
    cacheName: "images",
  })
);

registerRoute(imageRoute);

//=======================================================================

// cache navigation
const navigationRoute = new NavigationRoute(
    new NetworkFirst({
        cacheName: "navigation",
        networkTimeoutSeconds: 3,
    })
);

registerRoute(navigationRoute);

// background sync => Helps to submit our post and patch request when the user is offline and sync it when the user is back online

const bgSyncPlugin = new BackgroundSyncPlugin('backgroundSyncQueue', {
    maxRetentionTime: 24 * 60 // Retry for max of 24 Hours
});

const postSubmitRoute = new Route(
    ({request}) => {
        return request.url === import.meta.env.VITE_BASE_URL + '/posts/create';
    },
    new NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'POST'
)

registerRoute(postSubmitRoute);

const editPostRoute = new Route(
    ({request}) => {
        return request.url === import.meta.env.VITE_BASE_URL + '/posts/edit';
    },
    new NetworkOnly({
        plugins: [bgSyncPlugin]
    }),
    'PATCH'
)

registerRoute(editPostRoute);
