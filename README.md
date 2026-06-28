# JavaScript DOM Questions

## 1. What is the difference between `getElementById`, `getElementsByClassName`, and `querySelector` / `querySelectorAll`?

* **`getElementById()`** is used to find a single element by its unique `id`. Since an `id` should be unique, it returns only one element.
* **`getElementsByClassName()`** finds all elements with the given class name. It returns an HTMLCollection, which is a live collection.
* **`querySelector()`** returns the first element that matches a CSS selector.
* **`querySelectorAll()`** returns all matching elements as a NodeList. Unlike `getElementsByClassName()`, the NodeList is static and does not update automatically.

---

## 2. How do you create and insert a new element into the DOM?

First, create a new element using `document.createElement()`. Then add text or other content to it. Finally, insert it into the page using methods like `appendChild()` or `append()`.

Example:

```javascript
const newDiv = document.createElement("div");
newDiv.textContent = "Hello World";
document.body.appendChild(newDiv);
```

---

## 3. What is Event Bubbling and how does it work?

Event bubbling means that when an event happens on an element, it first runs on that element and then moves upward through its parent elements until it reaches the `document`.

For example, if a button is inside a `div`, clicking the button will trigger the button's click event first, then the `div`'s click event, and so on.

---

## 4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique where we add an event listener to a parent element instead of adding separate listeners to each child element.

It works because of event bubbling. The parent can detect which child was clicked using `event.target`.

This is useful because it reduces the number of event listeners, improves performance, and also works for elements that are added dynamically later.

---

## 5. What is the difference between `preventDefault()` and `stopPropagation()` methods?

* **`preventDefault()`** stops the browser's default behavior. For example, it can prevent a form from submitting or stop a link from opening.
* **`stopPropagation()`** stops the event from bubbling up to parent elements. It does not stop the default browser action.

So, `preventDefault()` controls the browser's default action, while `stopPropagation()` controls how the event travels through the DOM.
