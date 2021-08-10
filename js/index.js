var articles = [];

function onAddArticle() { //create

}

function onEditArticle(num) { //read

    let articlesJSON = sessionStorage.getItem("articles");
    let articles = JSON.parse(articlesJSON);

    let article = articles[num];
    let title = article["Title"];
    let desc = article["Description"];
    let id = article["ID"];
    sessionStorage.setItem("id", id);

    showArticlesEdit(title, desc);
}

function onDeleteArticle() { //delete

}

function onSaveArticle() { //save new or update existing
    let id = sessionStorage.getItem("id");
    let title = $(".title").val();
    let desc = $(".description").val();
    updateArticle(id, title, desc);
}

function displayArticles(articles) {
    var html = "";
    var numArticles = articles.length;
    for (var i = 0; i < numArticles; i++) {
        let article = articles[i];
        let articleID = article["ID"];
        html += `<img src='img/icon.png' class='article-icon' onclick='onEditArticle(${i})'></img>`;
    }

    sessionStorage.setItem("articles", JSON.stringify(articles));
    $(".articles").html(html);
}

function showArticlesEdit(title, desc) {
    $(".dialog-article-wrapper").addClass("visible");
    $(".dialog-article-edit").slideToggle("medium");

    $(".dialog-article-wrapper .error-msg").remove();

    $('.title').val(title);
    $('.description').val(desc);
    $('.title').focus();
    $('body').addClass("overflow-hidden");
}

function closeArticlesEdit() {
    $(".dialog-article-edit").slideToggle("medium", function() {
        $(".dialog-article-wrapper").removeClass("visible");
        $('body').removeClass("overflow-hidden");
    });
}

function setupHandlers() {
    $(".save").click(function() {
        onSaveArticle();
    });

    $(".dialog-article-edit .content-wrapper .input").click(function(event) {
        let className = event.currentTarget.className;
        $(`div[class='${className}'] input`).focus();
    });

    $(".dialog-article-edit .cancel").click(function() {
        closeArticlesEdit();
    });
}

$(document).ready(function() {
    getArticles(articles);
    setupHandlers();
})