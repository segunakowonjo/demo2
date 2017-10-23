var myCookies = {};

function saveCookies()
          {
           myCookies["Cookie"] = document.getElementById("cookie").value;  
           
           document.cookie = "";
           
           var expiresAttrib  = new Date(Date.now() + 60 * 1000).toString();
           
           var cookieString = "";
           
           for (var key in myCookies)
                    {
                     cookieString = key + "=" + myCookies[key] + ";" + expiresAttrib + ";";
                     document.cookie = cookieString;
                    }
          
          document.getElementById ("out").innerHTML = document.cookie;
          }



function loadCookies()
          {
           myCookies = {};
           
           var keyValue = document.cookie.split(";");
           
           for (var id in keyValue)
                    {
                     var cookie = keyValue[id].split("=");     
                     myCookies[cookie[0].trim()] = cookie[1];
                    }
                              
          document.getElementById("cookie").value = myCookies["Cookie"];      
          }
