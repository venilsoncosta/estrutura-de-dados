package recursividade;

public class Recursividade {
    public static void main(String[] args) {
        var tes = teste(5);
        System.out.println(tes);
    }

    public static int teste(int numero) {
        if (numero <= 0) {
            return 0;
        }
        return numero + teste(numero - 1);
    }
}
