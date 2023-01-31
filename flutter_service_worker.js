'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  ".git/COMMIT_EDITMSG": "a8ba672d93697971031015181d7008c3",
".git/config": "4043d1a018d1fbf745a73d188f4e16b9",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/FETCH_HEAD": "9b7973641ad6e5950eeb87fa4120088e",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "ea587b0fae70333bce92257152996e70",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "45670ad0a183ef82cde71ed8907a6b62",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "25742d385e2f8083b1e01677e8f821e8",
".git/logs/refs/heads/master": "25742d385e2f8083b1e01677e8f821e8",
".git/logs/refs/remotes/github/main": "0a9df138dd0df9b14c99b7bdd70b517f",
".git/logs/refs/remotes/github/master": "9cd66f00e0ee04d8e2ebbca54c7cf2d2",
".git/objects/10/d803fb53d05ce6c5ee279052af84a2be501d4b": "89198589e85689a47d9fe0514d83f2ef",
".git/objects/12/5c284dc2bbed823ed6389e50cc75a8a1ef2351": "9ab0bcea773dc4fd6ef989aef459b28a",
".git/objects/17/08b6582590d1593eb4398c92dcf3611cb35ebd": "75ac0ba8dd0595d05decdf6fcbc8cb42",
".git/objects/18/8ddd4c79e3318f6d2addb87b07d2bc8fbe7a03": "e049fe02e9d11fc0cb8163435a9cbb3b",
".git/objects/2e/c11d9ff98cffa1929594a7d20ec25844937816": "bef532ca637772e1fd8174e9d4fa840c",
".git/objects/31/01ff5f94a31e490e2b9253209b0271b4a5a02b": "88def0154c14e45d0f697a18d0828b42",
".git/objects/37/7ead7488ba04497de54363ee4e4436edf85774": "d08a584d3f7b4fb2a65c159d695456ff",
".git/objects/37/c3e2e3f2e288de8c1bcd7f2c56efa45631147e": "c2c7cd591ceae749b1056b8101b959c0",
".git/objects/41/5c059c8094b888b0159fdedfd4e3cb08a8028e": "86914685ccd40e82a7fe5b70459fb9f7",
".git/objects/42/85d344bb88984612ca9ab4e8f605675e342af1": "9f16dbb89a6e2e18f059b4a93ad23cbf",
".git/objects/45/4edd42e8ab4c86a08053850d039338d9ac18e0": "4d3bebf25c8054df3cfe1d8174a35fb3",
".git/objects/49/938d3f0c07beb7194c72b623c46ebc2acc28a1": "c52513b902ead034bc9a32ad0ecef9b8",
".git/objects/4b/825dc642cb6eb9a060e54bf8d69288fbee4904": "75589287973d2772c2fc69d664e10822",
".git/objects/4b/ce11f832f26ee264d95b6790237601cf5a6088": "d9243641979aa81a886b057ab392745a",
".git/objects/55/919b0b32f21410d9755ffbe64aeb2d07650744": "ffb88073b04c5f9454f1e7f08edc733c",
".git/objects/57/0ebf8bddf00e667197dd14d320b118fdc13d08": "cb6be06d9289a4ec650ab46e4410bbd7",
".git/objects/5e/4462d90d3a5f30656f332a965d7e3539b6d5db": "4065f8da4f4bf3e827fa16ccb6a1bef8",
".git/objects/60/af000e6c909b71e6241f97ffb2f9395da99666": "2df2c3205bd174ff2c74fbb53bec6721",
".git/objects/63/dacd43e8181a7250f28d175a49bba8cb959f18": "61081cf73434c6a19008955d71dc1c0e",
".git/objects/66/6ff6b83cf3b51e73bfbf496afe39a3c3b3b28a": "58482343b41314a5c576148308f722ac",
".git/objects/6a/562868741911ffc3a5345f3c094a71eb0d073d": "ad3237b80e6dc65be0e2000c6c0a445f",
".git/objects/6e/ba6309df5e1cc1978cdc8f4a00dd11e4ae9517": "07b620207e0d1fea8c677d47bfc777a0",
".git/objects/73/a5ca9e6ea457a8e87e3e88047b9268f15bb75b": "437e873491b95548ba60fecc00fa7933",
".git/objects/77/a0e22e3360dbbf7fb26410f7039296babc9f61": "88bf3ff855f2fc6a4845f4e9e4d0417a",
".git/objects/79/ba7ea0836b93b3f178067bcd0a0945dbc26b3f": "f3e31aec622d6cf63f619aa3a6023103",
".git/objects/7c/750318da4477aa49b555b3a3f3f7e5c6060a2d": "3339ee1090275c2c186d61df3787eb45",
".git/objects/80/df6e46cf883a55224bdaceacf60b0623ef3177": "e0864676a82438866828db28936f1afb",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/8c/99266130a89547b4344f47e08aacad473b14e0": "41375232ceba14f47b99f9d83708cb79",
".git/objects/92/150a4dafe606ba9f4b7afd53c8f0ace08febd7": "cd72af17055dcdab398e9532616b015c",
".git/objects/9c/bfcd5c83653acd6a14f445a37cc371632b5d12": "f539e14d031613b021805944f08145d1",
".git/objects/9d/1557660013a4afe6fc0c03e03a8d9382446571": "4c5a8d4f66bedb852d86811dbc6a2d4b",
".git/objects/a1/3837a12450aceaa5c8e807c32e781831d67a8f": "bfe4910ea01eb3d69e9520c3b42a0adf",
".git/objects/a4/f9d5d34884959453e0a30574484934c5052d78": "2c132e026cace80e212df50edcb037ad",
".git/objects/a5/99361d2275c3fcf809d841849537ca131c4085": "880ae758121a51359f50c79f5bff1d22",
".git/objects/b1/6f22c6e2f1a199bfa5c8fd747464be4f8f27d4": "a7f1a6e6137fa430ec33b400aa00d172",
".git/objects/b6/6bc0e15a3c4412a7b8a48ce21be34a99d23735": "30e6f61ff12199849757c8a48d09a1fb",
".git/objects/b7/2d4c42822e07f5198971acf4ee01fd8f0beb6e": "be62101b8cbe2389dcc546709a07b155",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/c0/83b7217aa023f555532b7b24c309be2940b6e3": "6a049ad6161eb12edab1fbd430606636",
".git/objects/c2/78ec66e2011148ac5d020aab7b93e7118f63ba": "5a7fae203dd24261d8158f675afa9e1d",
".git/objects/c4/2ca267f229ed7322f63d0a71ee09c9100b9862": "9b1b8976b53df20086653563d688f648",
".git/objects/ca/686debb09a9ffa332d7cc5afeb04cf74a83ba4": "9acc4a6ac38fb021300818a7b7fbb296",
".git/objects/d0/91c28f04211f6ea515ecdd907ecf6e16ed0d85": "f9f4b973fcb52d2080a3abfd4b71e50a",
".git/objects/d4/4b878cbe32a8b515bdcb9a93b0f1ec31e51c83": "3f77eeacda5535bfa663b591e7a9fe90",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/dc/63886f8e8fef28f56f96aaed30ebe2f63f11e1": "28b218d5cd531fade21d3bd80916d46d",
".git/objects/e3/c7e2baa5dbc9c78f600e8fff8bc85e89afd39d": "475387042fa2b2200081e4284ce80c58",
".git/objects/e5/951dfb943474a56e611d9923405cd06c2dd28d": "c6fa51103d8db5478e1a43a661f6c68d",
".git/objects/e9/42e2bc6924ba87428e4369cdcc35fbf761eed4": "bd1fead3c2d0623bdd6e69e0f85b7784",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f6/54013a536a6b9344dcf8c4ba03057dd0a53133": "c101c98d57d8d0b9b6f4b3733d3c0fea",
".git/objects/fd/3740395fdb43b6a09872f7b3c145b8ebc731a1": "dec974b50dd69bff7d759b7bddd582d4",
".git/objects/fd/ddb29aa445bf3d6a5d843d6dd77e10a9f99657": "73530efb8befa67dd90392f5763fe9c3",
".git/objects/fe/9cc87580713c0f0238a4c887927ca8ee0df429": "dabdbad06cbcbc26cb39bdaf2e261a8a",
".git/refs/heads/master": "e41b79f269eeb53be884a6cff8242381",
".git/refs/remotes/github/main": "4fb5842efe05bca918933b9273541cf7",
".git/refs/remotes/github/master": "e41b79f269eeb53be884a6cff8242381",
"assets/AssetManifest.json": "e049462a135ceb31eb7c42292198cd1c",
"assets/assets/png/galleos.png": "01070dc7a80e982fc359b238af9165c0",
"assets/assets/png/interappt.png": "17a053c2e54b98be8c8c0265cca5a30d",
"assets/assets/png/reubey.png": "0dcf2dc77e2acaa7fa0d29c69137a767",
"assets/assets/skills/azure.png": "441104121f45696d5db055686ef3f6f3",
"assets/assets/skills/c.png": "173db82c43ceba33f90ffab7eca71e1f",
"assets/assets/skills/cosmosdb.png": "dc5634f267ac5d07b5a6f9d4efd13085",
"assets/assets/skills/csharp.png": "90cdee51f3075b3023137598e858a018",
"assets/assets/skills/dart.png": "9271c5feaa7176d4bc87467c11eaa8c0",
"assets/assets/skills/dotnet.png": "a1cd33df0ffb4ca804d284b28aaa6747",
"assets/assets/skills/dotnetcore.png": "0c02c93083bc36992bfa3390570e4ca8",
"assets/assets/skills/flutter.png": "70135fb5474e65fa678024389564b59e",
"assets/assets/skills/mssql.png": "f660217e28c01a93dccefca8cbb6811e",
"assets/assets/skills/nordic.png": "a63c264c3af4260e738bcafed6d70b59",
"assets/assets/skills/signalr.png": "cf1e077e56916ebb6eaf254bb929be4d",
"assets/assets/skills/xamarin.png": "c55978f56a593fefdd87771c803c4be0",
"assets/FontManifest.json": "66b71d2bcd2b436ab06cceee43157084",
"assets/fonts/MaterialIcons-Regular.otf": "e7069dfd19b331be16bed984668fe080",
"assets/NOTICES": "db4a059a1413876cf18e86922b2d1c59",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "6d342eb68f170c97609e9da345464e5e",
"assets/packages/ionicons/assets/fonts/Ionicons.ttf": "a48ca9e5bcc89fccac32592416234257",
"canvaskit/canvaskit.js": "97937cb4c2c2073c968525a3e08c86a3",
"canvaskit/canvaskit.wasm": "3de12d898ec208a5f31362cc00f09b9e",
"canvaskit/profiling/canvaskit.js": "c21852696bc1cc82e8894d851c01921a",
"canvaskit/profiling/canvaskit.wasm": "371bc4e204443b0d5e774d64a046eb99",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "1cfe996e845b3a8a33f57607e8b09ee4",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "31a2825d02b1f9e9bb97c28ea247fbf5",
"/": "31a2825d02b1f9e9bb97c28ea247fbf5",
"main.dart.js": "36ef09d6468ddd7c90d2c52abee19e2a",
"main.dart.js_1.part.js": "3bfc8bb575bcca158e9152bee2b315ec",
"main.dart.js_2.part.js": "26f8694653b62fccc48a1e9a91502920",
"main.dart.js_3.part.js": "4f26064130ae661880f62eab0d0320a9",
"manifest.json": "3446d54cd387a9cc303a26cd10650baa",
"site.css": "d54b1f12b376d9626ec12bd4eb3de7d8",
"version.json": "b655a0bf04981cbab0af2c787256615a"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "main.dart.js",
"index.html",
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
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
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
