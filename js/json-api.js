fetch("../json/api.json")
    .then((res) => {
        return res.json();
    })
    .then((data) => {
        // console.log(data)
        let games = Object.values(data);
        // console.log(games);

        let main = document.querySelector('main');

        games.forEach((n) => {
            // console.log(n);
            for (let i = 0; i < n.length; i++) {
                // console.log(n[i]);
                let game = document.createElement("h1");
                let title = document.createElement("h3");
                let content = document.createElement("p");

                let container = document.createElement('section');
                container.classList.add('scroll-view');
                // console.log(container)

                let div = document.createElement('div');
                container.appendChild(div);

                div.appendChild(game);
                div.appendChild(title);
                div.appendChild(content);

                game.innerHTML = n[i].game;
                title.innerHTML = n[i].title;
                content.innerHTML = n[i].content;
                
                main.appendChild(container);
            }
        });
    });
