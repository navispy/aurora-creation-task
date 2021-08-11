async function getArticles() { //read

    let response = await fetch(`get_articles.php`);
    let articles = await response.json();
    
    return articles; 
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