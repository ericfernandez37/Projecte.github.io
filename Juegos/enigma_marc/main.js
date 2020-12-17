let items;
const game = {
    difficulty: 1,
    time: 60,
    hasStarted: false,
    points: 0,
    board: $("#board"),
    startGame: function () {
        items = originalItems.slice();
        game.points = 0;
        game.setDifficulty();
        game.createBoard();
        game.hasStarted = true;
        game.timer();
        $(".gameButton").text("Restart Game");
        $("#time").removeClass("timeDanger");
    },
    endGame: function () {
        game.hasStarted = false;
    },
    timer: function () {
        if (game.time > 0 && game.hasStarted) {
            game.time -= 1;
            $("#time").html(game.time);
            if (game.time <= 10) {
                $("#time").addClass("timeDanger");
            }
            setTimeout(game.timer, 1000);
        }
    },
    setDifficulty: function () {
        switch (game.difficulty) {
            case 1:
                game.time = 60;
                break;
            case 2:
                game.time = 45;
            case 3:
                game.time = 35;
        }
    },
    createBoard: function () {
        game.board.empty();
        game.printCategories();
        game.printNextItem();
    },
    printCategories: function () {
        const categories = [];
        items.forEach((item) => {
            const category = item.category;
            if (!categories.includes(category)) {
                categories.push(category);
                const div = $("<div data-category='"+ category +"' class='mb-2  droppable " + category +"'></div>")
                    .css({
                        "background-image": game.getRandomColor(category),
                        "background-repeat": "no-repeat",
                        "background-size": "cover",
                        "min-height": "170px",
                        "min-width": "150px",
                        "vertical-align": "center",
                    })
                    .droppable({
                        accept: "#draggable",
                        tolerance: "fit",
                        drop: function(event, ui){
                            const dropCategory = $(ui.draggable).data('category');
                            const parentCategory = $(event.target).data('category');
                            if (dropCategory === parentCategory) {
                                game.points += 10;
                                $("#points").html(game.points);
                                $(ui.draggable).removeClass("draggable");
                                items.shift();
                                if(items.length === 0){
                                    game.win();
                                }else{
                                    game.printNextItem();
                                }
                            } else {
                                $(ui.draggable).addClass('drag-revert');
                            }
                        }
                    });
                game.board.append(div);
            }
        });
    },
    printNextItem: function () {
        const nextItem = items[0];
        const div = $(
            '<div id="draggable" data-category="'+ nextItem.category +'" class="mx-auto ' +
                nextItem.category +
                '"> <div class=""><img src="Juegos/enigma_marc/img/' + 
                nextItem.name +
                '.png" class="rounded" alt="' +
                nextItem.name +
                '"></div></div>'
        ).draggable({
                containtment: "#board",
                scroll: true, // Determina si es fa scroll automàticament al moure l'element.
                revert: function() {
                    if ($(this).hasClass('drag-revert')) {
                        $(this).removeClass('drag-revert');
                        return true;
                    }
                },
            });
        game.board.append(div);
    },
    getRandomColor: function (category) {
        var letters = "0123456789ABCDEF";
        var color = "#";
        if (category == "Pescado") {
            color = "url('Juegos/enigma_marc/img/Pescaderia.jpg";
        }
        if (category == "Verdura") {
            color = "url('Juegos/enigma_marc/img/Verduleria.jpg";
        }
        if (category == "Fruta") {
            color = "url('Juegos/enigma_marc/img/Fruteria.jpg";
        }
        if (category == "Carne") {
            color = "url('Juegos/enigma_marc/img/Carniceria.jpg";
        }
        return color;
    },
    win: function() {
        $('.modal').modal();
    },
};

$(".gameButton").on("click", () => game.startGame());
