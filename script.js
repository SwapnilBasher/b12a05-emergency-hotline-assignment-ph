document.querySelector('section').addEventListener('click', function(event) {
    // console.log(this); // this refers to the element that the event listener is attached to (the section)
    // console.log(event.target); // event.target refers to the actual element that was clicked, which could be a child element of the section

    let button = event.target.closest('.heart-button'); // Find the closest button element to the clicked target

    if(button) { // If a button was found

        document.getElementById('header-heart-count-no').textContent = parseInt(document.getElementById('header-heart-count-no').textContent) + 1; // Increment the heart count

    }


});