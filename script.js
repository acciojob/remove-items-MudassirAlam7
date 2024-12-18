let color = document.querySelector('#colorSelect');
let btn = document.querySelector('input');

            // Add an event listener to the button
btn.addEventListener('click', remove);

function remove() {
let selectedIndex = color.selectedIndex
	color.options[selectedIndex].remove()
}