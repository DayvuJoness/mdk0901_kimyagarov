const playSlider = ()=>
{
    const portfolioItem = document.querySelectorAll('.portfolio-item');
    let dot = document.querySelectorAll('.dot');
    const portfolio = document.getElementById('portfolio');

    let countDot = 0;

    for (let i = 0; i < dot.length; i++) 
    {
        dot[i].remove();
        countDot++;
    }

    for (let i = 0; i < countDot; i++) 
    {
        dot[i] = document.createElement('li');
        dot[i].className = 'dot';
        document.querySelector('.portfolio-dots').appendChild(dot[i]);
        dot[0].className = 'dot dot-active';
    }

    const addClass = (item, index, classStyle) =>
    {
        item[index].classList.add(classStyle);
    };
    const removeClass = (item, index, classStyle) =>
    {
        item[index].classList.remove(classStyle);
    };

    let count = 0;

    function animateSlide()
    {
            removeClass(portfolioItem, count, "portfolio-item-active");
            removeClass(dot, count, "dot-active");
            count++;
            if (count === portfolioItem.length)
            {
                count = 0;
            }
            addClass(portfolioItem, count, "portfolio-item-active");
            addClass(dot, count, "dot-active");
    }

    function animateSlideMin()
    {
            removeClass(portfolioItem, count, "portfolio-item-active");
            removeClass(dot, count, "dot-active");
            count--;
            if (count === -1)
            {
                count = portfolioItem.length - 1;
            }
            addClass(portfolioItem, count, "portfolio-item-active");
            addClass(dot, count, "dot-active");
    }

    portfolio.addEventListener('click', (e) =>
    {
        e.preventDefault();
        const target = e.target;
        if (!target.matches('.portfolio-btn, .dot'))
        {
            return;
        }
        removeClass(portfolioItem, count, "portfolio-item-active");
        removeClass(dot, count, "dot-active");
        if (target.matches('.next'))
        {
            count++;
        }
        else if (target.matches('.prev'))
        {
            count--;
        }
        if (count === portfolioItem.length)
        {
            count = 0;
        }
        else if(count === -1)
        {
            count = portfolioItem.length - 1;
        }
        addClass(portfolioItem, count, "portfolio-item-active");
        addClass(dot, count, "dot-active");
        
        if(e.target.matches(".dot") && !e.target.matches(".dot-active"))
        {
            let temp_index = 0;
            let i = 0;
            dot.forEach(elem =>
            {
                if(elem === e.target)
                {
                    temp_index = i;
                }
                i++;
            });
            animateSlide(temp_index, count);
            count = temp_index;
        }
        
    })

    document.querySelector('.portfolio-content').addEventListener('mouseover', (e) =>
    {
        clearInterval(idAnimate);
    })

    document.querySelector('.portfolio-content').addEventListener('mouseout', (e) =>
    {
        idAnimate = setInterval(animateSlideMin, 3000);
    })

    let idAnimate = setInterval(animateSlide, 3000)

    // portfolioItem[0].classList.remove('portfolio-item-active');
    // portfolioItem[1].classList.add('portfolio-item-active');

    // dot[0].classList.remove('dot-active');
    // dot[1].classList.add('dot-active');
}

playSlider();