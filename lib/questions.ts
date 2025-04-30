export type Challenge = {
    id: string;
    type: 'action' | 'truth';
    text: string;
    category: 'chill' | 'medium' | 'spicy';
  };
  
  export const challenges: Challenge[] = [
    // ===== CATÉGORIE CHILL 😌 =====
    {
      id: 'c-a1', 
      type: 'action', 
      text: "Fais 10 sauts sur place en imitant une grenouille",
      category: "chill"
    },
    {
      id: 'c-a2', 
      type: 'action', 
      text: "Chante les 10 premières secondes de ta chanson préférée",
      category: "chill"
    },
    {
      id: 'c-a3', 
      type: 'action', 
      text: "Fais une imitation d'animal pendant 10 secondes",
      category: "chill"
    },
    {
      id: 'c-a4', 
      type: 'action', 
      text: "Danse comme si personne ne te regardait pendant 15 secondes",
      category: "chill"
    },
    {
      id: 'c-a5', 
      type: 'action', 
      text: "Fais un compliment à chaque personne du groupe",
      category: "chill"
    },
  
    {
      id: 'c-v1', 
      type: 'truth', 
      text: "Quel est ton goûter préféré ?",
      category: "chill"
    },
    {
      id: 'c-v2', 
      type: 'truth', 
      text: "Quel film pourrais-tu regarder en boucle ?",
      category: "chill"
    },
    {
      id: 'c-v3', 
      type: 'truth', 
      text: "Quel est ton endroit préféré pour te relaxer ?",
      category: "chill"
    },
    {
      id: 'c-v4', 
      type: 'truth', 
      text: "Qui est la personne la plus drôle que tu connais ?",
      category: "chill"
    },
    {
      id: 'c-v5', 
      type: 'truth', 
      text: "Quelle est ta saison préférée et pourquoi ?",
      category: "chill"
    },
  
    // ===== CATÉGORIE MEDIUM 😏 =====
    {
      id: 'm-a1', 
      type: 'action', 
      text: "Poste une story Instagram avec le filtre le plus ridicule",
      category: "medium"
    },
    {
      id: 'm-a2', 
      type: 'action', 
      text: "Mange une cuillère de pâte à tartiner sans les mains",
      category: "medium"
    },
    {
      id: 'm-a3', 
      type: 'action', 
      text: "Fais 15 pompes en faisant un bruit d'animal à chaque descente",
      category: "medium"
    },
    {
      id: 'm-a4', 
      type: 'action', 
      text: "Porte les vêtements de la personne à ta gauche pendant 2 tours",
      category: "medium"
    },
    {
      id: 'm-a5', 
      type: 'action', 
      text: "Envoie un message vocal chanté à un contact choisi par le groupe",
      category: "medium"
    },
  
    {
      id: 'm-v1', 
      type: 'truth', 
      text: "Quel est le pire cadeau que tu aies jamais reçu ?",
      category: "medium"
    },
    {
      id: 'm-v2', 
      type: 'truth', 
      text: "As-tu déjà menti pour éviter un rendez-vous ?",
      category: "medium"
    },
    {
      id: 'm-v3', 
      type: 'truth', 
      text: "Quelle est la chose la plus gênante que tes parents aient faite ?",
      category: "medium"
    },
    {
      id: 'm-v4', 
      type: 'truth', 
      text: "As-tu déjà pleuré devant un film ? Lequel ?",
      category: "medium"
    },
    {
      id: 'm-v5', 
      type: 'truth', 
      text: "Quel est ton péché mignon alimentaire ?",
      category: "medium"
    },
  
    // ===== CATÉGORIE SPICY 🔥 =====
    {
      id: 's-a1', 
      type: 'action', 
      text: "Fais un strip-tease... de ton manteau (3 mouvements minimum)",
      category: "spicy"
    },
    {
      id: 's-a2', 
      type: 'action', 
      text: "Envoie un message 'Je t'aime' à un contact aléatoire de ton téléphone",
      category: "spicy"
    },
    {
      id: 's-a3', 
      type: 'action', 
      text: "Mime ton fantasme le plus bizarre sans parler",
      category: "spicy"
    },
    {
      id: 's-a4', 
      type: 'action', 
      text: "Fais une déclaration d'amour à un objet inanimé dans la pièce",
      category: "spicy"
    },
    {
      id: 's-a5', 
      type: 'action', 
      text: "Montre la photo la plus compromettante de ton téléphone",
      category: "spicy"
    },
  
    {
      id: 's-v1', 
      type: 'truth', 
      text: "As-tu déjà simulé un orgasme ? Dans quelle circonstance ?",
      category: "spicy"
    },
    {
      id: 's-v2', 
      type: 'truth', 
      text: "Quelle est la partie du corps que tu regardes en premier chez quelqu'un ?",
      category: "spicy"
    },
    {
      id: 's-v3', 
      type: 'truth', 
      text: "As-tu déjà eu un coup de foudre pour un·e ami·e ?",
      category: "spicy"
    },
    {
      id: 's-v4', 
      type: 'truth', 
      text: "Quel est le pire date que tu aies jamais fait ?",
      category: "spicy"
    },
    {
      id: 's-v5', 
      type: 'truth', 
      text: "As-tu déjà regretté un coup d'un soir immédiatement après ?",
      category: "spicy"
    }
  ];
  
  export function getRandomChallenge(
    type?: 'action' | 'truth',
    category?: 'chill' | 'medium' | 'spicy'
  ): Challenge {
    let filtered = challenges;
    
    if (type) filtered = filtered.filter(c => c.type === type);
    if (category) filtered = filtered.filter(c => c.category === category);
  
    return filtered[Math.floor(Math.random() * filtered.length)];
  }