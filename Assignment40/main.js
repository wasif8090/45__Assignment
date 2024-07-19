function make_album(artist_name, album_title, album_tracks) {
    var music = {
        artist: artist_name,
        album: album_title,
    };
    if (album_tracks !== undefined) {
        music.tracks = album_tracks;
    }
    console.log(music);
}
make_album("Tom oddel", "Album 1");
make_album("Shawn Mendese", "Album 2");
make_album("Billie Eilish", "Album 3", 3);
// Assignment complete
