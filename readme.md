1. What is the difference between getElementById, getElementsByClassName, and
   querySelector / querySelectorAll?

The difference between getElementById, getElementsByClassName, and querySelector
/ querySelectorAll is:

getElementById: It selects a single unit based on an unique id and return 1
elements. Example: const element = document.getElementById('myId');

getElementsByClassName: It selects all elements that have a specific class name
and return HTMLCollection. Example: const elements =
document.getElementsByClassName('myClass');

querySelector / querySelectorAll: querySelector select the first element which
is matched a specific CSS selector and return 1 element. Example: const
firstElement = document.querySelector('.myClass');

querySelectorAll select all the elements which is matched a specific CSS
selector and return NodeList. Example: const allElements =
document.querySelectorAll('.myClass');

2. How do you create and insert a new element into the DOM?

If you create and insert a new element into the DOM, first you should make an
element using document.createElement(), then put it in the page with
appendChild() or append() . Example: const newDiv =
document.createElement('div'); // create new element newDiv.innerText = 'Hello
DOM!'; // add text document.body.appendChild(newDiv); // add to body

3. What is Event Bubbling and how does it work?

Event Bubbling means the event goes from the bottom to the top. and It works
like, when you click a button, the click starts at the button, then it goes to
its parent, then higher up.

4. What is Event Delegation in JavaScript? Why is it useful?

Event delegation is a technique to add a single event listener to a parent
element. It is useful for do not add separate event listener to the child
element. Event delegation is very easy and fastest way you can code.

5. What is the difference between preventDefault() and stopPropagation()
   methods?

preventDefault() stops the default browser action. and stopPropagation() stops
the event from bubbling up to the parent elements.
