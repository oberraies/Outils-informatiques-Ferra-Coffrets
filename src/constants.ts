export interface QuizQuestion {
  question: string;
  options: string[];
  correctAnswer: number;
}

export interface Exercise {
  title: string;
  description: string;
  steps: string[];
}

export interface Module {
  id: string;
  title: string;
  description: string;
  icon: string;
  theory: {
    title: string;
    sections: { title: string; content: string[] }[];
  };
  exercises: Exercise[];
  quiz: QuizQuestion[];
}

export interface Day {
  id: number;
  title: string;
  duration: string;
  description: string;
  modules: Module[];
}

export const TRAINING_DATA: Day[] = [
  {
    id: 1,
    title: "Jour 1 : Fondamentaux Windows & Word",
    duration: "6 heures",
    description: "Introduction à l'environnement Windows, gestion de fichiers et prise en main de Word.",
    modules: [
      {
        id: "win-intro",
        title: "Windows & Organisation",
        description: "Maîtriser l'environnement et ranger ses fichiers efficacement.",
        icon: "Monitor",
        theory: {
          title: "🖥️ L'environnement Windows",
          sections: [
            {
              title: "Qu'est-ce que Windows ?",
              content: [
                "Windows est le système d'exploitation de votre ordinateur.",
                "C'est le programme principal qui permet à tous les autres programmes (comme Word) de fonctionner.",
                "Comprendre Windows est essentiel avant d'utiliser les autres outils."
              ]
            },
            {
              title: "Les composants principaux",
              content: [
                "🖼️ Le Bureau : Votre espace de travail principal. C'est là que vous voyez les icônes de raccourci et les fenêtres.",
                "📋 La Barre des tâches : En bas de l'écran, elle affiche les programmes ouverts. Cliquez sur une icône pour passer d'une application à l'autre.",
                "⊞ Le Menu Démarrer : En bas à gauche (logo Windows). Accès à tous vos programmes et paramètres. Appuyez sur la touche 'Windows' pour l'ouvrir.",
                "📂 L'Explorateur de fichiers : Pour naviguer dans vos dossiers. Ouvrez-le avec Windows + E."
              ]
            },
            {
              title: "📁 Gestion des fichiers et dossiers",
              content: [
                "Bien organiser ses fichiers est essentiel. C'est comme ranger vos documents dans des classeurs !",
                "💾 Hiérarchie : Disque C:/ > Utilisateurs > VotreNom > Documents/Images/Bureau.",
                "Utilisez des noms clairs : 'Rapport_Production_2026-04' plutôt que 'Document1' ou 'Truc'.",
                "Dates : Utilisez le format AAAA-MM-JJ pour un tri automatique cohérent."
              ]
            },
            {
              title: "⌨️ Raccourcis pour les fichiers",
              content: [
                "Ctrl + C : Copier (pour dupliquer)",
                "Ctrl + V : Coller (pour placer la copie)",
                "Ctrl + X : Couper (pour déplacer)",
                "F2 : Renommer un fichier",
                "Suppr : Envoyer dans la Corbeille",
                "Ctrl + Z : Annuler la dernière action"
              ]
            },
            {
              title: "✅ Bonnes pratiques d'organisation",
              content: [
                "Créez des dossiers par service/projet : Production, Qualité, Formation.",
                "Évitez de tout mettre sur le Bureau : c'est lent et confus.",
                "Sauvegardez régulièrement sur une clé USB ou un nuage (OneDrive)."
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Apprivoiser les fenêtres",
            description: "Apprendre à ouvrir, déplacer et organiser ses outils de travail.",
            steps: [
              "Appuyez simultanément sur les touches 'Windows' et 'E' de votre clavier pour ouvrir l'Explorateur.",
              "Cliquez sur le bouton 'Démarrer' (en bas à gauche), tapez 'Calculatrice' au clavier et appuyez sur 'Entrée'.",
              "Prenez la calculatrice par sa barre de titre (le haut de la fenêtre) et déplacez-la sur tout l'écran.",
              "Cliquez sur le trait '-' en haut à droite de la calculatrice pour la 'Réduire' dans la barre des tâches.",
              "Cliquez sur l'icône de la calculatrice en bas dans la barre des tâches pour la faire réapparaître."
            ]
          },
          {
            title: "Organisation et Raccourcis",
            description: "Apprendre à ranger et manipuler les fichiers proprement.",
            steps: [
              "Sur votre bureau, faites un clic droit -> Nouveau -> Dossier.",
              "Appuyez sur la touche 'F2' et nommez-le 'FORMATION_2026'.",
              "Créez un deuxième dossier nommé 'BROUILLONS'.",
              "Cliquez sur 'BROUILLONS' puis faites Ctrl + X (Couper).",
              "Double-cliquez sur 'FORMATION_2026' pour l'ouvrir, puis faites Ctrl + V (Coller) à l'intérieur."
            ]
          }
        ],
        quiz: [
          {
            question: "Quel raccourci permet de dupliquer un fichier ?",
            options: ["Ctrl + V", "Ctrl + C", "Ctrl + X"],
            correctAnswer: 1
          },
          {
            question: "Quelle touche du clavier permet de renommer rapidement un dossier ?",
            options: ["F2", "F5", "Echap"],
            correctAnswer: 0
          },
          {
            question: "Comment doit-on écrire une date pour un tri automatique cohérent ?",
            options: ["JJ-MM-AAAA", "AAAA-MM-JJ", "Le nom du mois"],
            correctAnswer: 1
          },
          {
            question: "Où est-il conseillé de ranger ses documents de travail ?",
            options: ["Sur le Bureau", "Dans le dossier 'Documents'", "Dans la Corbeille"],
            correctAnswer: 1
          },
          {
            question: "Que se passe-t-il si je fais 'Ctrl + Z' ?",
            options: ["J'efface tout", "J'annule la dernière action", "Je ferme Windows"],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "word-base",
        title: "Word : Bases et Styles",
        description: "Apprendre à structurer et mettre en forme des documents professionnels.",
        icon: "FileText",
        theory: {
          title: "📝 Découvrir Microsoft Word",
          sections: [
            {
              title: "L'interface Word",
              content: [
                "Le Ruban : Contient tous les outils organisés en onglets (Accueil, Insertion, Mise en page...)",
                "La Zone de travail : La page blanche où vous tapez votre texte.",
                "La Barre d'accès rapide : En haut à gauche, pour 'Enregistrer' ou 'Annuler' rapidement.",
                "La Barre d'état : En bas, affiche le nombre de pages, de mots, et le zoom."
              ]
            },
            {
              title: "Mise en forme et Raccourcis",
              content: [
                "Ctrl + G : Gras (pour les titres)",
                "Ctrl + I : Italique",
                "Ctrl + U : Souligné",
                "Couleur : Utilisez le bouton 'A' avec une barre de couleur pour changer la couleur du texte.",
                "Alignement : Ctrl + E pour centrer, Ctrl + J pour justifier (aligner des deux côtés)."
              ]
            },
            {
              title: "Les Styles : Le secret de la structure",
              content: [
                "Utilisez Titre 1, Titre 2 dans l'onglet 'Accueil' pour vos titres.",
                "Avantage : Cela permet de créer une table des matières automatique plus tard.",
                "Ne vous contentez pas de grossir le texte à la main !"
              ]
            },
            {
              title: "Enregistrer son travail",
              content: [
                "Ctrl + S : Enregistrer (à faire toutes les 10 minutes !)",
                "F12 : Enregistrer sous (pour changer de nom ou d'emplacement).",
                "Formats : .docx pour modifier, .pdf pour envoyer une version finale figée."
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Note de service structurée",
            description: "Utiliser les styles et les raccourcis clavier.",
            steps: [
              "Tapez 'DIRECTION GÉNÉRALE' en haut de la page.",
              "Appliquez le style 'Titre 1' à ce texte (onglet Accueil).",
              "Allez à la ligne et tapez 'Objet : Nouvelles consignes'. Mettez-le en gras (Ctrl + G).",
              "Tapez un petit paragraphe de 2 lignes, puis utilisez Ctrl + J pour le justifier.",
              "Sauvegardez le fichier dans votre dossier 'FORMATION_2026' en l'appelant 'Note_Direction_V1'."
            ]
          },
          {
            title: "Mise en forme d'un compte-rendu",
            description: "Apprendre à varier les styles et utiliser les couleurs.",
            steps: [
              "Écrivez 'COMPTE-RENDU DE RÉUNION' et centrez-le (Ctrl + E).",
              "Mettez ce titre en bleu et en taille 18.",
              "Allez à la ligne (Entrée) et tapez 'Présents :'. Mettez ce mot en italique (Ctrl + I).",
              "Utilisez le bouton 'Couleur de texte' pour mettre les noms des absents en rouge.",
              "Appuyez sur 'F12' pour enregistrer ce nouveau document sous le nom 'CR_Hebdo_2026'."
            ]
          }
        ],
        quiz: [
          {
            question: "Quel raccourci permet d'enregistrer rapidement son document ?",
            options: ["Ctrl + S", "Ctrl + P", "F5"],
            correctAnswer: 0
          },
          {
            question: "Pourquoi utiliser les styles 'Titre 1' et 'Titre 2' ?",
            options: ["Pour que ce soit joli", "Pour créer une table des matières automatiquement", "Pour économiser de l'encre"],
            correctAnswer: 1
          },
          {
            question: "Quel format est le plus adapté pour envoyer un document qui ne doit pas être modifié ?",
            options: [".docx", ".pdf", ".txt"],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "word-pro",
        title: "Word : Tableaux et Mise en page Pro",
        description: "Maîtriser les tableaux, les images et la table des matières.",
        icon: "FileText",
        theory: {
          title: "🎨 Mise en page professionnelle",
          sections: [
            {
              title: "📊 Les Tableaux",
              content: [
                "Création : Onglet Insertion -> Tableau.",
                "Modification : Utilisez la touche 'Tab' en fin de ligne pour en ajouter une nouvelle.",
                "Fusionner : Sélectionnez des cases -> Clic droit -> Fusionner pour n'en faire qu'une seule."
              ]
            },
            {
              title: "🖼️ Images et Habillage",
              content: [
                "Insertion : Onglet Insertion -> Images.",
                "Astuce Habillage : Cliquez sur l'image -> Options de mise en page -> Choisissez 'Carré'.",
                "Cela permet de déplacer l'image librement sans décaler tout votre texte."
              ]
            },
            {
              title: "🔝 En-têtes et Pieds de page",
              content: [
                "Onglet Insertion -> En-tête / Pied de page.",
                "Utilité : Pour ajouter le logo Ferra Coffret, la date ou les numéros de page sur chaque feuille."
              ]
            },
            {
              title: "📑 Table des matières automatique",
              content: [
                "Condition : Vos titres doivent avoir un Style (Titre 1, Titre 2).",
                "Action : Onglet Références -> Table des matières.",
                "Mise à jour : Clic droit sur la table -> Mettre à jour les champs si vous changez les titres."
              ]
            },
            {
              title: "🖨️ Mise en page avancée",
              content: [
                "Sauts de page (Ctrl + Entrée) : Pour passer immédiatement à la page suivante.",
                "Sauts de section : Pour avoir une page en paysage au milieu d'un document portrait.",
                "Aperçu : Ctrl + P pour vérifier l'impression avant de lancer."
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Créer un planning de production",
            description: "Apprendre à manipuler les tableaux complexes.",
            steps: [
              "Insérez un tableau de 3 colonnes et 5 lignes (Insertion -> Tableau).",
              "Sur la 1ère ligne, tapez : 'Poste', 'Agent', 'Horaire'.",
              "Sélectionnez la 1ère ligne et mettez un fond de couleur (Pot de peinture dans l'onglet Création de tableau).",
              "Fusionnez les deux premières cases de la 3ème ligne."
            ]
          },
          {
            title: "Rapport avec Table des matières",
            description: "Réaliser un document structuré et exportable.",
            steps: [
              "Créez 3 pages (Ctrl + Entrée pour sauter de page).",
              "Mettez un titre sur chaque page avec le style 'Titre 1'.",
              "Revenez en haut de la page 1.",
              "Allez dans l'onglet 'Références' et insérez une 'Table des matières'.",
              "Exportez le résultat au format PDF (Fichier -> Exporter)."
            ]
          }
        ],
        quiz: [
          {
            question: "Dans quel onglet trouve-t-on le bouton pour insérer une Table des matières ?",
            options: ["Accueil", "Insertion", "Références"],
            correctAnswer: 2
          },
          {
            question: "Quel habillage d'image permet de la déplacer librement sans casser le texte ?",
            options: ["Aligné sur le texte", "Dessous", "Carré"],
            correctAnswer: 2
          },
          {
            question: "Comment ajoute-t-on une ligne à la fin d'un tableau ?",
            options: ["On attend", "On appuie sur la touche Tab dans la dernière case", "On éteint Word"],
            correctAnswer: 1
          },
          {
            question: "Quel raccourci permet de sauter immédiatement à la page suivante ?",
            options: ["Ctrl + Entrée", "Maj + Espace", "Alt + F12"],
            correctAnswer: 0
          }
        ]
      }
    ]
  },
  {
    id: 2,
    title: "Jour 2 : Maîtrise d'Excel",
    duration: "6 heures",
    description: "Apprendre à créer des tableaux, automatiser les calculs et visualiser les données avec Excel.",
    modules: [
      {
        id: "excel-decouverte",
        title: "Excel : Découverte",
        description: "Comprendre l'environnement Excel et la structure d'un tableau.",
        icon: "Monitor",
        theory: {
          title: "📊 Découvrir Microsoft Excel",
          sections: [
            {
              title: "L'outil indispensable de tout le monde",
              content: [
                "Excel est un tableur : pour organiser des données, faire des calculs et créer des graphiques.",
                "Il est essentiel pour le suivi de production quotidien."
              ]
            },
            {
              title: "L'interface Excel",
              content: [
                "Cellule : Intersection d'une colonne (lettre) et d'un numéro de ligne (Ex: A1, B5).",
                "Barre de formule : Pour voir et modifier ce qui est écrit dans la cellule.",
                "Zone de nom : Affiche l'adresse de la case où vous êtes (en haut à gauche).",
                "Feuilles de calcul : Les onglets en bas (Feuil1, Feuil2...) pour séparer vos dossiers."
              ]
            },
            {
              title: "Types de données et Alignements",
              content: [
                "Texte : Alignés à GAUCHE (Noms, adresses, codes).",
                "Nombres et Dates : Alignés à DROITE (Indispensable pour les calculs).",
                "Formules (=) : Alignées à DROITE (Affiche le résultat du calcul)."
              ]
            },
            {
              title: "Saisie et Navigation rapide",
              content: [
                "Touche Entrée : Valider et descendre d'une case.",
                "Touche Tab : Valider et aller à droite d'une case.",
                "Touche F2 : Modifier le texte à l'intérieur d'une case.",
                "Ctrl + A : Sélectionner tout votre tableau."
              ]
            },
            {
              title: "Mise en forme des cellules",
              content: [
                "Format Nombre : Clic droit -> Format de cellule (pour ajouter des décimales).",
                "Bordures : Accueil -> Bordures (pour que le tableau soit visible à l'impression).",
                "Largeur de colonne : Double-cliquez entre deux colonnes pour ajuster la taille au texte.",
                "Fusionner : Sélectionner -> Fusionner et centrer (pour créer un grand titre sur plusieurs cases)."
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Créer un annuaire d'équipe",
            description: "Saisir et mettre en forme proprement.",
            steps: [
              "Créez un nouveau classeur Excel.",
              "En A1, B1, C1, tapez : 'Nom', 'Prénom', 'Poste'.",
              "Saisissez les données pour 3 collègues.",
              "Sélectionnez vos entêtes (A1:C1) et mettez-les en gras avec un fond bleu.",
              "Ajoutez des 'Toutes les bordures' à votre tableau."
            ]
          },
          {
            title: "Bordereau de livraison Excel",
            description: "Mise en page et fusion de cellules.",
            steps: [
              "Sélectionnez les cellules A1 à D1.",
              "Cliquez sur 'Fusionner et centrer' (onglet Accueil).",
              "Tapez 'BORDEREAU DE LIVRAISON - FERRA COFFRET'.",
              "Double-cliquez entre la colonne A et B pour ajuster la largeur.",
              "Ajoutez une bordure épaisse autour de ce titre."
            ]
          }
        ],
        quiz: [
          {
            question: "Par défaut, comment sont alignés les chiffres dans une cellule ?",
            options: ["À gauche", "Au milieu", "À droite"],
            correctAnswer: 2
          },
          {
            question: "Comment sélectionne-t-on une cellule précise ?",
            options: ["On l'appelle par son nom (ex: C5)", "On clique sur l'écran au hasard", "On tape sur le clavier"],
            correctAnswer: 0
          },
          {
            question: "Quelle touche permet de 'modifier' le contenu d'une cellule sans tout effacer ?",
            options: ["F2", "F5", "Espace"],
            correctAnswer: 0
          },
          {
            question: "Quelle touche permet de valider et d'aller directement à la case de droite ?",
            options: ["Entrée", "Tab", "Maj"],
            correctAnswer: 1
          },
          {
            question: "Quel raccourci permet de sélectionner tout le tableau d'un coup ?",
            options: ["Ctrl + S", "Ctrl + A", "Ctrl + C"],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "excel-formules",
        title: "Excel : formules essentielles",
        description: "Apprendre à faire des calculs dynamiques et utiliser les fonctions de base.",
        icon: "Wrench",
        theory: {
          title: "🔢 Les formules dans Excel",
          sections: [
            {
              title: "Toute formule commence par le signe =",
              content: [
                "C'est ce qui différencie une formule d'un simple texte.",
                "Sans le =, Excel ne calculera rien."
              ]
            },
            {
              title: "Opérations de base",
              content: [
                "+ (Addition) : =A1+B1",
                "- (Soustraction) : =A1-B1",
                "* (Multiplication) : =A1*B1",
                "/ (Division) : =A1/B1",
                "Pourcentage : =A1/B1*100"
              ]
            },
            {
              title: "Fonctions essentielles",
              content: [
                "SOMME() : Additionne une plage de cellules. =SOMME(A1:A50)",
                "MOYENNE() : Calcule la moyenne. =MOYENNE(A1:A10)",
                "MIN() : Trouve la plus petite valeur d'une plage.",
                "MAX() : Trouve la plus grande valeur d'une plage.",
                "NB() : Compte les cellules contenant des NOMBRES.",
                "NBVAL() : Compte les cellules NON VIDES (texte ou nombres)."
              ]
            },
            {
              title: "🔗 Références de cellules (Touche F4)",
              content: [
                "Relative (A1) : Change quand on copie (glisse) la formule.",
                "Absolue ($A$1) : Ne change jamais, même si on copie.",
                "Touche magique F4 : Cliquez sur une cellule dans la formule et appuyez sur F4 pour basculer rapidement vers le mode bloqué ($)."
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Calcul de facture simple",
            description: "Multiplier et additionner des lignes.",
            steps: [
              "Créez 3 colonnes : 'Article', 'Prix Unitaire', 'Quantité', 'Total'.",
              "Remplissez les 3 premières colonnes pour 2 articles.",
              "Dans la colonne 'Total', tapez la formule : =B2*C2 (Prix x Quantité).",
              "En bas de la colonne 'Total', utilisez la 'Somme automatique' pour le total général."
            ]
          },
          {
            title: "Performance de production",
            description: "Calculer des moyennes et trouver les records.",
            steps: [
              "Créez un tableau avec les jours de la semaine et la production réalisée (en tonnes).",
              "En bas du tableau, utilisez =MOYENNE() pour calculer la moyenne de la semaine.",
              "Utilisez =MAX() pour identifier le jour le plus productif.",
              "Utilisez =MIN() pour identifier le jour le moins productif.",
              "Utilisez =SOMME() pour le total hebdomadaire."
            ]
          }
        ],
        quiz: [
          {
            question: "Quelle est la bonne formule pour additionner de A1 à A10 ?",
            options: ["=A1+A10", "=SOMME(A1:A10)", "=AJOUT(A1-A10)"],
            correctAnswer: 1
          },
          {
            question: "Que signifie le signe $ dans une cellule (ex: $A$1) ?",
            options: ["C'est pour afficher de l'argent", "La cellule est bloquée (référence absolue)", "La cellule est masquée"],
            correctAnswer: 1
          },
          {
            question: "Quelle fonction utiliser pour trouver le résultat le plus bas dans une liste ?",
            options: ["=PETIT()", "=MIN()", "=BAS()"],
            correctAnswer: 1
          },
          {
            question: "Quelle touche du clavier permet de bloquer rapidement une cellule avec les $ ?",
            options: ["F2", "F4", "F12"],
            correctAnswer: 1
          },
          {
            question: "Quelle est la différence entre NB() et NBVAL() ?",
            options: ["NBVAL compte aussi les cellules avec du texte", "NB compte tout, NBVAL seulement les chiffres", "Il n'y a aucune différence"],
            correctAnswer: 0
          }
        ]
      },
      {
        id: "excel-conditionnelles",
        title: "Excel : Fonctions conditionnelles",
        description: "Apprendre à faire des tests logiques avec la fonction SI.",
        icon: "FileText",
        theory: {
          title: "🔀 Fonctions conditionnelles",
          sections: [
            {
              title: "La fonction SI",
              content: [
                "Structure : =SI(condition ; valeur_si_vrai ; valeur_si_faux)",
                "Exemple Stock : =SI(F4<50 ; '⚠️ Stock bas' ; '✅ OK')",
                "Exemple Alerte : =SI(E4/C4>0.5 ; 'Attention rotation élevée' ; 'Normal')"
              ]
            },
            {
              title: "SI imbriqués (Plusieurs tests)",
              content: [
                "Vous pouvez mettre un SI dans un autre SI.",
                "Structure : =SI(F4<20 ; '🔴 Critique' ; SI(F4<50 ; '🟡 Bas' ; '🟢 Normal'))"
              ]
            },
            {
              title: "Statistiques intelligentes",
              content: [
                "SOMME.SI : Calcule la somme uniquement pour les cellules qui respectent un critère.",
                "NB.SI : Compte le nombre de cellules qui respectent un critère.",
                "Exemple : =NB.SI(B1:B10 ; '>100') compte les valeurs supérieures à 100."
              ]
            },
            {
              title: "Mise en forme conditionnelle",
              content: [
                "Permet de colorer automatiquement une cellule selon sa valeur.",
                "Chemin : Accueil -> Mise en forme conditionnelle.",
                "Utile pour voir les alertes de stock en rouge d'un seul coup d'œil."
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Gestion de stock avec alerte",
            description: "Afficher 'Commander' quand le stock est bas.",
            steps: [
              "Colonnes : 'Produit', 'Stock Actuel'.",
              "Saisissez 10 et 2 pour deux produits.",
              "Dans la 3ème colonne, créez une formule SI : =SI(B2<5 ; 'COMMANDER' ; 'OK').",
              "Changez le chiffre du stock pour voir la réponse changer."
            ]
          },
          {
            title: "Analyse de production par équipe",
            description: "Utiliser SOMME.SI et NB.SI pour faire des bilans.",
            steps: [
              "Créez 2 colonnes : 'Équipe' (A ou B) et 'Production' (en kg).",
              "Remplissez 6 lignes avec des données variées.",
              "Utilisez =SOMME.SI() pour calculer le total produit uniquement par l'Équipe A.",
              "Utilisez =NB.SI() pour compter combien de fois l'équipe a dépassé les 500kg."
            ]
          }
        ],
        quiz: [
          {
            question: "Dans =SI(A1>10; 'Gagné'; 'Perdu'), que se passe-t-il si A1 vaut 5 ?",
            options: ["Il affiche 'Gagné'", "Il affiche 'Perdu'", "Il affiche une erreur"],
            correctAnswer: 1
          },
          {
            question: "Quelle fonction permet de compter seulement les cellules qui contiennent le mot 'Absent' ?",
            options: ["=COMPTE()", "=NB.SI()", "=SOMME.SI()"],
            correctAnswer: 1
          },
          {
            question: "Comment colorer automatiquement une case de stock en rouge quand elle est vide ?",
            options: ["On le fait à la main chaque jour", "On utilise la Mise en forme conditionnelle", "On utilise la fonction SOMME"],
            correctAnswer: 1
          },
          {
            question: "Dans une fonction SI, comment sépare-t-on la condition, la valeur si vrai et la valeur si faux ?",
            options: ["Avec une virgule (,)", "Avec un point-virgule (;)", "Avec un espace"],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "excel-graphiques",
        title: "Excel : Graphiques",
        description: "Transformer des tableaux en visuels parlants.",
        icon: "Globe",
        theory: {
          title: "📈 Créer des graphiques",
          sections: [
            {
              title: "L'intérêt des visuels",
              content: [
                "Les graphiques transforment vos données en visuels compréhensibles d'un seul coup d'œil.",
                "Indispensable pour les présentations et rapports chez Ferra Coffret."
              ]
            },
            {
              title: "Types de graphiques courants",
              content: [
                "Histogramme : Pour comparer des quantités entre catégories (ex: production par produit).",
                "Courbe : Pour montrer une évolution dans le temps (ex: production mensuelle).",
                "Secteur (Camembert) : Pour montrer des proportions ou répartitions (ex: répartition du stock).",
                "Barres : Comme l'histogramme mais à l'horizontal."
              ]
            },
            {
              title: "Créer un graphique en 4 étapes",
              content: [
                "1. Sélectionnez vos données (y compris les en-têtes, sans les totaux).",
                "2. Onglet Insertion -> Choisissez le type de graphique.",
                "3. Personnalisez : titres, légendes, couleurs (onglet Création de graphique).",
                "4. Positionnez : déplacez et redimensionnez votre visuel."
              ]
            },
            {
              title: "💡 Le conseil d'expert",
              content: [
                "Sélectionnez bien vos données AVANT de créer le graphique.",
                "N'incluez pas les lignes de totaux dans la sélection, cela fausserait les proportions du graphique."
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Mon premier graphique de ventes",
            description: "Créer un histogramme simple.",
            steps: [
              "Faites un tableau : Colonne A (Mois), Colonne B (Ventes).",
              "Saisissez Janvier à Mars avec des montants.",
              "Sélectionnez le tableau.",
              "Insertion -> Graphique à barres (Histogramme).",
              "Modifiez le titre en 'Ventes Trimestre 1'."
            ]
          },
          {
            title: "Analyse des pertes de production",
            description: "Créer un graphique en secteurs (Camembert).",
            steps: [
              "Créez un tableau avec 'Cause de perte' (Machine, Humain, Matière) et la 'Quantité'.",
              "Sélectionnez les données (titres inclus).",
              "Allez dans Insertion -> Graphique en secteurs (Camembert).",
              "Ajoutez les 'Étiquettes de données' pour voir les chiffres sur le graphique.",
              "Changez la couleur pour que la cause principale soit en rouge."
            ]
          }
        ],
        quiz: [
          {
            question: "Quel type de graphique est le plus adapté pour montrer des parts sur un total de 100% ?",
            options: ["Courbe", "Histogramme", "Secteur (Camembert)"],
            correctAnswer: 2
          },
          {
            question: "Faut-il inclure les totaux d'un tableau dans la sélection pour créer un graphique ?",
            options: ["Oui, toujours", "Non, cela fausse le graphique", "Seulement pour les histogrammes"],
            correctAnswer: 1
          },
          {
            question: "Dans quel onglet se trouve le bouton pour créer un graphique ?",
            options: ["Accueil", "Insertion", "Mise en page"],
            correctAnswer: 1
          },
          {
            question: "Quel graphique utiliser pour montrer la progression de la production sur toute l'année ?",
            options: ["Un graphique en courbes", "Un camembert", "Un tableau simple"],
            correctAnswer: 0
          }
        ]
      }
    ]
  },
  {
    id: 3,
    title: "Jour 3 : Excel Avancé & Web",
    duration: "6 heures",
    description: "Maîtriser les bases de données Excel, naviguer sur le web et valider les acquis de la formation.",
    modules: [
      {
        id: "excel-avance",
        title: "Excel : Tri, filtres et tableaux",
        description: "Organiser de grandes quantités de données et utiliser les fonctions de recherche.",
        icon: "Wrench",
        theory: {
          title: "🚀 Maîtriser les bases de données Excel",
          sections: [
            {
              title: "1. Organiser : Tri et Filtres",
              content: [
                "Le Tri : Réorganise vos lignes. Pratique pour classer par date (plus récent en haut) ou par ordre alphabétique de produit.",
                "⚠️ Attention : Sélectionnez toujours l'intégralité de vos données avant de trier, sinon vous risquez de mélanger les lignes !",
                "Le Filtre (Raccourci : Ctrl + Maj + L) : Affiche des flèches ▼ sur vos en-têtes. Il permet de masquer temporairement ce qui ne vous intéresse pas (ex: voir uniquement l'Equipe A).",
                "Figer les volets : Très utile pour les longs tableaux. Allez dans Affichage -> Figer la première ligne : les titres resteront toujours visibles pendant que vous descendez."
              ]
            },
            {
              title: "2. Le mode 'Tableau' (La base du Pro)",
              content: [
                "Au lieu de faire vos bordures à la main, sélectionnez vos données et faites Ctrl + L (ou Insertion -> Tableau).",
                "Pourquoi c'est mieux ?",
                "✅ Visuel : Une ligne sur deux est colorée automatiquement (meilleure lisibilité).",
                "✅ Dynamique : Si vous ajoutez une ligne en bas, elle hérite automatiquement des formules et du style.",
                "✅ Filtres : Ils sont ajoutés tout seuls sur la première ligne."
              ]
            },
            {
              title: "3. Statistiques complexes (Fonctions ENS)",
              content: [
                "Quand on a besoin de plus d'une condition.",
                "SOMME.SI.ENS : 'Additionne si...' (ex: Additionne les tonnes si c'est l'Equipe B ET si c'est du Plastique).",
                "NB.SI.ENS : 'Compte si...' (ex: Combien de fois l'Equipe A a fait plus de 1000 pièces ?).",
                "Structure : =SOMME.SI.ENS(ce qu'on additionne ; plage critère 1 ; critère 1 ; plage critère 2 ; critère 2)."
              ]
            },
            {
              title: "4. RECHERCHEV : Le robot chercheur",
              content: [
                "C'est la fonction la plus aimée en entreprise pour lier deux tableaux.",
                "Imaginez un annuaire : vous avez le NOM, vous voulez le TÉLÉPHONE.",
                "Structure : =RECHERCHEV(ce qu'on cherche ; le grand tableau ; numéro de colonne ; FAUX).",
                "Le 'FAUX' à la fin est vital : il demande à Excel de trouver la valeur EXACTE.",
                "Astuce : Utilisez la touche F4 pour mettre des $ (ex: $A$1:$C$50) afin que votre zone de recherche ne se déplace pas quand vous tirez la formule."
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Gestion de base de données",
            description: "Nettoyer et filtrer un grand tableau.",
            steps: [
              "Créez une liste de 10 lignes avec : Date, Équipe, Produit, Défauts.",
              "Transformez cette liste en 'Tableau' (Ctrl + L).",
              "Triez par Date (du plus récent au plus ancien).",
              "Filtrez pour ne voir que l'Équipe B.",
              "Figez la première ligne pour qu'elle reste en haut."
            ]
          },
          {
            title: "Rapport de production complexe",
            description: "Utiliser les fonctions .SI.ENS.",
            steps: [
              "À côté de votre tableau, créez une cellule 'Objectif atteint ?'.",
              "Utilisez NB.SI.ENS pour compter combien de fois l'Equipe A a eu 0 défauts.",
              "Utilisez SOMME.SI.ENS pour calculer la production totale du Produit X par l'Equipe B."
            ]
          },
          {
            title: "Automatiser avec RECHERCHEV",
            description: "Créer un outil de consultation de stock.",
            steps: [
              "Sur une Feuil2, créez une liste : Code (1, 2, 3) et Nom de l'article.",
              "Sur la Feuil1, tapez un Code dans une cellule.",
              "Utilisez la fonction =RECHERCHEV() pour que le nom de l'article s'affiche tout seul quand on change le code."
            ]
          }
        ],
        quiz: [
          {
            question: "Quel raccourci permet de transformer une simple liste en 'Tableau Excel' ?",
            options: ["Ctrl + L", "Ctrl + T", "Ctrl + B"],
            correctAnswer: 0
          },
          {
            question: "Quelle fonction utiliser pour additionner des montants si on a DEUX critères ?",
            options: ["=SOMME.SI()", "=SOMME.SI.ENS()", "=SOMME.PLUS()"],
            correctAnswer: 1
          },
          {
            question: "Que fait RECHERCHEV si vous oubliez de bloquer le tableau avec les $ ?",
            options: ["Rien, ça marche quand même", "La recherche se décale et donne des erreurs", "Excel s'éteint"],
            correctAnswer: 1
          },
          {
            question: "Comment garder la ligne des titres toujours visible quand on descend ?",
            options: ["On la colle avec du ruban", "Affichage -> Figer les volets", "On ne peut pas"],
            correctAnswer: 1
          },
          {
            question: "Quel raccourci clavier active/désactive les filtres rapidement ?",
            options: ["Ctrl + Maj + L", "Alt + F4", "Ctrl + F"],
            correctAnswer: 0
          }
        ]
      },
      {
        id: "web-usage",
        title: "L'outil Internet",
        description: "Naviguer efficacement, utiliser l'IA et communiquer par email.",
        icon: "Globe",
        theory: {
          title: "🌍 Devenir un expert du Web",
          sections: [
            {
              title: "1. La recherche efficace (Google)",
              content: [
                "Utilisez des mots-clés plutôt que des phrases : 'Règles sécurité chantier' est plus efficace que 'je cherche les règles de sécurité'.",
                "Utilisez les guillemets \" \" pour chercher une expression exacte.",
                "Utilisez l'onglet 'Images' ou 'Vidéos' selon votre besoin.",
                "Favoris : Cliquez sur l'étoile ⭐ pour retrouver vos outils de travail instantanément."
              ]
            },
            {
              title: "2. Apprendre avec YouTube",
              content: [
                "C'est la plus grande bibliothèque de tutoriels au monde.",
                "Astuce : Regardez la date de la vidéo pour être sûr que l'information n'est pas périmée (surtout pour Excel).",
                "Utilisez la barre de recherche avec des termes précis : 'Tuto Excel RechercheV rapide'.",
                "Réglages : Vous pouvez ralentir la vidéo (paramètres ⚙️) si le formateur va trop vite."
              ]
            },
            {
              title: "3. L'Intelligence Artificielle (Gemini, ChatGPT)",
              content: [
                "Ce sont des assistants personnels à qui on peut poser des questions complexes.",
                "Comment bien les utiliser (Le Prompt) ?",
                "✅ Donnez du contexte : 'Tu es un expert Excel. Aide-moi à...'",
                "✅ Soyez précis : 'Explique-moi la fonction SI simplement'.",
                "⚠️ Attention : Relisez toujours ce que l'IA écrit, elle peut parfois faire des erreurs !"
              ]
            },
            {
              title: "4. Communiquer par Email",
              content: [
                "Objet : Soyez clair et court (ex: 'Rapport de production - 20/04').",
                "Pièce jointe 📎 : N'oubliez pas de la joindre AVANT d'envoyer (astuce : citez la pièce jointe dans le texte).",
                "Politesse : Toujours commencer par 'Bonjour' et finir par 'Cordialement'.",
                "CC : Pour informer une personne. CCI : Pour que les autres ne voient pas l'adresse."
              ]
            },
            {
              title: "5. Sécurité et Vigilance",
              content: [
                "Cadenas (HTTPS) : Indique que la connexion est cryptée.",
                "Mots de passe : Ne jamais les partager et utiliser des combinaisons complexes.",
                "Phishing : Si un email vous demande votre mot de passe urgemment, c'est une arnaque !"
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Recherche et Veille",
            description: "Trouver une information technique et l'enregistrer.",
            steps: [
              "Ouvrez Chrome et allez sur Google.",
              "Cherchez 'Norme électrique NF C 15-100 résumé'.",
              "Enregistrez une page utile dans vos favoris.",
              "Allez sur YouTube et cherchez une vidéo de moins de 5 minutes sur 'Calculer un pourcentage Excel'."
            ]
          },
          {
            title: "Tester l'Intelligence Artificielle",
            description: "Utiliser Gemini ou ChatGPT pour résoudre un problème.",
            steps: [
              "Ouvrez Gemini ou ChatGPT.",
              "Tapez ce prompt : 'Explique-moi comme si j'avais 10 ans comment fonctionne une RECHERCHEV sur Excel'.",
              "Demandez-lui ensuite : 'Donne-moi une idée de formule pour colorer une case en rouge si le stock tombe sous 20'."
            ]
          },
          {
            title: "Rédaction d'un email pro",
            description: "Préparer un message structuré dans Word.",
            steps: [
              "Ouvrez Word.",
              "Rédigez un email pour votre chef.",
              "Objet : Synthèse de la formation digitale.",
              "Contenu : Expliquez en 3 points ce que vous avez appris de plus utile pour votre poste de travail.",
              "Terminez par une formule de politesse correcte."
            ]
          }
        ],
        quiz: [
          {
            question: "Quel symbole permet de chercher une expression exacte sur Google ?",
            options: ["Les parenthèses ( )", "Les guillemets \" \"", "Le signe +"],
            correctAnswer: 1
          },
          {
            question: "Pour demander quelque chose à une IA (Gemini), on écrit :",
            options: ["Un code secret", "Un prompt (une consigne précise)", "Un algorithme"],
            correctAnswer: 1
          },
          {
            question: "Dans un email, que signifie l'icône trombone 📎 ?",
            options: ["Supprimer l'email", "Ajouter une pièce jointe", "Mettre en gras"],
            correctAnswer: 1
          },
          {
            question: "Faut-il toujours croire à 100% les réponses d'une Intelligence Artificielle ?",
            options: ["Oui, elle sait tout", "Non, il faut toujours vérifier ses réponses", "Seulement si c'est ChatGPT"],
            correctAnswer: 1
          },
          {
            question: "Comment ralentir un formateur qui parle trop vite sur YouTube ?",
            options: ["On ne peut pas", "Via les paramètres (roue crantée) -> Vitesse de lecture", "En appuyant sur Pause toutes les secondes"],
            correctAnswer: 1
          }
        ]
      },
      {
        id: "atelier-synthese",
        title: "Atelier de Synthèse Finale",
        description: "Le grand test final : mobilisez toutes vos compétences numériques pour résoudre un cas pratique complet.",
        icon: "CheckCircle2",
        theory: {
          title: "🎯 Synthèse : Devenir un Agent de Maîtrise Digital",
          sections: [
            {
              title: "1. L'organisation du poste (Jour 1)",
              content: [
                "L'Explorateur de fichiers : Votre bureau numérique. Créez des dossiers thématiques (Projets, Factures, RH) pour ne rien perdre.",
                "Raccourcis Vitaux : Gagnez des heures avec Ctrl+C (Copier), Ctrl+V (Coller), Ctrl+S (Enregistrer), et l'indispensable Ctrl+Z (Annuler).",
                "Clavier : La touche Windows pour chercher un logiciel, Entrée pour valider, Echap pour annuler."
              ]
            },
            {
              title: "2. La rédaction pro (Jour 1)",
              content: [
                "Word : Ne faites plus de mise en forme 'au hasard'. Utilisez les styles pour les titres afin de structurer vos rapports de chantier.",
                "Saut de page (Ctrl+Entrée) : Pour changer de page proprement sans multiplier les espaces.",
                "Correction : Utilisez toujours le correcteur orthographique avant d'imprimer ou d'envoyer."
              ]
            },
            {
              title: "3. Le pilotage par les chiffres (Jour 2 & 3)",
              content: [
                "Excel Formules : Du simple =A1+B1 aux puissants SI, SOMME.SI et RECHERCHEV.",
                "Tableaux : Transformez vos listes en 'Tableaux' (Ctrl+L) pour que vos données soient propres et dynamiques.",
                "Visuels : Un graphique bien choisi (Histogramme pour comparer, Camembert pour les parts) explique mieux qu'un long tableau de chiffres."
              ]
            },
            {
              title: "4. L'ouverture sur le monde (Jour 3)",
              content: [
                "Web & IA : Utilisez Google et YouTube pour vous dépanner seul. Utilisez Gemini ou ChatGPT pour rédiger des mails, traduire des termes ou comprendre une formule Excel complexe.",
                "Emails : Professionnalisme avant tout. Objet clair, politesse, et surtout... n'oubliez pas la pièce jointe !"
              ]
            },
            {
              title: "💡 Conclusion : L'auto-formation continue",
              content: [
                "Le numérique évolue vite. Le plus important n'est pas de tout savoir, mais de savoir CHERCHER.",
                "Utilisez vos favoris, posez des questions aux IA, et n'ayez plus peur de tester de nouvelles fonctions !"
              ]
            }
          ]
        },
        exercises: [
          {
            title: "Le Défi Final : Projet 360°",
            description: "Réaliser une tâche complète en utilisant Windows, Excel et Word.",
            steps: [
              "1. Windows : Créez un dossier 'BILAN_FORMATION' sur votre bureau. Dedans, créez un fichier Word nommé 'Rapport_Final'.",
              "2. Excel : Créez un tableau de suivi de stock (5 lignes). Ajoutez une formule SI pour les alertes et un graphique en secteurs.",
              "3. Intégration : Copiez le tableau Excel et le graphique dans votre document Word.",
              "4. Organisation : Enregistrez le document Word en PDF (Fichier -> Enregistrer sous -> PDF).",
              "5. Rangement : Déplacez votre dossier final vers 'Mes Documents' pour libérer le bureau."
            ]
          },
          {
            title: "Support et Aide par l'IA",
            description: "Utiliser Gemini pour justifier un retard de production.",
            steps: [
              "Demandez à Gemini : 'Rédige-moi un email poli et professionnel pour informer mon responsable d'un retard de 4h dû à une panne machine.'",
              "Relisez et corrigez le texte selon les spécificités de Ferra Coffret.",
              "Cherchez sur Google le site officiel de Ferra Coffret et notez l'adresse dans vos favoris."
            ]
          }
        ],
        quiz: [
          {
            question: "Quel est le raccourci ultime pour 'annuler' une erreur que l'on vient de faire ?",
            options: ["Ctrl + A", "Ctrl + Z", "Ctrl + Alt + Del"],
            correctAnswer: 1
          },
          {
            question: "Pour envoyer un fichier par email sans qu'il ne soit modifiable par les autres, quel format choisir ?",
            options: ["Le format Word (.docx)", "Le format PDF (.pdf)", "Le format Excel (.xlsx)"],
            correctAnswer: 1
          },
          {
            question: "Quelle est la première chose à faire quand on est bloqué sur une fonction Excel ?",
            options: ["Eteindre l'ordinateur", "Chercher un tuto sur YouTube ou demander à une IA", "Appeler un collègue au hasard"],
            correctAnswer: 1
          },
          {
            question: "Dans Excel, pourquoi le mode 'Tableau' (Ctrl + L) est-il recommandé ?",
            options: ["Parce que c'est plus joli", "Parce qu'il gère les filtres et les formules automatiquement", "Parce qu'on ne peut pas faire autrement"],
            correctAnswer: 1
          },
          {
            question: "Quel est le rôle principal d'un agent de maîtrise au niveau digital ?",
            options: ["Réparer les ordinateurs", "Utiliser les outils numériques pour suivre la production et communiquer efficacement", "Passer la journée sur Internet"],
            correctAnswer: 1
          }
        ]
      }
    ]
  }
];

