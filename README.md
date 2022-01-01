# Админ панель для приложения Сборники Христиан

[AppStore](https://apps.apple.com/ru/app/%D1%81%D0%B1%D0%BE%D1%80%D0%BD%D0%B8%D0%BA%D0%B8-%D1%85%D1%80%D0%B8%D1%81%D1%82%D0%B8%D0%B0%D0%BD/id1575851814)

[Google Play](https://play.google.com/store/apps/details?id=com.smarrti.collections)

Code exapmple of adding songs in Cloud Firestore

``
  <!-- const handle = async () => { -->
    if (!fireApp) {
      return;
    }

    const db = getFirestore(fireApp);
    const index = 8;

    for (let i = 0; i < songBooks[index].bookContent.length; i++) {
      const song = songBooks[index].bookContent[i];
      let num = "0";
      if (song.songNumber <= 9) {
        num = `00${song.songNumber}`;
      } else if (song.songNumber >= 10 && song.songNumber <= 99) {
        num = `0${song.songNumber}`;
      } else {
        num = `${song.songNumber}`;
      }
      await setDoc(doc(db, "songsOfflineContent", `009-${num}`), {
        bookId: songBooks[index].bookId,
        songNumber: song.songNumber,
        title: song.songTitle,
        videosId: [],
        notesSources: [],
        notes: [],
      });
      console.log(song.songNumber);
    }
``