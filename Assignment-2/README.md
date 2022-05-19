## Dialog Tag

The ```<dialog>``` tag is used to easily create a new popup dialog on the webpage. It uses a boolean attribute called ```open``` to make the tag visible
 
### How to create a Dialog Tag

In the HTML file we create the dialog tag using the ```<dialog>``` element. It is used as a container and you can implement the content of your choice inside that you would use in any normal ```<div>``` element.

### HTML

```html

<body>
    <div id="container">
        <dialog>
            <h2>Software engineer and Web Designer<h2>
            <a class="project" href="project.html">My Projects</a>
        </dialog>
    </div>
</body>

```
### CSS

To style the ```<dialog>``` element, you would use the same process of styling as that of a ```<div>``` element.

```css

    /* These are the styles for the dialog */
    dialog {
    border: solid gray 2px;
    border-radius: 10px;
    }
    
    /* This is the style for outside the dialog
    when the dialog is displayed
    to make it clear that it is a "modal dialog" and
    the user cannot interact with anything outside it. */
    ::backdrop, /* for native <dialog> */
    dialog + .backdrop {
    /* for dialog-polyfill */
    /* a transparent shade of gray */
    background-color: rgba(0, 0, 0, 0.2);
    }

```

### JavaScript

Implementing JavaScript to be used with the ```<dialog>``` tag would have you using two main methods, ```'insert dialog variable name'.showModal();``` and the  ```'insert dialog variable name'.close();```. The ```showModal()``` method is used to display the dialog and the ```close()``` method is used to close the dialog and make it disappear.

```javascript

login.addEventListener('click', function() {
    //Show modal
    dialog.showModal();
});

close.addEventListener('click', function() {
    //Close modal
    dialog.close();
});


```


### References

- [Javatpoint](https://www.javatpoint.com/html-dialog-tag#:~:text=HTML%20tag%20is%20used,new%20tag%20introduced%20in%20HTML5.)
- [Developer.Mozilla](https://developer.mozilla.org/en-US/docs/Web/HTML/Element/dialog)
