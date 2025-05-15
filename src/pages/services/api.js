// services/api.js

export const fetchTalks = () => {
    return Promise.resolve([
        { id: 1, title: 'React Basics', topic: 'React', description: 'Introduction to React', duration: 60, level: 'Débutant', room: 'Salle 1', day: 'Lundi' },
        { id: 2, title: 'Advanced Symfony', topic: 'Symfony', description: 'Deep dive into Symfony', duration: 90, level: 'Avancé', room: 'Salle 2', day: 'Lundi' },
        { id: 3, title: 'Docker Workshop', topic: 'DevOps', description: 'Master Docker for development', duration: 120, level: 'Intermédiaire', room: 'Salle 3', day: 'Mardi' }
    ]);
};

export const createTalk = (newTalk) => {
    console.log("Talk ajouté :", newTalk);
    return Promise.resolve(newTalk);
};