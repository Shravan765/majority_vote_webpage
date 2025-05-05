document.body.style.backgroundColor = "DarkSlateGrey";

document.body.style.textAlign = "center";

document.getElementById("form_text").style.padding = "50px";

const text_elements = document.getElementsByClassName("text");
for(let e of text_elements)
    {
        e.style.color = "white";
    }

function voting_algorithm(input)
{
    let n = input.length;
    let char = input.charAt(0);
    let count = 1;
    if(n == 1){ return char; }
    for(let i = 1; i<n ; i++)
        {
            if(input.charAt(i) == char)
                {
                    count+=1;
                }
            else
                {
                    if(count > 0)
                        {count-=1;}
                    else{
                        char = input.charAt(i);
                        count = 1;
                    }
                }
        }
    let actual_count = 0;
    for(let i = 0; i<n;i++)
        {
            if(input.charAt(i) == char)
                {
                    actual_count+=1;
                }
        }
    if(actual_count > n/2){return char;}
    return null;
}



function checking_majority_element(event)
{
    event.preventDefault();
    let input = document.forms["input_form"]["input_string"].value;
    document.getElementById("confirm_input").innerHTML= "Input : " +input;
    const output_part = document.getElementById("output");
    output_part.style.fontSize = "40px"
    output_part.style.padding = "25px"

    if(input == "")
        {
            document.getElementById("output2").innerHTML = "";
            output_part.innerHTML = "You have entered empty string\n";
        }
    else
        {
            let output = voting_algorithm(input);
            if(output == null)
                {
                    document.getElementById("output2").innerHTML = "";
                    output_part.innerHTML = "No character occurs more than half the time\n";
                }
            else
                {
                    output_part.innerHTML = "Character '" + output+"' occurs more than half the time\n";
                    
                    let cnt = 0; let n = input.length;
                    for(let i = 0; i<n;i++)
                        {
                            if(input.charAt(i) == output)
                                {
                                    cnt+=1;
                                }
                        }
                    document.getElementById("output2").innerHTML = "Count of '"+ output +"; out of total number of characters is "+cnt + " / "+ n;
                    document.getElementById("output2").style.fontSize = "20px";
                }
        }
}
/* let string = "aaabbbvva";
let output = voting_algorithm(string);
if(output == null)
    {
        console.log("No element is occurring more than half the time.\n");
    }
else
    {
        console.log("Element " + output + " occurs more than half the time\n");
    }
     */
