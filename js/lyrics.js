const songLyrics = document.getElementById('song-lyrics')
const songHeader = document.getElementById('song-header')

fetch(`https://api.lyrics.ovh/v1/${artist}/${title}`)     // ${artist}/${title}
    .then(res => res.json())
    .then(data => {
        const lyricsString = data.lyrics
        console.log(lyricsString)
        displayLyrics(lyricsString)
    })

const displayLyrics = (lyricsString) => {
    lyricsString = `<p class="lyrics lead">${lyricsString}</p>`.replace(/\n/g, '<br>')
    
    songLyrics.innerHTML = lyricsString
}

// parse lyrics and print with /n
// header showing song title & artist




