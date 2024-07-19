function make_album(artist_name: string, album_title: string, album_tracks?: number) {
    let music : {
      artist: string,
      album: string,
      tracks?: number
    } = {
      artist: artist_name,
      album: album_title,
    }

    if (album_tracks !== undefined) {
      music.tracks = album_tracks
    }
    console.log(music);
}
make_album("Tom oddel", "Album 1");
make_album("Shawn Mendese", "Album 2");
make_album("Billie Eilish", "Album 3", 3);


// Assignment complete