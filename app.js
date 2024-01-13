

document.getElementById('addCandidateBtn1').addEventListener('click', function() {
    var friendName = document.getElementById('candidateInput1').value;

    var newButton = document.createElement('button');
    var voteCount = 0;

    newButton.textContent = friendName + " (" + voteCount + ")";
    newButton.style.width = '230px';
    newButton.style.height = '40px';
    newButton.style.borderRadius = '5px';
    newButton.style.color = 'black';
    newButton.style.borderColor = '#ccc';
    newButton.className = 'input-section1';

    newButton.addEventListener('click', function() {
        voteCount++;
        newButton.textContent = friendName + " (" + voteCount + ")";
        console.log(friendName + " was clicked! Votes: " + voteCount);
    });

    document.getElementById('candidatesBox').appendChild(newButton);
    document.getElementById('candidatesBox').appendChild(document.createElement('br'));
});

var candidateButtons = document.querySelectorAll('.candidateButton');
candidateButtons.forEach(function(button) {
    button.addEventListener('click', function() {
        var votes = parseInt(button.getAttribute('data-votes'));
        votes++;
        button.setAttribute('data-votes', votes);
        button.textContent = button.getAttribute('data-name') + " (" + votes + ")";
        console.log(button.getAttribute('data-name') + " was clicked! Votes: " + votes);
    });
});
