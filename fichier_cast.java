public class TypeCastingExample {  

    // Fonction pour convertir une chaîne en entier  
    public static int stringToInt(String s) {  
        try {  
            return Integer.parseInt(s);  
        } catch (NumberFormatException e) {  
            System.out.println("Erreur: '" + s + "' n'est pas un entier valide.");  
            return 0; // Retourne 0 en cas d'erreur  
        }  
    }  

    // Fonction pour convertir une chaîne en flottant  
    public static float stringToFloat(String s) {  
        try {  
            return Float.parseFloat(s);  
        } catch (NumberFormatException e) {  
            System.out.println("Erreur: '" + s + "' n'est pas un flottant valide.");  
            return 0; // Retourne 0.0 en cas d'erreur  
        }  
    }  

    // Fonction pour convertir une liste d'entiers en tableau  
    public static Integer[] listToArray(java.util.List<Integer> list) {  
        return list.toArray(new Integer[0]);  
    }  

    // Fonction pour convertir un entier en chaîne  
    public static String intToString(int i) {  
        return String.valueOf(i);  
    }  

    // Fonction pour convertir un flottant en chaîne  
    public static String floatToString(float f) {  
        return String.valueOf(f);  
    }  

    public static void main(String[] args) {  
        // Exemple d'utilisation des fonctions de conversion  

        // Conversion de chaîne à entier  
        String numStr = "42";  
        int numInt = stringToInt(numStr);  
        System.out.println("Chaîne '" + numStr + "' convertie en entier: " + numInt);  

        // Conversion de chaîne à flottant  
        String floatStr = "3.14";  
        float numFloat = stringToFloat(floatStr);  
        System.out.println("Chaîne '" + floatStr + "' convertie en flottant: " + numFloat);  

        // Conversion de liste à tableau  
        java.util.List<Integer> myList = java.util.Arrays.asList(1, 2, 3, 4);  
        Integer[] myArray = listToArray(myList);  
        System.out.println("Liste " + myList + " convertie en tableau: " + java.util.Arrays.toString(myArray));  

        // Conversion d'un entier à une chaîne  
        int number = 100;  
        String numToStr = intToString(number);  
        System.out.println("Entier " + number + " converti en chaîne: '" + numToStr + "'");  

        // Conversion d'un flottant à une chaîne  
        float pi = 3.14159f;  
        String piToStr = floatToString(pi);  
        System.out.println("Flottant " + pi + " converti en chaîne: '" + piToStr + "'");  
    }  
}