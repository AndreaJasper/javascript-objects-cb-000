var playlist = {
  'Foo Fighters': 'The Pretender',
  'Porter Robinson': 'Shelter'
}
function updatePlaylist(playlist, artist, song) {
  playlist[artist] = song
  return playlist
}

function removeFromPlaylist(playlist, artist) {
  delete playlist[artist]
  return playlist
}
