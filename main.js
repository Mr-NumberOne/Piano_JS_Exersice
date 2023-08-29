function playnote(pressedelement) {
  document.getElementById("show").innerHTML =
    "<h1>" + pressedelement.innerHTML + "</h1>";
  var AudioNote = document.getElementById("note_mp3");
  var note = `${pressedelement.innerHTML}`;
  switch (note) {
    case "a":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "b":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "c":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "d":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "e":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "f":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "g":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;

    default:
      break;
  }
  AudioNote.play();
}

document.addEventListener("keydown", function (event) {
  var note = event.key.toLowerCase();
  if ("abcdefg".includes(note)) {
    document.getElementById("show").innerHTML =
      "<h1>" + note.toUpperCase() + "</h1>";
  }
  var AudioNote = document.getElementById("note_mp3");
  switch (note) {
    case "a":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "b":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "c":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "d":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "e":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "f":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;
    case "g":
      AudioNote.src = "notes/" + note.toUpperCase() + "1.mp3";
      break;

    default:
      break;
  }
  AudioNote.play();
});
