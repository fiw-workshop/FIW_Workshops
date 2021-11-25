self.addEventListener("install", e => {
    e.waitUntil(
      caches.open("static").then(cache => {
          return cache.addAll([
              "./",
              "topic.html",
              "feeling.html",
              "./topics/boss.html",
              "./topics/family.html",
              "./topics/friends.html",
              "./topics/mailman.html",
              "./topics/partner.html",
              "./topics/teacher.html",
              "final_statement.html",
              "./src/master.css",
              "./images/I_Statement_Logo_192.png",
              "./images/I_Statement_Logo_512.png",
              "./images/start_page/startseite1.jpg"
          ]);
      })
    );
    console.log("Installed!");
});

self.addEventListener("fetch", e => {
   e.respondWith(
       caches.match(e.request).then(response => {
           return response || fetch(e.request);
       })
   );
});
