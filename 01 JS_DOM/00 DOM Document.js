

Finding HTML Elements--------------------------------------------------------------------------------------------------------------------------------------------------

• document.getElementById(id)	
• document.getElementsByTagName(name)
• document.getElementsByClassName(name)



Changing HTML Elements------------------------------------------------------------------------------------------------------------------------------------------------

• element.innerHTML = new html content	     // Change the inner HTML of an element
• element.attribute = new value	             // Change the attribute value of an HTML element
• element.style.property = new style	     // Change the style of an HTML element

• element.setAttribute(attribute, value)	 // Change the attribute value of an HTML element



Adding and Deleting Elements-------------------------------------------------------------------------------------------------------------------------------------------

• document.createElement(element)	       // Create an HTML element
• document.removeChild(element)	           // Remove an HTML element
• document.appendChild(element)	           // Add an HTML element
• document.replaceChild(new, old)	       // Replace an HTML elemen
• document.write(text)	                   // Write into the HTML output stream   


Adding Events Handlers---------------------------------------------------------------------------------------------------------------------------------------------

• document.getElementById(id).onclick = function () { code }	// Adding event handler code to an onclick event



Finding HTML Elements---------------------------------------------------------------------------------------------------------------------------------------------

• Finding HTML elements by id                               // document.getElementById(id)
• Finding HTML elements by tag name                         // document.getElementsByTagName(name)
• Finding HTML elements by //class name                       // document.getElementsByClassName(name)
• Finding HTML elements by CSS selectors                    // => document.querySelectorAll()
• Finding HTML elements by HTML object collections

// document.anchors
// document.body
// document.documentElement
// document.embeds
// document.forms
// document.head
// document.images
// document.links
// document.scripts
// document.title




Changing HTML Content---------------------------------------------------------------------------------------------------------------------------------------------

• document.getElementById(id).innerHTML = new HTML   // The easiest way to modify the content of an HTML element is by using the innerHTML property.

Changing the Value of an Attribute

• document.getElementById(id).attribute = new value   // ex. document.getElementById("myImage").src = "landscape.jpg";




Constraint Validation HTML Input Attributes-------------------------------------------------------------------------------------------------------------------------

• disabled	          //Specifies that the input element should be disabled
• max	              //Specifies the maximum value of an input element
• min	              //Specifies the minimum value of an input element
• pattern	          //Specifies the value pattern of an input element
• required	          //Specifies that the input field requires an element
• type 	              //Specifies the type of an input element



Changing HTML Style---------------------------------------------------------------------------------------------------------------------------------------------

• document.getElementById(id).style.property = new style



The addEventListener() method-------------------------------------------------------------------------------------------------------------------------------------------

• document.getElementById("myBtn").addEventListener("click", displayDate);



JavaScript HTML DOM Navigation----------------------------------------------------------------------------------------------------------------------------------------


    Navigating Between Nodes-------------------------->>>>>


        You can use the following node properties to navigate between nodes with JavaScript:
• parentNode
• childNodes[nodenumber]
• firstChild
• lastChild
• nextSibling
• previousSibling



Child Nodes and Node Values-------------------------------------------------------------------


    <title id="demo">DOM Tutorial</title>

The element node < title > (in the example above) does not contain text.

It contains a text node with the value "DOM Tutorial".



• myTitle = document.getElementById("demo").innerHTML;

Accessing the innerHTML property is the same as accessing the nodeValue of the first child:

• myTitle = document.getElementById("demo").firstChild.nodeValue;



Accessing the first child can also be done like this:

• myTitle = document.getElementById("demo").childNodes[0].nodeValue;





Creating New HTML Elements(Nodes)------------------------------------------------------------------------------------------------------------------------------------

• document.createElement();
• document.createTextNode("This is new.");
• para.appendChild(node);
• element.insertBefore(para, child);
• parent.removeChild(child);
• parent.replaceChild(para, child);


DOM Collections ---------------------------------------------------------------------------------------------------------------------------------------------------





















