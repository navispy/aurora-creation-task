function getArticles(articles) { //read
    $.ajax({
        url: "get_articles.php",
        type: 'GET',
        dataType: 'json',
        data: {

        },
        success: function(data) {
            articles = data["articles"];
            displayArticles(articles);
        },
        error: function(data) {
            let responseText = data["responseText"];
            alert(responseText);
        },
    });
}

function updateArticle(id, title, desc) { //create and update
    var calcTime = new Date().getTime();

    $.ajax({
        url: "update_article.php",
        type: 'POST',
        dataType: 'json',
        data: {
            calcTime: calcTime,
            id: id,
            title: title,
            desc: desc
        },
        success: function(data) {
            closeArticlesEdit();
        },
        error: function(data) {
            alert("Error updateArticle()");
            closeArticlesEdit();
        },
    });
}

function deleteArticle($id) { //delete

}