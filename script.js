// 1. Initialisation des données
const users = JSON.parse(localStorage.getItem('users')) || [];

// 2. Éléments du DOM
const authModal = document.getElementById('auth-modal');
const loginIcon = document.getElementById('login-icon'); // L'icône profil en haut à droite
const btnAction = document.getElementById('btn-action');
const usernameInput = document.getElementById('username');
const passwordInput = document.getElementById('password');
const errorMsg = document.getElementById('auth-error');
const toggleAuth = document.getElementById('toggle-auth');

let isLoginMode = true; // Pour basculer entre Connexion et Inscription

// Ouvrir la modal
loginIcon.onclick = () => authModal.style.display = 'flex';

// Fermer la modal
document.getElementById('close-modal').onclick = () => {
    authModal.style.display = 'none';
};

// Basculer entre login et inscription
toggleAuth.onclick = () => {
    isLoginMode = !isLoginMode;
    document.getElementById('modal-title').innerText = isLoginMode ? "Connexion" : "Inscription";
    btnAction.innerText = isLoginMode ? "Se connecter" : "Créer mon compte";
    errorMsg.innerText = "";
};

// 3. Logique de validation
btnAction.onclick = () => {
    const pseudo = usernameInput.value;
    const mdp = passwordInput.value;
    errorMsg.innerText = "";

    if (isLoginMode) {
        // --- MODE CONNEXION ---
        const user = users.find(u => u.pseudo === pseudo);
        if (!user) {
            errorMsg.innerText = "Erreur : Ce pseudo n'existe pas.";
        } else if (user.mdp !== mdp) {
            errorMsg.innerText = "Erreur : Mot de passe incorrect.";
        } else {
            alert("Connexion réussie ! Bienvenue " + pseudo);
            localStorage.setItem('currentUser', pseudo);
            authModal.style.display = 'none';
        }
    } else {
        // --- MODE INSCRIPTION ---
        const userExists = users.some(u => u.pseudo === pseudo);
        if (userExists) {
            errorMsg.innerText = "Erreur : Ce pseudo est déjà pris.";
        } else if (pseudo.length < 3 || mdp.length < 4) {
            errorMsg.innerText = "Pseudo ou mot de passe trop court.";
        } else {
            // Ajouter le nouvel utilisateur
            users.push({ pseudo: pseudo, mdp: mdp });
            localStorage.setItem('users', JSON.stringify(users));
            alert("Compte créé ! Tu peux maintenant te connecter.");
            toggleAuth.onclick(); // Bascule auto vers le login
        }
    }
};