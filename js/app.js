



let current_mode = 0; // 0 is light, 1 is dark


let toggler = document.getElementById('controller');


let lightBackground = "white";
let darkBody = "#161625";
let lightBody = "white";
let lightButton = "#1a73e8";
let darkButton = "#E8845D"
let lightText = "black";
let darkText = "white";


function ToggleDesign()
{
    let Background = "";
    let Button = "";
    let Text = "";

    current_mode = !current_mode;

    if (current_mode == 0)
    {
        Background = lightBackground;
        Button = lightButton;
        Text = lightText;
    }
    else
    {
        Background = darkBody;
        Button = darkButton;
        Text = darkText;
    }

    document.getElementsByTagName('body')[0].style.backgroundColor = Background;

    let x = document.getElementsByTagName('h1');
    for (let i = 0 ; i < x.length ; i++)
    {
        x[i].style.color = Text;
    }

    x = document.getElementsByTagName('h3');
    for (let i = 0 ; i < x.length ; i++)
    {
        x[i].style.color = Text;
    }

    x = document.getElementsByTagName('button');
    for (let i = 0 ; i < x.length ; i++)
    {
        x[i].style.color = Text;
    }

    x = document.getElementsByClassName('dark-color');
    for (let i = 0 ; i < x.length ; i++)
    {
        x[i].style.backgroundColor = Button;
        x[i].style.borderColor = Button;
    }

    x = document.getElementsByTagName('a');
    for (let i = 0 ; i < x.length ; i++)
    {
        x[i].style.color = Button;
    }

    x = document.getElementsByClassName('circle');

    
    
    let y = getComputedStyle(x[0]);

    if (y.left == "4px")
    {
        x[0].style.left = "49px";
    }
    else
    {
        x[0].style.left = "4px";
    }


}






toggler.onclick = function ()
{  
    ToggleDesign();
}
