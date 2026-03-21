import { userStore } from "../stores/user_store"

export default class Languages {
    static en_US = {
        'yes' : 'Yes',
        'no' : 'No',
        'about': 'About',
        'home' : 'Home',
        'welcome' : 'Welcome',
        'language' : 'Language',
        'todo' : 'Todo',
        'authenticated' : 'Authenticated',
        'notauthenticated' : 'Not authenticated',
        'login' : 'Login',
        'signup' : 'Sign Up',
        'signout' : 'Sign Out',
        'signoutconfirm' : 'Are you sure you want to signout? the current session will be cleared?',
        'name': 'Name',
        'email': 'Email',
        'password': 'Password',
        'passwordmin10': 'Password minimum length is 10 caracters',
        'emailmax255': 'Email length is 255 caracters',
        'chatbot' : 'chatbot',
        'todoCompleted' : 'Completed',
        'todoDescription' : 'Description',
        'todoDelete' : 'Delete?',
        'todoAdd' : 'Add',
        'todoDel' : 'X',
        'todoDelConfirm' : 'Are you sure you want to delete the current todo',
        'RRCT': "React Remux Chat Template"
    }

    static fr_CA = {
        'yes' : 'Oui',
        'no' : 'Non',
        'about': 'Au sujet de',
        'home' : 'Home',
        'welcome' : 'Bienvenue',
        'language' : 'Langage',
        'todo' : 'A faire',
        'authenticated' : 'Authentifié',
        'notauthenticated' : 'Pas authentifié',
        'login' : 'Se connecter',
        'signup' : "S'enregistrer",
        'signout' : 'Se déconnecter',
        'signoutconfirm' : 'Êtes-vous sûr de vouloir vous déconnecter ? La session en cours sera effacée.',
        'name' : 'Nom',
        'email': 'courriel',
        'password': 'Mot de passe',
        'passwordmin10': 'La longueur minimum du mot de passe est de 10 caractères',
        'emailmax255': 'Le langueur maximale du courriel est de 255 caractères',
        'chatbot' : 'chatbot',
        'todoCompleted' : 'Complété',
        'todoDescription' : 'Description',
        'todoDelete' : 'Effacer?',
        'todoAdd' : 'Ajouter',
        'todoDel' : 'X',
        'todoDelConfirm' : "Êtes-vous sûr de vouloir supprimer l'activité en cours",
        'RRCT': "React Remux Chat Template"
    }

    static GetLabel(value: string): string {
        const lang =
            userStore.language == "en-US"
                ? Languages.en_US
                : Languages.fr_CA
        let l = value as keyof typeof lang

        return lang[l] ?? value
    }
}
