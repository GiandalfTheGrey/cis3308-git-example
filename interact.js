



    let element = document.querySelectorAll(".circle");
    element.addEventListener("click", selected);

    selected(event)
    {
      

        if(element.className !== "circle")
        {
            return;
        }
        element.className = "clicked";
        return element;
    }

  
}
selected();