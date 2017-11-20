$(document).click(function(){
    setTimeout(function(){
        findResteemButtons();

    },2000);

});

findResteemButtons();

function findResteemButtons()
{
    if(!window.location.href.match('/recent-replies')&&!window.location.href.match('/comments')) {
        if ($('.VotesAndComments__comments').length !== 0) {
            $('.VotesAndComments__comments').each(function (i) {
                if ($('.VotesAndComments').eq(i).find('.resteemit_img').length === 0)
                    $('.VotesAndComments__comments')[i].after(createLogo($('.VotesAndComments__comments').eq(i)["0"].childNodes["0"].href));
            });
        }
        else {
            if ($('.PostFull__responses ').length === 1 && $('.resteemit_img').length === 0) {
                $('.PostFull__responses ')[0].before(createLogo(window.location.href));
            }
        }
    }
}

function createLogo(href)
{

    var a=document.createElement('a');
    a.href='http://re'+href.replace('https://','').split('#')[0];
    a.target="_blank";
    //a.className="html5lightbox";
    var img = document.createElement('img');
    img.className = 'resteemit_img';
    img.src = chrome.extension.getURL("/img/logo.png");
    a.appendChild(img);
    return a;
}

$('.html5lightbox').click(function(){
    setTimeout(function(){$(".html5lightbox").html5lightbox();},2000);
});