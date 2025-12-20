# building-coffee-webapp

### Just for learning purposes, I used HTML & CSS to create this homepage (work in progress)

### My first page looks like lol
<img width="1920" height="996" alt="Screenshot From 2025-12-19 12-54-56" src="https://github.com/user-attachments/assets/0442d53d-759b-47c0-b709-4c8b0ed0e7fa" />


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

### `<vidoe> </vidoe> `
A tag to vidoe noting else same options as before like <audio>

### `<b> </b>`
A tag for boldeing a text of <p>

### `<i> </i>`
A tag for itelic text <p>

### `<big> </big>`
A tag for big text <p>

### `<small> </small>`
A tag for small text <p>

### `<sub> </sub>`
A tag for subscripte text <p>

### `<sup> </sup>`
A tag for supscripte text <p>

### `<ins> </ins>`
A tag for insert a line to text <p>

### `<del> </del>`
A tag for delete line to text <p>

### `<mark> </mark>`
A tag for mark text <p>

### `<ul> </ul>`
A tag for unorderd list

### `<ol> </ol>`
A tag for orderd list with opeiton type to define the orderd type

### `<dt> </dt>`
A tag for description term

### `<dd> </dd>`
A tag for description difination

### `<table> </table>`
A tag to create a basic table with help of another another tags like
`<tr> </tr>` -> create a table row
`<th> </th>` -> create a horizntal row table
`<td> </td>` -> create a table data to each single row

### `<span> </span>`
is a tag that group and apply style or somthing else to a specific portion of text

### `<div> </div>`
is a tag that looks same like `span` tag, div it apply some thing 

### `<iframe> </iframe>`
is a tag that req a path or website to show up on your web site, used to make an ads

### `<button> </button>`
is a tag that make use a button for a link or what even

 ### `<form> </form>`
 