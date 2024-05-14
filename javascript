 $(document).ready(function(){
    $('#searchForm').submit(function(e){
        e.preventDefault();
        var searchTerm = $('#searchInput').val().toLowerCase();

        // Realizar la búsqueda en el repositorio
        $.getJSON('https://raw.githubusercontent.com/maicolyordan/Pagina/html/Pagina', function(data){
            var results = data.filter(function(item){
                return item.title.toLowerCase().includes(searchTerm);
            });

            displayResults(results);
        });
    });

    function displayResults(results){
        var resultsContainer = $('#results');
        resultsContainer.empty();

        results.forEach(function(result){
            var logoUrl = result.logo;
            var playerUrl = result.player;

            var logoImg = $('<img>').attr('src', logoUrl);
            var playerIframe = $('<iframe>').attr('src', playerUrl);

            resultsContainer.append(logoImg).append(playerIframe);
        });
    }
});
