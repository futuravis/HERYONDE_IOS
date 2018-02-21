function displaysettings(){
    hideSidePanal();
    $('.page_roll').hide();
    $('#settings').show();
    slide_page('front','settings');
    
    
    var Html= '';
    Html+= backHeader('Settings','home');
    Html+= '<ul class="collection with-header" style=" margin-top: 50px">'
    Html+= '<li class="collection-item"><div>Language<a onclick="DisplayLanguage();" class="secondary-content"><i class="material-icons">send</i></a></div></li>'
    Html+= '<li class="collection-item"><div>About App<a onclick="" class="secondary-content"><i class="material-icons">send</i></a></div></li>'
    Html+= '<li class="collection-item"><div>Terms And Condition<a onclick="" class="secondary-content"><i class="material-icons">send</i></a></div></li>'
    Html+= '</ul>'

    
    window.setTimeout(function(){
                      $('#settings').html(Html)
                      }, 200);
}

function DisplayLanguage(){
    $('.page_roll').hide();
    $('#language').show();
    slide_page('front','language');

    var Html= '';
    Html+= backHeader('Language','home');
    
Html+= '<div style=" margin-top: 60px">'
    Html+= '<ul class="collection with-header" style=" margin-top: 50px">'
    Html+= '<li class="collection-item"><div>English<div style=" float: right"><input onclick="changeLang(this.id);" class="with-gap" name="group1" type="radio" id="eng" /><label for="eng"></label></div></div></li>'
    Html+= '<li class="collection-item"><div>Turkish<div style=" float: right"><input onclick="changeLang(this.id);" class="with-gap" name="group1" type="radio" id="tur" /><label for="tur"></label></div></div></li>'
    Html+= '<li class="collection-item"><div>Persian<div style=" float: right"><input onclick="changeLang(this.id);" class="with-gap" name="group1" type="radio" id="per" /><label for="per"></label></div></div></li>'

    Html+= '</ul>'

Html+= '</div>'
    
    
    
    window.setTimeout(function(){
                      $('#language').html(Html)
                      }, 200);

    
}

function changeLang(id){
    if(id=='eng'){
        localStorage.setItem("selLangulage","en");
    }else if(id=='tur'){
        localStorage.setItem("selLangulage","tr");
    }else if(id=='per'){
        localStorage.setItem("selLangulage","fa");
    }
    
}