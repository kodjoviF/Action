export type Challenge = {
    id: string;
    type: 'action' | 'truth';
    text: string;
  };
  
  export const challenges: Challenge[] = [
    // ===== ACTIONS ÉPICÉES =====
    { id: 'a1', type: 'action', text: "Fais 10 pompes en séduisant la personne à ta droite" },
    { id: 'a2', type: 'action', text: "Chante une chanson d'amour en regardant intensément quelqu'un dans les yeux" },
    { id: 'a3', type: 'action', text: "Fais une danse sensuelle avec une chaise comme partenaire" },
    { id: 'a4', type: 'action', text: "Mime ton fantasme le plus osé sans parler" },
    { id: 'a5', type: 'action', text: "Fais un strip-tease... de ton manteau (au moins 3 mouvements)" },
    { id: 'a6', type: 'action', text: "Poste une story Instagram où tu fais un bisou à la personne à ta gauche" },
    { id: 'a7', type: 'action', text: "Avale une cuillère de piment sans faire de grimace" },
    { id: 'a8', type: 'action', text: "Fais un massage des épaules à la personne la plus âgée du groupe" },
    { id: 'a9', type: 'action', text: "Envoie un message vocal sexy à un contact choisi par le groupe" },
    { id: 'a10', type: 'action', text: "Porte les vêtements de la personne à ta droite par-dessus les tiens pendant 2 tours" },
    { id: 'a11', type: 'action', text: "Fais une déclaration d'amour à un objet inanimé dans la pièce" },
    { id: 'a12', type: 'action', text: "Mets des glaçons dans ton t-shirt et garde-les jusqu'à ce qu'ils fondent" },
    { id: 'a13', type: 'action', text: "Fais une imitation érotique d'une célébrité" },
    { id: 'a14', type: 'action', text: "Goûte une combinaison bizarre de nourriture choisie par le groupe" },
    { id: 'a15', type: 'action', text: "Fais 1 minute de gainage en position sensuelle" },
    { id: 'a16', type: 'action', text: "Montre ta pire photo de profil sur ton téléphone" },
    { id: 'a17', type: 'action', text: "Lèche ton coude (bonne chance !)" },
    { id: 'a18', type: 'action', text: "Fais une confidence gênante à voix haute" },
    { id: 'a19', type: 'action', text: "Porte quelqu'un sur ton dos pendant 30 secondes" },
    { id: 'a20', type: 'action', text: "Fais un selfie avec la personne que tu trouves la plus sexy dans la pièce et poste-le" },
  
    // ===== VÉRITÉS ÉPICÉES =====
    { id: 'v1', type: 'truth', text: "Quelle est la partie du corps que tu regardes en premier chez un partenaire potentiel ?" },
    { id: 'v2', type: 'truth', text: "As-tu déjà fantasmé sur quelqu'un dans cette pièce ?" },
    { id: 'v3', type: 'truth', text: "Quel est le pire date que tu aies jamais fait et pourquoi ?" },
    { id: 'v4', type: 'truth', text: "As-tu déjà simulé un orgasme ? Si oui, pourquoi ?" },
    { id: 'v5', type: 'truth', text: "Quelle est ta position préférée et pourquoi ?" },
    { id: 'v6', type: 'truth', text: "Décris le pire baiser que tu aies jamais reçu" },
    { id: 'v7', type: 'truth', text: "As-tu déjà envoyé un nude ? À qui et pourquoi ?" },
    { id: 'v8', type: 'truth', text: "Quel est ton fantasme le plus inavouable ?" },
    { id: 'v9', type: 'truth', text: "As-tu déjà couché avec quelqu'un après moins de 24h de rencontre ?" },
    { id: 'v10', type: 'truth', text: "Quelle est la chose la plus bizarre qui t'excite secrètement ?" },
    { id: 'v11', type: 'truth', text: "As-tu déjà menti sur ton nombre de partenaires sexuels ?" },
    { id: 'v12', type: 'truth', text: "Quelle célébrité te fait fantasmer honteusement ?" },
    { id: 'v13', type: 'truth', text: "Décris ton pire échec sexuel" },
    { id: 'v14', type: 'truth', text: "As-tu déjà trompé un partenaire ?" },
    { id: 'v15', type: 'truth', text: "Quelle est la chose la plus gênante que tu aies faite pour séduire quelqu'un ?" },
    { id: 'v16', type: 'truth', text: "As-tu déjà pensé à quelqu'un d'autre pendant un rapport ?" },
    { id: 'v17', type: 'truth', text: "Quel est ton pire défaut au lit ?" },
    { id: 'v18', type: 'truth', text: "As-tu déjà regretté un coup d'un soir immédiatement après ?" },
    { id: 'v19', type: 'truth', text: "Quelle est la pire excuse que tu aies utilisée pour éviter un rapport ?" },
    { id: 'v20', type: 'truth', text: "Si tu devais coucher avec quelqu'un dans cette pièce, qui choisirais-tu et pourquoi ?" }
  ];
  
  export function getRandomChallenge(type?: 'action' | 'truth'): Challenge {
    const filtered = type 
      ? challenges.filter(c => c.type === type)
      : challenges;
    
    return filtered[Math.floor(Math.random() * filtered.length)];
  }