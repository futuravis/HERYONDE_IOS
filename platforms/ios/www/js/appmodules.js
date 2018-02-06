
function displayLoginPage()
{

    
    var Html = '';
    
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-action">'
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="" type="text" placeholder="Placeholder">'
    Html += '</div>'
    Html += '</div>'
    
    Html += '<div class="row">'
    Html += '<div class="input-field col s12">'
    Html += '<input id="" type="text" placeholder="Placeholder">'
    Html += '</div>'
    Html += '</div>'
    var symbolJSon = [
                      {"symbol":"img/user.png"},
                      {"symbol":"img/search.png"},
                      {"symbol":"img/Categories.png"},
                      {"symbol":"img/home.png"},
                      {"symbol":"img/logo.png"},
                      {"symbol":"img/add.png"},
                      {"symbol":"img/filter.png"},
                      {"symbol":"img/card_img.jpeg"},
                      ];
    var json_My_Account= {
        "name": "My Account",
        "symbol": symbolJSon[0].symbol,
        "method": "displayMyaccount();",
        "id":"footer_My_Account",
    }
    var json_Search= {
        "name": "Search",
        "symbol": symbolJSon[1].symbol,
        "method": "",
        "id":"footer_Search",
    }
    var json_Categories= {
        "name": "Categories",
        "symbol": symbolJSon[2].symbol,
        "method": "",
        "id":"footer_Categories",
    }
    var json_Home= {
        "name": "Home",
        "symbol": symbolJSon[3].symbol,
        "method": "",
        "id":"footer_Home",
    }
    var json_Logo = {
        "name": "Logo",
        "symbol": symbolJSon[4].symbol,
        "method": "",
        "id":"header_Logo",
    }
    var json_Add = {
        "name": "Add",
        "symbol": symbolJSon[5].symbol,
        "method": "",
        "id":"header_Add",
    }
    var json_Filter = {
        "name": "Filter",
        "symbol": symbolJSon[6].symbol,
        "method": "",
        "id":"header_Filter",
    }
    var json_Card = {
        "name": "Card",
        "symbol": symbolJSon[7].symbol,
        "method": "",
        "details":"I am a very simple card. I am good at containing small bits of information.",
        "price":"$1000",
        "tag":"Large appliances",
        "id":"footer_Add",
    }

    Html += '<div class="row">'
    Html += '<div class=" col s12 waves-effect waves-light login_button login_button_button_colour">'
    Html += '<div class="row">Login</div>'
    Html += '</div>'
    Html += '</div>'

    Html += '<div class="row">'
    Html += '<div class=" col s6 remember_me_text">'
    Html += '<input type="checkbox" class="filled-in" id="filled-in-box" checked="checked" />'
    Html += '<label for="filled-in-box">Remember Me</label>'
    Html += '</div>'
    Html += '<div class=" col s6 forgot_password_text">I forgot my password!'
    Html += '</div>'
    Html += '</div>'

    
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'

    
    
    
    
    Html += '<div class="row">'
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-action">'
    
    
    Html += '<div class="row">'
    Html += '<div class=" col s12">'
    Html += '<label>Not a member yet ?</label>'
    Html += '</div>'
    Html += '</div>'

    Html += '<div class="row ">'
    Html += '<div class=" col s12 waves-effect waves-light login_button memeber_now_button_colour ">'
    Html += '<div class="row">Member Now</div>'
    Html += '</div>'
    Html += '</div>'
    
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'


    
    
    
    
    window.setTimeout(function() {
                      $('#login').empty();
                      $('#login').append(Html).trigger('create');
                      $('#login').css("display","block");
                      window.location.href = '#login';
                      }, 200);

    
}








function displayHomePage()
{

    
    var Html = '';
    Html += '<form>';
    Html += displayHeader();
    Html += '<div id="homeList"></div>'
    Html += displayFooter();
    Html += '</form>';
    
    CallhomeAPI();
    
    
    
    window.setTimeout(function() {
                      $('#home').empty();
                      $('#home').append(Html).trigger('create');
                      $('#home').css("display","block");
                      window.location.href = '#home';
                      }, 200);
}


function CallhomeAPI(){
    
    $.ajax({
           type : "POST",
           crossDomain: true,
           url : "https://tlgrmapp.com/apps/dev/classified/index.php/api/ads/list",
           beforeSend: function(xhr){xhr.setRequestHeader('X-API-KEY', '1741B791EB86DF69C5A4338444AF5');},
           data: { "cat_id" : "0", "area_id" : "1"},
           dataType: "json",
           success : function(result) {
           //alert(JSON.stringify(result))
           //set your variable to the result
           displayContent(result)
           },
           error : function(result) {
           console.log("call Failed");
           //handle the error
           }
           });
    
}



function displayHeader()
{
    $('#myaccount').hide();
    var html = "";
    html += '<div class="header home_header sticky_header" id="myHeader">'
    html += '<div class="row fixed_header_row">'
    
    //Create the add
    html += '<div class="col s3 center-align fixed_header_col">'
    html += '<img class="header_log_img" src="'+header_home_icons.jsonFormat[0].symbol+'">'
    html += '</div>'
    
    html += '<div class="col s6 fixed_header_col">'
    html += '</div>'

    html += '<div class="col s3 fixed_header_col">'
    html += '<div class="row fixed_header_row">'
    html += '<div class="col s8 fixed_header_col header_add_text center-align">'+header_home_icons.jsonFormat[1].name+'</div>'
    html += '<div class="col s4 fixed_header_col position_relative">'
    html += '<img class="header_add_img" src="'+header_home_icons.jsonFormat[1].symbol+'">'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    
    html += '</div>'
    html += '<div class="row ">'

    html += '<div class="col s10 right-align fixed_sub_header_col header_add_text" style=" color: #000000; font-weight: normal; font-size: 18px;">Filter'
    html += '</div>'

    html += '<div class="col s2 right-align fixed_sub_header_col position_relative">'
    html += '<img class="header_filter_img" src="'+header_home_icons.jsonFormat[2].symbol+'">'
    html += '</div>'

    html += '</div>'

    
    
    
    html += '</div>'
    return html;
}



function displayFooter()
{
//    alert(Footter_home_icons);
//    alert(JSON.stringify(Footter_home_icons));
//    alert(Footter_home_icons.jsonFormat[0])
//    alert(JSON.stringify(Footter_home_icons.jsonFormat[0].name))
//    alert(JSON.stringify(Footter_home_icons.jsonFormat[0]))

    var html = "";
    html += '<div>';
    html += '<footer>'
    html += '<div class="row fixed_footer_row">'
    for(var j=0;j<Footter_home_icons.jsonFormat.length;j++){
    html += '<div class="col s3 fixed_footer_col waves-effect waves-light" onclick="'+Footter_home_icons.jsonFormat[j].method+'">'
    html += '<div class="row fixed_footer_icon_row">'
    html += '<img class="fixed_footer_image" src="'+Footter_home_icons.jsonFormat[j].symbol+'">'
    html += '</div>'
    html += '<div class="row white-text">'+Footter_home_icons.jsonFormat[j].name+'</div>'
    html += '</div>'
    }
    html += '</footer>'
    html += '</div>';
    return html;
}



function displayContent(Content_json)
{
    $('#home').show();
    var Html = "";
    Html += '<div class="content content_div">'
    
    
    for(var j=0;j<Content_json.result.length;j++){
    Html += '<div class="col s12">'
    Html += '<div class="card horizontal z-depth-4">'
    Html += '<div class="card-image">'
    Html += '<img style=" padding: 4px; margin-top: 2px" src="'+Content_json.result[j].image_url+'">'
    Html += '</div>'
    Html += '<div class="card-stacked">'
    Html += '<div class="card-content">'
    Html += '<p>'+Content_json.result[j].title+'</p>'
    Html += '</div>'
    Html += '<div class="card-action">'
    Html += '<div>Price: &#x20ba; '+Content_json.result[j].price+'</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    Html += '</div>'
    }
    Html += '</div>'
    $('#homeList').html(Html)
    
    
    //return Html;
}


function displayMyaccount(){
    $('#home').hide();
    $('#myaccount').show();

    slide_page('front','myaccount')

    var html= '';
    html+= backHeader('My Account','home');

    html += '<div class="profile_div">'
    html += '<div class="profile_img"><img src="img/man.png" width="140" style=" margin:3px 3px 2px 3px"/></div>'
    html += '<div class="profile_name">Ashu</div>'
    html +='</div>'
    
    
    
    html += '<div class="row" style="margin-top:15px;">'
    html += '<div class="col s12">'
    html += '<div class="card horizontal z-depth-4">'
    html += '<div class="card-stacked">'
    html += '<div class="card-action">'
    html += '<div style=" font-size: 16px; color: #70EE35">Email Address</div>'
    html += '<div>john@gmail.com</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'

    html += '<div class="row">'
    html += '<div class="col s12">'
    html += '<div class="card horizontal z-depth-4">'
    html += '<div class="card-stacked">'
    html += '<div class="card-action">'
    html += '<div style=" font-size: 16px; color: #70EE35">Full Name</div>'
    html += '<div>Ashutosh Mishra</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'

    html += '<div class="row">'
    html += '<div class="col s12">'
    html += '<div class="card horizontal z-depth-4">'
    html += '<div class="card-stacked">'
    html += '<div class="card-action">'
    html += '<div style=" font-size: 16px; color: #70EE35">Contact Number</div>'
    html += '<div>5566445567</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'
    html += '</div>'

    window.setTimeout(function() {
                      $('#myaccount').html(html)
                      }, 200);

    

    
    
}










