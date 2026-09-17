/* =========================================================
   QUESTIONS
========================================================= */

const questions = [
  {
    situation:
      "Tu crées une page Web sur les bases du HTML. « Bases du HTML » est le titre principal de la page.",

    preview: "<h2 class='preview-title'>Bases du HTML</h2>",

    question: "Quelle balise devrait entourer ce titre principal ?",

    answers: ["<h1>", "<p>", "<span>", "<li>"],

    correct: 0,

    explanation:
      "<code>&lt;h1&gt;</code> sert au titre principal d'une page. Les balises <code>&lt;h2&gt;</code>, <code>&lt;h3&gt;</code>, etc. servent aux sous-titres.",
  },

  {
    situation:
      "Sous ton titre, tu veux ajouter une courte phrase pour expliquer ce qu'est le HTML.",

    preview: "<p>HTML permet de structurer le contenu d'une page.</p>",

    question: "Quelle balise utiliserais-tu pour cette phrase ?",

    answers: ["<div>", "<p>", "<br>", "<strong>"],

    correct: 1,

    explanation:
      "<code>&lt;p&gt;</code> signifie « paragraph ». Cette balise sert à créer un paragraphe de texte.",
  },

  {
    situation:
      "Tu crées une liste de technologies utilisées pour un site : HTML, CSS et JavaScript. Tu dois définir chaque élément de la liste.",

    preview: "HTML<br>CSS<br>JavaScript",

    question: "Quelle balise représente un élément individuel de la liste ?",

    answers: ["<li>", "<ul>", "<item>", "<list>"],

    correct: 0,

    explanation:
      "<code>&lt;li&gt;</code> signifie « list item ». Elle sert à représenter chaque élément d'une liste.",
  },

  {
    situation:
      "Tu veux afficher une liste à puces avec trois éléments : HTML, CSS et JavaScript.",

    preview: "<ul><li>HTML</li><li>CSS</li><li>JavaScript</li></ul>",

    question:
      "Quelle balise sert à créer la liste non ordonnée qui contient ces éléments ?",

    answers: ["<ol>", "<ul>", "<li>", "<list>"],

    correct: 1,

    explanation:
      "<code>&lt;ul&gt;</code> signifie « unordered list ». Elle permet de créer une liste non ordonnée, généralement affichée avec des puces.",
  },

  {
    situation:
      "Dans une phrase, tu veux montrer que le mot « important » doit être fortement mis en évidence.",

    preview: "Cette information est importante.",

    question: "Quelle balise indique une forte importance ?",

    answers: ["<em>", "<strong>", "<span>", "<mark>"],

    correct: 1,

    explanation:
      "<code>&lt;strong&gt;</code> indique une forte importance. Le navigateur affiche généralement son contenu en gras.",
  },

  {
    situation:
      "Tu écris « Visiter le site du gouvernement » et tu veux que les utilisateurs puissent cliquer dessus pour accéder à une autre page.",

    preview: "Visiter le site du gouvernement",

    question: "Quelle balise HTML permet de créer un lien cliquable ?",

    answers: ["<link>", "<a>", "<href>", "<url>"],

    correct: 1,

    explanation:
      "<code>&lt;a&gt;</code> sert à créer un lien. L'attribut <code>href</code> indique la page vers laquelle le lien mène.",
  },

  {
    situation:
      "Tu veux ajouter une photo à ta page Web. L'image se trouve dans un fichier sur ton site.",

    preview: "<div class='preview-image'>IMAGE</div>",

    question: "Quelle balise HTML permet d'insérer cette image ?",

    answers: ["<picture>", "<img>", "<image>", "<src>"],

    correct: 1,

    explanation:
      "<code>&lt;img&gt;</code> permet d'intégrer une image. Son attribut <code>src</code> indique où se trouve l'image et <code>alt</code> fournit un texte alternatif.",
  },

  {
    situation:
      "Sur ta page, tu crées une partie consacrée à l'accessibilité. Cette partie contient un titre et un paragraphe qui parlent du même sujet.",

    preview: "<h3>Accessibilité</h3><p>Le contenu doit être accessible.</p>",

    question:
      "Quelle balise sémantique peux-tu utiliser pour regrouper cette partie de contenu ?",

    answers: ["<section>", "<span>", "<br>", "<meta>"],

    correct: 0,

    explanation:
      "<code>&lt;section&gt;</code> permet de regrouper du contenu qui traite d'un même sujet ou d'une même partie de la page.",
  },

  {
    situation:
      "Tu utilises Bootstrap pour créer un bouton. Tu veux utiliser les classes Bootstrap prévues pour donner au bouton son apparence.",

    preview: "<button class='btn btn-primary'>Envoyer</button>",

    question:
      "Quelle combinaison utilise les classes Bootstrap pour créer ce bouton ?",

    answers: [
      "<button class='btn btn-primary'>",
      "<button class='button-blue'>",
      "<btn class='primary'>",
      "<button bootstrap='true'>",
    ],

    correct: 0,

    explanation:
      "Bootstrap utilise des classes comme <code>btn</code> et <code>btn-primary</code> pour appliquer ses styles aux boutons.",
  },

  {
    situation:
      "Tu utilises la grille Bootstrap. Tu as créé une ligne et tu veux maintenant placer deux colonnes à l'intérieur de cette ligne.",

    preview:
      "<div class='row'><div class='col'>Colonne 1</div><div class='col'>Colonne 2</div></div>",

    question: "Quelle classe Bootstrap représente une colonne ?",

    answers: [".row", ".container", ".col", ".table"],

    correct: 2,

    explanation:
      "Dans la grille Bootstrap, une <code>.row</code> contient généralement une ou plusieurs colonnes utilisant la classe <code>.col</code>.",
  },
];

/* =========================================================
   VARIABLES
========================================================= */

let currentQuestion = 0;
let score = 0;
let answered = false;

/* =========================================================
   INITIALISATION
========================================================= */

document.addEventListener("DOMContentLoaded", function () {
  /* =====================================================
       ÉLÉMENTS HTML
    ===================================================== */

  const scenarioText = document.getElementById("scenarioText");
  const preview = document.getElementById("preview");
  const questionTitle = document.getElementById("questionTitle");
  const answers = document.getElementById("answers");
  const feedback = document.getElementById("feedback");
  const scoreDisplay = document.getElementById("score");
  const progressBar = document.getElementById("progressBar");
  const nextButton = document.getElementById("nextButton");
  const quiz = document.getElementById("quiz");
  const finalScreen = document.getElementById("finalScreen");
  const finalScore = document.getElementById("finalScore");
  const finalMessage = document.getElementById("finalMessage");
  const restartButton = document.getElementById("restartButton");

  /* =====================================================
       VÉRIFICATION
    ===================================================== */

  if (
    !scenarioText ||
    !preview ||
    !questionTitle ||
    !answers ||
    !feedback ||
    !scoreDisplay ||
    !progressBar ||
    !nextButton ||
    !quiz ||
    !finalScreen ||
    !finalScore ||
    !finalMessage ||
    !restartButton
  ) {
    console.error(
      "Erreur : un ou plusieurs éléments HTML du quiz sont introuvables.",
    );

    return;
  }

  /* =====================================================
       AFFICHER UNE QUESTION
    ===================================================== */

  function displayQuestion() {
    const question = questions[currentQuestion];

    answered = false;

    scenarioText.textContent = question.situation;

    preview.innerHTML = question.preview;

    questionTitle.textContent = question.question;

    feedback.innerHTML = "";
    feedback.classList.remove("visible");

    nextButton.classList.remove("visible");

    nextButton.textContent = "Question suivante →";

    /* -------------------------------------------------
           VIDER LES ANCIENNES RÉPONSES
        ------------------------------------------------- */

    answers.innerHTML = "";

    /* -------------------------------------------------
           CRÉER LES BOUTONS DE RÉPONSE
        ------------------------------------------------- */

    question.answers.forEach(function (answer, index) {
      const button = document.createElement("button");

      button.type = "button";
      button.className = "answer";

      button.textContent = answer;

      button.setAttribute("aria-label", "Réponse : " + answer);

      button.addEventListener("click", function () {
        checkAnswer(index, button);
      });

      answers.appendChild(button);
    });

    /* -------------------------------------------------
           SCORE
        ------------------------------------------------- */

    scoreDisplay.textContent = score;

    /* -------------------------------------------------
           PROGRESSION
        ------------------------------------------------- */

    const progress = (currentQuestion / questions.length) * 100;

    progressBar.style.width = progress + "%";
  }

  /* =====================================================
       VÉRIFIER LA RÉPONSE
    ===================================================== */

  function checkAnswer(selectedAnswer, selectedButton) {
    if (answered) {
      return;
    }

    answered = true;

    const question = questions[currentQuestion];

    const allButtons = answers.querySelectorAll(".answer");

    /* -------------------------------------------------
           DÉSACTIVER LES BOUTONS
        ------------------------------------------------- */

    allButtons.forEach(function (button) {
      button.disabled = true;
    });

    /* -------------------------------------------------
           BONNE RÉPONSE
        ------------------------------------------------- */

    if (selectedAnswer === question.correct) {
      score++;

      selectedButton.classList.add("correct");

      feedback.innerHTML =
        "<strong>✓ Bonne réponse !</strong> " + question.explanation;
    } else {
      /* -------------------------------------------------
           MAUVAISE RÉPONSE
        ------------------------------------------------- */
      selectedButton.classList.add("wrong");

      if (allButtons[question.correct]) {
        allButtons[question.correct].classList.add("correct");
      }

      feedback.innerHTML =
        "<strong>✗ Pas tout à fait.</strong> " + question.explanation;
    }

    /* -------------------------------------------------
           AFFICHER LE FEEDBACK
        ------------------------------------------------- */

    feedback.classList.add("visible");

    /* -------------------------------------------------
           METTRE À JOUR LE SCORE
        ------------------------------------------------- */

    scoreDisplay.textContent = score;

    /* -------------------------------------------------
           METTRE À JOUR LA PROGRESSION
        ------------------------------------------------- */

    const progress = ((currentQuestion + 1) / questions.length) * 100;

    progressBar.style.width = progress + "%";

    /* -------------------------------------------------
           BOUTON SUIVANT
        ------------------------------------------------- */

    nextButton.classList.add("visible");

    if (currentQuestion === questions.length - 1) {
      nextButton.textContent = "Voir mon résultat →";
    } else {
      nextButton.textContent = "Question suivante →";
    }
  }

  /* =====================================================
       QUESTION SUIVANTE
    ===================================================== */

  nextButton.addEventListener("click", function () {
    if (!answered) {
      return;
    }

    if (currentQuestion < questions.length - 1) {
      currentQuestion++;

      displayQuestion();
    } else {
      showFinalScreen();
    }
  });

  /* =====================================================
       ÉCRAN FINAL
    ===================================================== */

  function showFinalScreen() {
    quiz.hidden = true;

    finalScreen.classList.add("visible");

    finalScore.textContent = score + " / " + questions.length;

    if (score === questions.length) {
      finalMessage.textContent = "Toutes les réponses sont correctes !";
    } else if (score >= 7) {
      finalMessage.textContent =
        "Très bon résultat ! Les bases du HTML sont bien comprises.";
    } else if (score >= 5) {
      finalMessage.textContent =
        "Bon travail ! Quelques balises méritent encore un peu de pratique.";
    } else {
      finalMessage.textContent =
        "Bon départ ! Recommence le défi pour pratiquer les balises.";
    }
  }

  /* =====================================================
       RECOMMENCER
    ===================================================== */

  restartButton.addEventListener("click", function () {
    currentQuestion = 0;

    score = 0;

    answered = false;

    quiz.hidden = false;

    finalScreen.classList.remove("visible");

    displayQuestion();
  });

  /* =====================================================
       DÉMARRER LE JEU
    ===================================================== */

  displayQuestion();
});
