self.addEventListener("install", e => {
    e.waitUntil(
        caches.open("static").then(cache => {
            return cache.addAll([
                "./",
                "favicon.ico",
                "choosing_topic.html",
                "choosing_feeling.html",
                "index.html",
                "data.js",
                "manifest.json",
                "./topics/boss.html",
                "./topics/family.html",
                "./topics/friends.html",
                "./topics/mailman.html",
                "./topics/partner.html",
                "./topics/teacher.html",
                "final_statement.html",
                "final.html",
                "./src/master.css",
                "./images/I_Statement_Logo_192.png",
                "./images/I_Statement_Logo_512.png",
                "./images/start_page/startseite1.jpg",
                "./images/happy_images/cat.jpg",
                "./images/happy_images/Cookie.jpg",
                "./images/happy_images/Dinosauriern.jpg",
                "./images/happy_images/Faultier.jpg",
                "./images/happy_images/Giraffe.jpg",
            ]);
        })
    );
    console.log("Installed!");
});

self.addEventListener("fetch", event => {
    event.respondWith(
        caches.match(event.request).then(response => {
            return response || fetch(event.request);
        })
    );
});
