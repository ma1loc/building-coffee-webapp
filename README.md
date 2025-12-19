# building-coffee-webapp

### Just for learning purposes, I used HTML & CSS to create this homepage (work in progress)

---

## What I Learned

**HTML** = Structure of the website  
**CSS** = Styling the website  
**JS** = Functionality of the website

---

## Notes

### index.html: Landing Page
- Standard file name for a website homepage
- `index.html` is the default page

### `<!DOCTYPE html>`
Tells the browser how to interpret the code.

### `<html> </html>`
`<html>` is the box that contains everything on your web page — metadata, text, images, etc.

### `<head> </head>`
Contains metadata (information about the page).

### `<title>"any name"</title>`
Sets the tab title of your website.

### `<meta charset="UTF-8">`
Text encoding (supports all characters).

### `<meta name="viewport" content="width=device-width, initial-scale=1.0">`
Makes the page responsive on mobile devices.

### `<body> </body>`
Contains all visible content: text, images, buttons, etc.

### `<h1> </h1>` to `<h6> </h6>`
Print title with control of its size.

### `<p> </p>`
Create simple text.

### `<br>`
Break between two things (new line).

### `<hr>`
Makes a horizontal section division.

### `<center> </center>`
Makes any content be centered on your page like this:
```html
<center>
    <h1>HELLO WORLD</h1>
</center>
```

### `<a> </a>`
A tag used to create hyperlinks. An example of it:

`<a>` tag can take optional attributes like:
- **`href`** (Hypertext REFerence) → the URL or page the link points to (required for a real link)
- **`target`** → where to open the link (`_blank` = new tab, `_self` = same tab)
  - `_self` is the default
- **`title`** → as another option, makes a hover tooltip around the link

**NOTE:** Not just works with links. You can put local files if you have, for example, another page.

### `<img>`
A tag for putting images. It has options too:
- **`src`** → path for the image
- **`height`, `width`** → custom size of the image
- **`alt`** → alternative text
  - If the image fails to load, the user sees this text instead
  - Helps screen readers for visually impaired users
  - Important for accessibility and SEO
- **`title`** → like links, images can have hover tooltips too

### `<audio> </audio>`
This tag is for audio. Looks like this:
```html
<audio controls autoplay muted loop src="audio_path"></audio>
```

---