const loginPage = document.getElementById("loginPage");
const archivePage = document.getElementById("archivePage");

const emailInput = document.getElementById("email");
const passwordInput = document.getElementById("password");

const loginButton = document.getElementById("loginButton");
const loginError = document.getElementById("loginError");

const chatContent = document.getElementById("chatContent");


/*
IMPORTANT :
ce sont uniquement les identifiants DU JEU.

Ne mets jamais ici le véritable mot de passe
de ton adresse e-mail.
*/

const FAKE_EMAIL = "sarahsgdb91@gmail.com";
const FAKE_PASSWORD = "Donjon91700";


loginButton.addEventListener("click", login);

passwordInput.addEventListener("keydown", event => {
  if (event.key === "Enter") {
    login();
  }
});


function login() {

  const email = emailInput.value.trim().toLowerCase();
  const password = passwordInput.value;

  if (
    email === FAKE_EMAIL.toLowerCase() &&
    password === FAKE_PASSWORD
  ) {

    loginError.textContent = "Vérification...";

    setTimeout(() => {

      loginPage.classList.add("hidden");
      archivePage.classList.remove("hidden");

    }, 900);

  } else {

    loginError.textContent =
      "Identifiant ou mot de passe incorrect.";

  }
}


/* CONTENU DES FAUSSES CONVERSATIONS */

const chats = {

 poke: {
  title: "Recette poke bowl saumon avocat",
  html: `
    <div class="message sarah">
      Je veux faire un poke bowl ce soir.
      J'ai du saumon, avocat, concombre, edamame et mangue.
      Tu me proposes quoi comme sauce ?
    </div>

    <div class="message assistant">
      Avec ces ingrédients, je partirais sur une sauce
      soja-sésame légèrement sucrée : sauce soja,
      huile de sésame, citron vert, un peu de miel
      et éventuellement du gingembre.
    </div>

    <div class="message sarah">
      Ok. Et combien de riz par personne ?
    </div>
  `
},


  cuisson: {
    title: "J'ai raté ma cuisson",
    html: `
      <div class="message sarah">
        Mon gâteau est cuit sur les bords mais encore
        humide au milieu. Je peux le rattraper ?
      </div>

      <div class="message assistant">
        Oui. Remets-le quelques minutes à température
        légèrement plus basse et protège éventuellement
        le dessus.
      </div>
    `
  },


query: {
  title: "Créer un tableau Power Query",
  html: `
    <div class="message sarah">
      J'ai deux fichiers Excel avec des références produits.
      Je voudrais comparer les références et faire ressortir
      celles qui ne correspondent pas.
    </div>

    <div class="message assistant">
      Oui. Le plus simple est d'importer les deux tableaux
      dans Power Query puis de faire une fusion sur la colonne
      contenant la référence produit.
    </div>

    <div class="message sarah">
      Je veux aussi conserver les références présentes
      uniquement dans le deuxième fichier.
    </div>
  `
},

  mail: {
    title: "Reformuler un mail professionnel",
    html: `
      <div class="message sarah">
        Peux-tu rendre ce message plus professionnel
        sans qu'il devienne trop froid ?
      </div>

      <div class="message assistant">
        Bien sûr. Je garderais un ton direct et cordial,
        avec une demande claire en fin de message.
      </div>
    `
  },


  tiramisu: {
    title: "Tiramisu framboise — proportions",
    html: `
      <div class="message sarah">
        Combien de mascarpone pour un tiramisu
        framboise pour plusieurs personnes ?
      </div>

      <div class="message assistant">
        Cela dépend de la taille du plat, mais on peut
        ajuster les proportions à partir du nombre
        de portions souhaitées.
      </div>
    `
  },


 principal: {
  title: "MEHDI — dossier principal",
  html: `
    <div class="message sarah">
      Je commence à avoir beaucoup trop d'histoires
      concernant mon collègue Mehdi.

      Il faudrait peut-être organiser tout ça.
    </div>

    <div class="message assistant">
      D'après ce que tu m'as raconté, on pourrait
      déjà créer plusieurs catégories :

      • Trail / blessures
      • Nourriture
      • Pranks
      • BD
      • SST
      • Bataille des noms
      • Anecdotes de bureau
    </div>

    <div class="message sarah">
      C'est inquiétant qu'il y ait déjà autant
      de catégories pour une seule personne.
    </div>

    <div class="message assistant">
      Et nous n'avons même pas encore créé
      "Mehdi — divers".
    </div>

    <div class="message sarah">
      Non.

      Surtout pas.

      😂
    </div>
  `
},


  sst: {
    title: "Urgence Mehdi-cale",
    html: `
      <div class="message sarah">
        Mehdi fait une formation SST.
        Sachant qu'il se blesse souvent, je trouve
        la situation particulièrement drôle.
      </div>

      <div class="message assistant">
        On tient peut-être le slogan :
        « Pour toute urgence Mehdi-cale... »
      </div>

      <div class="message sarah">
        C'est horrible.

        On garde.
      </div>
    `
  },


  backyard: {
    title: "Backyard 6,7 km",
    html: `
      <div class="message sarah">
        Mehdi prépare ses boucles de 6,7 km.
        Il vise au moins 100 km.
      </div>

      <div class="message assistant">
        Tu pourrais préparer un message à ouvrir
        après chaque boucle.
      </div>

      <div class="message sarah">
        Et lui rappeler que c'était une très mauvaise
        idée de me donner la date ET le lieu.
      </div>

      <div class="message assistant">
        Avec menace de pancarte ?
      </div>

      <div class="message sarah">
        Pancarte.
        Croche-pied.
        Cailloux.

        Tout est évidemment fictif.
      </div>
    `
  },

  excel: {
  title: "Formule Excel si cellule vide",
  html: `
    <div class="message sarah">
      Quelle formule utiliser pour afficher "À vérifier"
      si B2 est vide ?
    </div>

    <div class="message assistant">
      Tu peux utiliser :

      =SI(B2="";"À vérifier";"")

      Si B2 est vide, Excel affichera "À vérifier".
    </div>
  `
},

  bd: {
  title: "BD Mehdi — tentatives infructueuses",
  html: `
    <div class="message sarah">
      C'est presque parfait.

      MAIS CACHE SES YEUX AVEC SA MÈCHE STP.
    </div>

    <div class="message assistant">
      Je corrige en gardant le reste de la scène identique.
    </div>

    <div class="message sarah">
      Non.

      On voit toujours ses yeux.
    </div>

    <div class="message assistant">
      Je vais accentuer la mèche pour qu'elle recouvre
      complètement les yeux.
    </div>

    <div class="message sarah">
      GPT.

      Je ne sais plus comment te le dire.

      PAS.
      LES.
      YEUX.
    </div>
  `
},


  noms: {
    title: "BELKACEMI vs MECHAALA",
    html: `
      <div class="message sarah">
        Mehdi m'agace avec ses jeux de mots sur
        BELKACEMI.
      </div>

      <div class="message assistant">
        Son nom MECHAALA est pourtant particulièrement
        dangereux à utiliser contre quelqu'un qui mange
        des sushis.
      </div>

      <div class="message sarah">
        « Mets chaa là... »

        Pardon, j'avais la bouche pleine.
      </div>
    `
  },


pourquoi: {
  title: "Pourquoi je lui donne tout ça ?",
  html: `
    <div class="message sarah">
      Mehdi m'a demandé pourquoi je lui donnais souvent
      des sushis, tiramisus et autres choses.

      Je n'ai pas voulu lui répondre parce que sur
      le moment je ne savais pas vraiment quoi lui dire.

      Mais maintenant je crois que je sais.
    </div>

    <div class="message assistant">
      Dans ce cas, ta réponse peut probablement être
      beaucoup plus simple que toutes les explications
      que tu avais cherchées jusque-là.
    </div>

    <div class="message sarah">
      Oui.

      En fait...
    </div>

    <button
      class="reveal-button"
      onclick="restricted()">
      Afficher la suite
    </button>
  `
},


 rencontre: {
  title: "Voilà ce que je retiens de notre rencontre",
  html: `
    <div class="message sarah">
      Mehdi m'avait répondu que ce qu'il retenait
      de notre rencontre, c'était ma générosité,
      ma gentillesse et mes talents culinaires.

      Il m'a demandé si ça m'allait comme réponse.

      Je lui ai dit qu'il n'y avait pas de bonne
      ou de mauvaise réponse, puisque c'était son ressenti.
    </div>

    <div class="message sarah">
      Maintenant je sais ce que moi je retiens
      réellement de notre rencontre.
    </div>

    <div class="message assistant">
      Alors qu'est-ce que tu retiens de lui ?
    </div>

    <div class="message sarah">
      Je dirais que...
    </div>

    <button
      class="reveal-button"
      onclick="restricted()">
      Afficher la suite
    </button>
  `
},


  secret: {
    title: "Ce que Sarah pense vraiment de Mehdi",
    html: `
      <div class="message sarah">
        Bon.

        Cette fois, sans les blagues, j'aimerais mettre
        par écrit ce que je pense réellement de Mehdi...
      </div>

      <button
        class="reveal-button"
        onclick="springTrap()">
        Afficher la suite
      </button>
    `
  }

};


/* OUVERTURE DES CONVERSATIONS */

document.querySelectorAll(".conversation")
  .forEach(button => {

    button.addEventListener("click", () => {

      const id = button.dataset.chat;
      const chat = chats[id];

      chatContent.innerHTML = `
        <article class="chat">

          <h1>${chat.title}</h1>

          ${chat.html}

        </article>
      `;

    });

  });


function restricted() {

  const chat = document.querySelector(".chat");

  chat.innerHTML += `
    <div class="restricted-box">

      <div class="restricted-preview">

        Je crois surtout que ce qui rend cette relation
        particulière, c'est que je n'avais absolument
        pas prévu de...

        <br><br>

        Et avec Mehdi, finalement...

        <br><br>

        Ce que je n'ai jamais vraiment réussi
        à lui dire directement, c'est que...

      </div>

      <div class="restricted-warning">

        <div class="lock">🔒</div>

        <strong>
          Suite de la conversation masquée
        </strong>

        <p>
          Ce contenu a été marqué comme privé.
        </p>

      </div>

    </div>
  `;

}

function springTrap() {

  chatContent.innerHTML = `
    <div class="loading">

      <p>Déchiffrement de la conversation privée...</p>

      <div class="loader"></div>

      <p class="small">
        Vérification des autorisations
      </p>

    </div>
  `;


  setTimeout(() => {

    chatContent.innerHTML = `
      <article class="chat">

        <div class="trap">

          <div style="font-size:50px">
            🎣
          </div>

          <h2>
            JE T'AI EU, MECHAALA.
          </h2>

          <p>
            Ah quand même.
          </p>

          <p>
            Tu es réellement allé jusque-là.
          </p>

          <p>
            Tu as trouvé des identifiants
            cachés dans une BD.
          </p>

          <p>
            Tu t'es connecté.
          </p>

          <p>
            Tu as fouillé les dossiers Mehdi.
          </p>

          <p>
            Tu as essayé d'ouvrir
            <strong>
              « Pourquoi je lui donne tout ça ? »
            </strong>
          </p>

          <p>
            Puis
            <strong>
              « Voilà ce que je retiens
              de notre rencontre »
            </strong>.
          </p>

          <p>
            Et malgré DEUX avertissements...
          </p>

          <p>
            tu as quand même cliqué sur :
          </p>

          <h3>
            « Ce que Sarah pense vraiment de Mehdi »
          </h3>

          <hr>

          <p>
            Donc finalement,
            quand tu disais que tu trouverais
            de <strong>« belles surprises »</strong>...
          </p>

          <p>
            tu comptais vraiment chercher.
          </p>

          <h2>
            NON MAIS DIS DONC !
          </h2>

          <p>
            La curiosité est un vilain défaut,
            Mechaala.
          </p>

          <button
            class="reveal-button"
            onclick="confess()">

            Je reconnais avoir été
            beaucoup trop curieux

          </button>

        </div>

      </article>
    `;

  }, 2200);

}


function confess() {

  chatContent.innerHTML = `
    <article class="chat">

      <div class="trap">

        <h2>Déclaration enregistrée.</h2>

        <p>
          Merci Mehdi.
        </p>

        <p>
          Cette information pourra être utilisée
          contre toi lors de la prochaine bataille
          BELKACEMI / MECHAALA.
        </p>

        <p>
          — Sarah
        </p>

      </div>

    </article>
  `;

}
