'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "890bc725deeeb504b9873d88ad82405f",
".git/config": "97a068217cf453f1b7030b123d907673",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "83b55a1a78725a67191f8ca929aef0e4",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "3c5989301dd4b949dfa1f43738a22819",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/update.sample": "7bf1fcc5f411e5ad68c59b68661660ed",
".git/index": "6522dfab26e703e621d89f51607a8e0e",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "cc43cfcc4b84ee4ee055044d35e7c44e",
".git/logs/refs/heads/main": "516d3503d92693074a272e15a1aab6ee",
".git/logs/refs/remotes/origin/main": "d85b7b75d4976a5cc67b897997fea7ad",
".git/objects/03/70170e0d538a7fc24a756cf8ca4c7c9012c4b6": "02d58e117ba65cbbb00f675d618e25f7",
".git/objects/13/5a3f566ef0f67f055309dc4ab65aa26ac69967": "b9e902e0488ad9c20b4e1c6698a09098",
".git/objects/20/5bb5db271c6d8de8399864c7bb9b917f638893": "c993b22f115d7f3ae6d5b7b212806539",
".git/objects/2a/0e254a9debab60dc1c3abbe673b52c3416069e": "f905f5fde54af111ecc386bb2374b046",
".git/objects/35/13d5f16279108c6748e0bf06ba25a97f35fe19": "33704eb51621f1d3b941122ae2e2f143",
".git/objects/45/ed19cb756d7aece5ca7c16c77edaa805382e05": "3b8493c520e9ec4a263b51bffb3da25d",
".git/objects/46/4ab5882a2234c39b1a4dbad5feba0954478155": "2e52a767dc04391de7b4d0beb32e7fc4",
".git/objects/5b/7262a7003000d260faccba1bf82b4aee57bb0f": "e31cb5112f9f35f88bdbbfd939b93b07",
".git/objects/5c/ab0f911f7e40e0eca1beb326b692371771bfc7": "f13ac1651d3dea7713a6860abf1338b4",
".git/objects/67/490ace243f35d932d4ac50e9e3c11910376489": "6fd01eab607cb357eec020945d58d860",
".git/objects/69/26c555d84b80c09b8821e9b269454924838357": "151f4fdff2fa6de7a529ca367f5e4558",
".git/objects/6c/1aa6fab31fa2ca38b1780003f92f6715108be4": "177391765827e540ee58561754c1fa9b",
".git/objects/6f/163fe2d2023e0a28ea2fb63be22ac1118e9271": "376ce44ef7b81289acffaa6bea9da10a",
".git/objects/79/c21ee0675445dcbb96c4e57722812a5657ad6b": "6580e1e5544358b20469c5724d9f5e8c",
".git/objects/7e/2550a0d5341c90a9c62cff95e98494adb06671": "f2d30b9d608136211e8a765b8c6a2f4e",
".git/objects/87/b4235f6eca5c59cd0d0483b13815794209c692": "09bbeedfe3968f8ebdc2392da06940c1",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/92/8ad36f9c89327efe28a980891812148d466a77": "0f82dfffcc185432d9776c2657e219d2",
".git/objects/a8/3a17d54b6dc2156c855c6580301cefc9c8d017": "6525101be8d70b808a809af9c83fa4ad",
".git/objects/a8/4d6949177f3f56f9a9e89a4356c03f4c9f7e99": "f5111096ddfd250ac17a82482988f963",
".git/objects/ae/3ec2fdb4294cd08c8846e6b8b10988a2eecd4e": "6ed0d53d89b50281af61985b97c3bdf0",
".git/objects/b2/7565f857cb894f1cefb370de74fb6ac1814b29": "0b4868561b526a22dcad261127df056c",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/bd/7f66dbc8c75540346a0c4a01d3309ffd9949d5": "44d7ae582fa41a16b5a11f9efedb07f8",
".git/objects/be/956d6b856ccfefbfead1f66b6ae8d6878d9f4e": "7d72503731618c04e5843970c19d3ded",
".git/objects/c5/5886b9603bd2f85bfc95c542503e9177169b00": "62843df56bdb056dd05eabacd6472430",
".git/objects/c7/d5881578ba308a6bb6f11b9e0bcdd89a42526f": "72d8e68a4dc443c3e527b4545a2c9ecf",
".git/objects/ca/6932eb31ed8d6a13831974e486582314403307": "4d9e5de860e078881ddcb88960eefb59",
".git/objects/d3/f533188a917962c4e2488e9784b56125713126": "bca9468178f321e5b352a3565a9aa1b0",
".git/objects/da/799f13beaa5d797e997ad842b580dcc47ef4e3": "08ab93d5e3d02199170401c83e9e31f5",
".git/objects/e1/9891dbc3a7bcd000ab13d763e8b7043cb13c78": "e73cd9d4e94a26921ef01a03a02445b9",
".git/objects/e6/258bbe4e385084413f7f5efbcb2f1ffad61a04": "366309a877c388cc1d654a39bff51ed6",
".git/objects/ed/5f64dd42c44cc609bd931f9332bdc9005b7b43": "c47abb0cff0e366f6fe569f2ee457c4f",
".git/objects/ef/bb395599f71995c7153a39136989975734c2b6": "19947c42417d20afdea911b513715b92",
".git/objects/f2/5787c93ad00665f0f797a43ab397f0628a273e": "59e425d1456034072d902c75d18ec75f",
".git/objects/fd/a4abf484ffbdf42ecdabe058921cb3e8dfef47": "f1a8bb6587e7ebe87305c0f6d327e35c",
".git/objects/fe/2bfcf95c1c341704e5d266a433b006efec5617": "19c6f6427a9329c00cc6642a04660850",
".git/packed-refs": "a891e6bb26eb0d480aef486a7e8ea166",
".git/refs/heads/main": "7ff6c16976a4e99c8fc2382ebb981899",
".git/refs/remotes/origin/main": "7ff6c16976a4e99c8fc2382ebb981899",
"assets/AssetManifest.json": "86385f02aeace335fa40c08bf8931b3c",
"assets/assets/images/imgkanan.png": "c609d2de62c43525709fedcc877ff1d1",
"assets/assets/images/titiklogo.png": "c5d4740d48bb4c1de213598a8a73d64c",
"assets/FontManifest.json": "dc3d03800ccca4601324923c0b1d6d57",
"assets/fonts/MaterialIcons-Regular.otf": "1288c9e28052e028aba623321f7826ac",
"assets/NOTICES": "3dc78ff2c01ef21efa06db3e1b4e70e0",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"index.html": "7965e49af778dd91d89147b04d7c86f1",
"/": "7965e49af778dd91d89147b04d7c86f1",
"main.dart.js": "bf4fb32942498d329acdde6bd6989347",
"manifest.json": "b91c7e9b9d3778c388510d0c7e021348",
"version.json": "18350dfad5fb2bfc1dfcb05ba0a5a8fc"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
"assets/AssetManifest.json",
"assets/FontManifest.json"];
// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});

// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});

// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
          return response;
        });
      })
    })
  );
});

self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});

// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}

// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
