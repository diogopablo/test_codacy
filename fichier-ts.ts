import axios from 'axios'; // Utiliser axios pour les requêtes HTTP  

interface User {  
    id: number;  
    name: string;  
}  

class UserManager {  
    private users: User[] = [];  

    async fetchUsers(): Promise<void> {  
        try {  
            const response = await axios.get<User[]>('https://jsonplaceholder.typicode.com/users');  
            this.users = response.data;  
        } catch (error) {  
            console.error('Error fetching users', error);  
        }  
    }  

    getUser(id: number): User | undefined {  
        return this.users.find(user => user.id === id);  
    }  
}  

const userManager = new UserManager();  
userManager.fetchUsers().then(() => {  
    console.log(userManager.getUser(1));  
});