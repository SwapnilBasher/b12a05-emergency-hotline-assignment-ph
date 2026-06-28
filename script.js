document.querySelector('section').addEventListener('click', function (event) {
    // console.log(this); // this refers to the element that the event listener is attached to (the section)
    // console.log(event.target); // event.target refers to the actual element that was clicked, which could be a child element of the section

    let heartButton = event.target.closest('.heart-button'); // Find the closest button element to the clicked target

    if (heartButton) { // If a button was found

        document.getElementById('header-heart-count-no').textContent = parseInt(document.getElementById('header-heart-count-no').textContent) + 1; // Increment the heart count

    }

    // copy button er kaz

    let copyButton = event.target.closest('.copy-button'); // Find the closest button element to the clicked target

    if (copyButton) { // If a button was found
        let containerDiv = event.target.closest('.data-card'); // Find the closest container div to the clicked target

        if (containerDiv) { // If a container div was found
            let phoneNumber = containerDiv.querySelector('p').textContent; // Get the phone number from the container div

            navigator.clipboard.writeText(phoneNumber) // Copy the phone number to the clipboard
                .then(() => {
                    alert(`Copied ${phoneNumber} to clipboard`); // Display an alert confirming the copy

                    document.getElementById('copy-count').textContent = parseInt(document.getElementById('copy-count').textContent) + 1; // Increment the copy count 

                })
                .catch(err => {
                    console.error('Failed to copy: ', err); // Log any errors that occur during the copy process
                });

        }
    }



    let callButton = event.target.closest('.call-button'); // Find the closest button element to the clicked target

    if (callButton) { // If a button was found
        let coinButton = document.getElementById('coin-button-id');
        // its actually not the coin button, but the span tag inside that coin button 

        let coinCount = parseInt(coinButton.textContent); // Get the current coin count

        if (coinCount >= 20) {

            coinButton.textContent = coinCount - 20;

            let containerDiv = event.target.closest('.data-card'); // Find the closest container div to the clicked target

            if (containerDiv) { // If a container div was found
                let name = containerDiv.querySelector('h5').textContent;
                let phoneNumber = containerDiv.querySelector('p').textContent;

                alert(`Calling ${name} at ${phoneNumber}`); // Display an alert with the name and phone number
            }

            // creating a div to add in CALL HISTORY aside

            let newDiv = document.createElement('div');

            let parentAside = document.querySelector('aside');

            newDiv.classList.add('call-history-item');
            // ei class .css e ache 

            // console.log(newDiv.className);



            if (containerDiv) { // If a container div was found
                let name = containerDiv.querySelector('h4').textContent;
                let phoneNumber = containerDiv.querySelector('p').textContent;

                const time = new Date().toLocaleTimeString('en-US', {
                    timeZone: 'Asia/Dhaka',
                    hour12: true,
                    hour: '2-digit',
                    minute: '2-digit',
                    second: '2-digit'
                });

                newDiv.innerHTML = `<div style="display: flex; flex-direction: column;"><h5>${name}</h5><p>${phoneNumber}</p></div><p>${time}</p>`;

                parentAside.appendChild(newDiv); // Append the new div to the aside element
            }





        } else {
            alert('You need minimum 20 coins for each call');
        }

    }


});

document.querySelector('aside').addEventListener('click', function (event) {

    // let parentAside = document.querySelector('aside');

    if (event.target.id === 'clear-button') {

        this.innerHTML = `<div class="flex justify-between items-center self-stretch">
                    <div class="flex justify-between items-center gap-2">
                        <i class="fa-regular fa-clock"></i>
                        <h2 class="text-[20px] leading-7 font-medium text-[#111111]">
                            Call History
                        </h2>
                    </div>
                    <button id="clear-button"
                        class="btn text-white flex h-[52px] items-center justify-center gap-2.5 rounded-[50px] bg-[#00A63E] px-9 py-3">Clear</button>
                </div>`;
        // Clear the content of the aside element

    }


});