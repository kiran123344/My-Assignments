const browserversion="Apple Safari";
function getbrowserversion()
{
    if (browserversion==="Apple Safari")
    {
     let browserversion="firefox";   
        console.log("inside the block browserversion is +browserversion");
    }
        else if (browserversion==="Opera")
        {
        console.log("inside the block browserversion is");
    }
    else
    {console.log("browserversion is undefined");

    }

        

        }
        console.log("outside the block the browserversion is+browserversion");
        getbrowserversion();
        
    